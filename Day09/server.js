const express = require("express");
const app = express();

const PORT = 5000;

app.set('view engine', 'pug')
app.set('views', './views')


app.get("/", (req, res) => {
  res.render("index")
})


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))