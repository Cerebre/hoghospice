const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'Registration Accepted',
    text: `Hi ${name},\n\nThank you for registering. We have received your registration and a follow-up call will be made shortly.\n\nBest regards,\nThe Example Team`,
  };

  const info = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
