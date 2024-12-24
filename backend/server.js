const express = require('express');
const dotenv = require('dotenv').config();

const app = express();



app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Pun',
            content: 'Why don’t scientists trust atoms? Because they make up everything!'
        },
        {
            id: 2,
            title: 'One-liner',
            content: 'I asked the librarian if she had any books on paranoia. She whispered, "They’re right behind you!"'
        },
        {
            id: 3,
            title: 'Knock-knock',
            content: 'Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s cold out here!'
        },
        {
            id: 4,
            title: 'Dad Joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id: 5,
            title: 'Sarcasm',
            content: 'Sure, I’d love to help you out... now, which way did you come in?'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});