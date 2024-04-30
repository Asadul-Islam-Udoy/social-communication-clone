const nodemailer = require('nodemailer')
const sendEmail=async(option)=>{
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5f5eb62938dafa",
          pass: "6eabee1aae340e"
        }
      });

  const MailOption={
    from:"5f5eb62938dafa",
    to:option.email,
    subject:option.subject,
    text:option.message
  }
 await transport.sendMail(MailOption)
}
module.exports = sendEmail;