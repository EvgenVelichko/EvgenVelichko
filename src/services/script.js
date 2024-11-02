/** @format */

const form = document.getElementById('contact-form');
form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const telegramToken = '7568727513:AAEgjkP-XQE89qz1NhOYv85uZ3wwSz2QGKg';
    const chatId = '1418643598';
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${telegramToken}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            },
        );

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        alert('Error sending message.');
    }
});
