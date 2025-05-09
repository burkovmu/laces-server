// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  tls: {
    rejectUnauthorized: false
  },
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: process.env.SECURE,
});

export default function(req, res) {
  console.log(req.body);

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: `General Message From ${req.body.name}`,
    text: `Имя клиента: ${req.body.message}; Номер: ${req.body.phone}; Email: ${req.body.email}; Сообщение: ${req.body.message}`,
    html: `<h3>Имя клиента: ${req.body.name} </h3>
           <h4>Номер:       ${req.body.phone}</h4>
           <h4>Email:       ${req.body.email}</h4>
           <h4>Cообщение:</h4>
           <div>${req.body.message}</div>
           ${ req.body.id &&
          `<h2>Данные о выбранном участке:</h2>
           <h4>Номер участка: ${req.body.id}</h4>
           <h4>Кол-во соток земли: ${req.body.sizeSot}</h4>
           <h4>Цена: ${req.body.price}р.</h4>`
           || '' }`,
  };

 transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });

  res.status(200).send({
    status: 'success'
  });

}