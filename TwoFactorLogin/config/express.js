const express = require('express'),
    path = require('path'),
    consign = require('consign');

const PORT = process.env.PORT;

module.exports = (()=>{
    const app = express();

    const cwd = path.resolve(__dirname + '/../')

    app.set('view engine', 'ejs')
    app.set('views', path.resolve(cwd, '/src/views'))

    consign({cwd: 'src'})
        .include('models')
        .then('controllers')
        .then('views')
        .into(app)

    return app;
})()