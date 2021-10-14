import express from 'express';
import data from './data.js'

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('Servidor em pé!!!> |_(*o*)_| ');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servindo em http://localhost:${port}`);
})
