require('dotenv').config({ path: "./config.env"})
const errorHandler = require("./middleware/errorHandler");
const express = require('express');
const connection = require("./config/db");
const cors = require('cors');

connection;

const allowedorigins = ['https://hazmick.xyz', 'https://www.hazmick.xyz'];
const app = express();

app.use(express.json());
app.use(cors({
    origin: allowedorigins
}))

app.use("/api/auth", require('./routes/auth'));
app.use("/private", require("./routes/private"));
app.use("/payment", require("./routes/coins"));
app.use("/coins", require("./routes/coinselection"));
app.use("/ping", require("./routes/ping"));

app.use(errorHandler);
const PORT = 5000;


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
