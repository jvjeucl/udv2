// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from ' + process.env.ENVIRONMENT,
        version: process.env.VERSION || '1.0.0'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});