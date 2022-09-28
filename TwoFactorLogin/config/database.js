const mongoose = require('mongoose');

module.exports = (uri)=>{
    mongoose.connect(uri);

    mongoose.connection.on('connection', ()=>{
        console.log('New Mongoose connection');
    })
    mongoose.connection.on('disconnection', ()=>{
        console.log('Disconnected sucessfully');
    })
    mongoose.connection.on('error', (err)=>{
        console.log('Mongoose error: ' + err);
    })
    
    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log('Mongoose connection ended up');
            process.exit();
        });
    })
}