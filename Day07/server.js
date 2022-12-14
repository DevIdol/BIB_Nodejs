const express = require('express');
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/userRoutes')
const app = express();

app.use(bodyParser.json());
const port = 5000;


app.use("/api/v1/users", usersRoutes)


app.listen(port, () => console.log(`My server is running on port ${port}`))