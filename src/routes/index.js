// const { Router } = require('express');
const nodemailer =  require('nodemailer');
const {google} = require('googleapis');
// const transporter = require("express");
const express = require("express");
const path = require("path");
const router = express.Router();

router.post("/send-email", (req, res) => {
    const {Name, Apellido, Email, Telefono, Asunto, mensaje} = req.body;
    const contentHTML = `
    <h1> User Information</h1>
     <ul>
        <li>Nombre: ${Name}</li>
        <li>Apellido: ${Apellido}</li>
        <li>Email: ${Email}</li>
        <li>Telefono: ${Telefono}</li>
        <li>Asunto: ${Asunto}</li>
     </ul>
     <p>${mensaje}</p> `;


    const CLIENT_ID = 'completar cuando este en el server';
    const CLIENT_SECRET = 'completar cuando este en el server';
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN = 'completar cuando este en el server';

    const oAuth2Cliente = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );
    oAuth2Cliente.setCredentials({refresh_token: REFRESH_TOKEN});

    async function sendMail() {
        try {
            const accessToken = await oAuth2Cliente.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'info@catsaweb.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,
                },
            });
            const mailOptions = {
                from: 'CatsaWEb <info@catsaweb.com>',
                to: 'info@catsaweb.com>',
                subject: "Mail CatsaWeb Contactos",
                html: contentHTML,
            };
            const result = await transporter.sendMail(mailOptions);
            return result;
        } catch (err) {
            console.log(err);
        }
    }

    sendMail()
        .then((result) => res.status(200).sendFile(path.join(__dirname, '../public/pages/contacto.html')))
        .catch((error) => console.log(error.message));
});



    module.exports = router;