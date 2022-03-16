const mongoose = require('mongoose');

async function connectDb(){
    try{
        const MONGO_URI = 'mongodb://localhost:27017/nextjsdb';
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Connect to Mongodb localhost');
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDb; 