const express = require('express');
const cors = require('cors'); // Обязательно для связи с GUI
const app = express();

// Разрешаем твоему GUI (с github.io) стучаться на этот сервер
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 80; // Amvera любит порт 80

app.post('/attack', (req, res) => {
    const { phone, repeats } = req.body;
    console.log(`Принята атака на: ${phone}, повторов: ${repeats}`);
    
    // ТУТ ДОЛЖНА БЫТЬ ТВОЯ ЛОГИКА БОМБЕРА
    
    res.status(200).json({ status: "success", message: "Attack started" });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
