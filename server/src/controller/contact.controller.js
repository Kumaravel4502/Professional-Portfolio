// const { transporter } = require('../utils/nodemailer.js');

// const sendContactEmail = async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   try {
//     // Email to you
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: ` Portfolio Message: ${subject}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//       `
//     });

//     // Auto-reply to client
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Thank you! I received your message',
//       html: `<p>Hi ${name},<br><br>Thank you for reaching out! I'll reply within 24 hours.<br><br>Best regards,<br>Your Name</p>`
//     });

//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
    
//     console.error(error);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// };

// module.exports = { sendContactEmail };





const { transporter } = require('../utils/nodemailer.js');

const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // ⚡ Send response immediately (no waiting)
  res.status(200).json({ message: 'Message received successfully!' });

  try {
    await Promise.all([
      // 📩 Email to you
      transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Message: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
        `,
      }),

      // 📩 Auto reply to user
      transporter.sendMail({
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank you! I received your message',
        html: `
          <p>Hi ${name},<br><br>
          Thank you for reaching out! I'll reply within 24 hours.<br><br>
          Best regards,<br>Kumaravel D</p>
        `,
      }),
    ]);

  } catch (error) {
    console.error("MAIL ERROR:", error.message);
  }
};

module.exports = { sendContactEmail };