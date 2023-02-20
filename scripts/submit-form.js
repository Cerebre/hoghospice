// const nodemailer = require('nodemailer');

// exports.handler = async (event) => {
//   const { name, email, message } = JSON.parse(event.body);

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: 'your-email@example.com',
//     to: email,
//     subject: 'Registration Accepted',
//     text: `Hi ${name},\n\nThank you for registering. We have received your registration and a follow-up call will be made shortly.\n\nBest regards,\nThe Example Team`,
//   };

//   const info = await transporter.sendMail(mailOptions);

//   return {
//     statusCode: 200,
//     body: JSON.stringify(info),
//   };
// };

const form = document.querySelector('#myForm');
const response = document.querySelector('#response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch('/form-handler.php', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      response.textContent = 'Form submitted successfully!';
      response.classList.remove('error');
    } else {
      response.textContent = 'There was an error submitting the form.';
      response.classList.add('error');
    }
  } catch (error) {
    console.error(error);
    response.textContent = 'There was an error submitting the form.';
    response.classList.add('error');
  }

  form.reset();
});
