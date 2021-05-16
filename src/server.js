const express = require('express');
const cors = require('cors');
var nodemailer = require('nodemailer');
require("dotenv").config();

const app = express()
app.use(cors())
app.use(express.json())

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// next steps: custom subject and text
app.post('/mail', (req, res) => {
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message

  var mailOptions = {
    to: process.env.EMAIL // receiver email
    subject: subject,
    text: message + ' -- From: ' + email
  }
  
  // var mailOptions = {
  //   from: 'jenny_tan1@brown.edu', // this doesn't matter
  //   to: process.env.EMAIL,
  //   subject: 'Email subject',
  //   text: 'Hello world!'
  // };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success!')
    }
  });
})

app.listen(process.env.PORT, function () {
  console.log(`Server listening on port ${process.env.PORT}`);
});
