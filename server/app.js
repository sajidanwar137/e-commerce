const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const linkDataBase = require('./db/config');

const users = require('./routes/user');
const admin = require('./routes/admin');

const app = express();

dotenv.config();

const port = 5000 || process.env.APP_PORT;
app.use(express.json());
const corsOptions = {
    origin: ["http://localhost:3000"],
    exposedHeaders: ["Authorization"],
};
  
app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", true);
next();
});
//app.use(cors());

app.use('/api/v1/users', users);
app.use('/api/v1', admin);

const startServer = async () => {
    await linkDataBase();
    app.listen(port, () => {
        console.log(`Server is running on PORT: ${port}`)
    })
}

startServer();