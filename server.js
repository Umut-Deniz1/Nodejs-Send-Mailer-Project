const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname + '/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

var transporter = nodemailer.createTransport({
    port: 8080,
    service: 'gmail',
    auth: {
      user: 'sendmailer005@gmail.com',
      pass: 'Mailgonder'
    }
  })
function sendEmail(mail){
    var mailOptions = {
        from: 'sendmailer005@gmail.com',
        to: mail.to,
        subject: mail.subject,
        html: mail.body,
    }
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err)
        }
        else{
            console.log('Mesaj Gönderildi.' + info.response)
        }
    })
}

app.post('/sendEmailForm', (req,res) => {
    mail = {
        to: req.body.email,
        subject: 'Kayıt Doğrulama.',
        body: 'Tebrikler Kaydınız başarılı!!'
    }
    sendEmail(mail)
    res.redirect('/')
})

app.listen(8101, () => {
    console.log('Server is running.')
})