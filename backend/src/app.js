const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

app.use('/api', productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Top Products API');
});

module.exports = app;
