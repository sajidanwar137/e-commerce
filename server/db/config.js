const mongoose = require("mongoose");
const linkDataBase = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_HOST);
        console.log(`Connected to MongoDB: ${connect.connection.host}`)
    }
    catch (error ) {
        console.log(`Error connecting to MongoDB:${error.message}`)
    }
}

module.exports = linkDataBase;