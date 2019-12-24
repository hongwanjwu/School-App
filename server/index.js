const express = require('express');
const app = express();
const path = require('path');
const query = require('../db/query.js');
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/all', (req, res) => {
  query.getAll(req, res);
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
