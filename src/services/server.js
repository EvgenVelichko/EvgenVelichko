const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;
const TELEGRAM_TOKEN = '7568727513:AAGaZx6ceLGBY2QZRW5zyWeP-nqxFNu3X0I';
const CHAT_ID = '1418643598';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;
  const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: text,
    });
    res.send('Message sent to Telegram');
  } catch (error) {
    res.status(500).send('Error sending message to Telegram');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
