const mongoose = require("mongoose");
const dev = require("./config");

const dbURl = dev.db.url;


// Connect MongoDB at
mongoose.set('strictQuery', true)
mongoose.connect(dbURl, {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.info("=======================================================");
        console.log('MongoDB Connection Succeeded.');
        console.info("=======================================================");
    } else {
        console.info("=======================================================");
        console.dir('Error in DB connection: ' + err);
        console.info("=======================================================");
        process.exit(1);
    }
});