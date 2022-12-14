const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.express(bodyParser.json());
const port = 5000;





app.listen(port, () => console.log(`My server is running on port ${port}`))