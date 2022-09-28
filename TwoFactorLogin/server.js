require('dotenv').config();
require('./config/database')('mongodb://localhost:27017/TwoSteps');

const app = require('./config/express');

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
});

