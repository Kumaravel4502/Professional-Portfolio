const nodemailer = require('nodemailer');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'Kumaravel.Dev45@gmail.com',
    pass: 'jibkvqqtxofjytma',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function test() {
  try {
    const info = await transporter.sendMail({
      from: 'Kumaravel.Dev45@gmail.com',
      to: 'Kumaravel.Dev45@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email',
    });
    console.log('Success:', info);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
