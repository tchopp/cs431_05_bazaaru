import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.attachment('/Bubble_Tea.png');
    res.send('Hello BazaaRu devs! <3');
})

app.get('/testing', (req, res) => {
    res.send('blah');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
    
