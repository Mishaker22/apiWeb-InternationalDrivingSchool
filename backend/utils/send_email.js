const nodemailer = require("nodemailer")

const sendEmail = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
            user: "interdrivingschool@hotmail.com",
            pass: "eybrirjnfzlaxjem"
        }
    });

    const message={
        from: "International Driving Academy <interdrivingschool@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text:options.mensaje

    }
    await transport.sendMail(message)
}
module.exports=sendEmail;