const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('HELLO WORLD'));

app.listen(port , () => console.log(`app is listening on port ${port}`));

