


const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const dns = require('dns');
dotenv.config();

// ✅ Force IPv4 (fix ENETUNREACH on Render)
dns.setDefaultResultOrder('ipv4first');

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
  // service: 'gmail',
host: process.env.EMAIL_HOST,
port: 587,
secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
