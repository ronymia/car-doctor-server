require("dotenv").config();

const dev = {
    app: {
        port: process.env.PORT || 4000,
    },
    db: {
        url: process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017",
    }
}

module.exports = dev;
