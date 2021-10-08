const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log(`Mongo DB conected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;