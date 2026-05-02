
// const { transporter } = require('../utils/nodemailer.js');

// const sendContactEmail = async (req, res) => {
//   const { name, email, subject, message } = req.body;
//   res.status(200).json({ message: 'Message received ✅' });


//   try {
//     console.log("Sending email from:", process.env.EMAIL_USER);
//     console.log("To:", email)
//     await Promise.all([
//       transporter.sendMail({

//         from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//         to: process.env.EMAIL_USER,
//         subject: `📩 New Inquiry from ${name}`,
//         html: `
//     <h2>New Contact Request</h2>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Subject:</strong> ${subject}</p>
//     <p><strong>Message:</strong></p>
//     <p>${message}</p>
//   `,
//       }),
//       transporter.sendMail({

//         from: `"Kumaravel" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: `Thanks for reaching out, ${name}!`,
//         html: `
//     <p>Hi ${name},</p>
//     <p>Thanks for reaching out! I’ve received your message and will reply shortly.</p>
//     <br/>
//     <p>Best,<br/>Kumaravel</p>
//   `,
//       }),
//     ]);

//     res.status(200).json({ message: 'Email sent successfully ✅' });

//   } catch (error) {
//     console.error("MAIL ERROR:", error);
//     res.status(500).json({ message: 'Failed to send email ❌' });
//   }
// };

// module.exports = { sendContactEmail };





// const { transporter } = require('../utils/nodemailer.js');

// const sendContactEmail = async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   console.log("📩 New request received");
//   console.log("From:", name, email);

//   try {
//     await Promise.all([
//       transporter.sendMail({
//         from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//         to: process.env.EMAIL_USER,
//         subject: `📩 New Inquiry from ${name}`,
//         html: `
//           <h2>New Contact Request</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message}</p>
//         `,
//       }),

//       // 📩 Auto-reply to user
//       transporter.sendMail({
//         from: `"Kumaravel" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: `Thanks for reaching out, ${name}!`,
//         html: `
//           <p>Hi ${name},</p>
//           <p>Thanks for reaching out! I’ve received your message and will reply shortly.</p>
//           <br/>
//           <p>Best,<br/>Kumaravel</p>
//         `,
//       }),
//     ]);

//     console.log("✅ Emails sent successfully");
//     res.status(200).json({ message: 'Message received ✅' });

//   } catch (error) {
//     console.error("Email Error:", error);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// };

// module.exports = { sendContactEmail };













// const { transporter } = require('../utils/nodemailer.js');

// const sendContactEmail = async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   console.log("📩 New request received");
//   console.log("From:", name, email);

//   try {
//     // 📩 Email to YOU (admin)
//     const adminMail = {
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: `📩 New Inquiry from ${name}`,
//       html: `
//         <h2>New Contact Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     // 📩 Auto-reply to user
//     const userMail = {
//       from: `"Kumaravel" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `Thanks for reaching out, ${name}!`,
//       html: `
//         <p>Hi ${name},</p>
//         <p>Thanks for reaching out! I’ve received your message and will reply shortly.</p>
//         <br/>
//         <p>Best,<br/>Kumaravel</p>
//       `,
//     };

//     // ✅ Send emails one by one (better debugging)
//     await transporter.sendMail(adminMail);
//     console.log("✅ Admin email sent");

//     await transporter.sendMail(userMail);
//     console.log("✅ User auto-reply sent");

//     res.status(200).json({ message: 'Message received ✅' });

//   } catch (error) {
//     console.error("❌ FULL EMAIL ERROR:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = { sendContactEmail };





const { transporter } = require('../utils/nodemailer.js');

const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📩 New request received");
  console.log("From:", name, email);

  // 📩 Email to YOU
  const adminMail = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📩 New Inquiry from ${name}`,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  // 📩 Auto reply
  const userMail = {
    from: `"Kumaravel" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for reaching out! I’ve received your message and will reply shortly.</p>
      <br/>
      <p>Best,<br/>Kumaravel</p>
    `,
  };

  // ✅ Respond instantly (no waiting)
  res.status(200).json({ message: 'Message received ✅' });

  // 🔁 Send emails in background
  try {
    await transporter.sendMail(adminMail);
    console.log("✅ Admin email sent");

    await transporter.sendMail(userMail);
    console.log("✅ User email sent");
  } catch (error) {
    console.error("❌ Background Email Error:", error);
  }
};

module.exports = { sendContactEmail };