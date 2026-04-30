


const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: process.env.EMAIL_HOST,
//   port: 465,
//   secure: true, // Use TLS
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false, // ✅ Fix for self-signed cert
//   },
// });

// module.exports = { transporter };



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
