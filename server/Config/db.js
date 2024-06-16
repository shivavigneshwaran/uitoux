
const mongoose = require('mongoose');
const Brand = require('../Modals/Brand');
getDataBase().catch(err => console.log(err));

async function getDataBase(){
    try{

        const dbURI = 'mongodb://localhost:27017/uitoux';

        await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log('Database connected...!');

    }catch(err){
        console.error('Error connecting to the database:', err);
    }
}

module.exports = {
    getDataBase
}