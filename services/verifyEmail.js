const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const config = require("config");
sgMail.setApiKey(config.get("sendGridKey"));

const transporter = nodemailer.createTransport(
  {
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
      user: "apikey",
      pass:
        "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"
    },
    logger: false,
    debug: false // include SMTP traffic in the logs
  },
  {
    // default message fields

    // sender info
    from: "Pangalink <no-reply@local.com>"
  }
);

function verifyEmail(user, token) {
  const msg = {
    to: "webfalcon.us@gmail.com",
    from: "email@aramvardanyan.me",
    templateId: "d-f126da7d2d94445a99bbde7dc636f792",
    dynamic_template_data: {
      url: `http://localhost:3000/${token}`
    }
  };
  sgMail.send(msg);
}
exports.verifyEmail = verifyEmail;
