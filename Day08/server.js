const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;

//middleware
app.use(bodyParser.json());

//static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));