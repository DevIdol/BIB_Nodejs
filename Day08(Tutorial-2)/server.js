const express = require('express')
const calcRoutes = require("./routes/calcRoutes")
const app = express();
const PORT = 5000;

app.use("/api", calcRoutes)

app.listen(PORT, () => console.log(`My server is connected on http://localhost:${PORT}`));