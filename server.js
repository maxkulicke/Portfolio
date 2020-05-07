const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');
const app = express();
const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// app.use(cors())
// app.use(express.json())
// app.use('/', router)
// app.listen(3002)

const transport = {
  host: 'http://smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  secure: true,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `

  let mail = {
    from: name,
    to: 'mkulicke@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})
