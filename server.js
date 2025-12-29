const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

const appName = process.env.APP_NAME

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading page');
            return;
        }
        const html = data.replace('$$', appName);
        res.send(html);
        console.log(`Request served by ${appName}`);
    });
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
