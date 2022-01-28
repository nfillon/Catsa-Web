
const express = require('express');
const app = express();

const past = require('path')


app.user(express.static(path.join(__dirname, '../pages/contacto.html' )))


app.listen(3000, () => ){
    console.log('Server on port 3000')

}