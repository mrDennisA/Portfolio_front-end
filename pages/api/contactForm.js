import mail from "@sendgrid/mail";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function contactForm(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.fullName}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: process.env.SENDGRID_EMAIL_TO,
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: "New Contact message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);
  console.log(data);

  res.status(200).json({ status: "Ok" });
}
