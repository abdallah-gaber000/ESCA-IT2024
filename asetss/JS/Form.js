// // Install the nodemailer library using: npm install nodemailer

// const nodemailer = require("nodemailer");

// // Function to send the email
// function sendEmail(name, email, phone, city) {
//   // Create a transporter using the SMTP settings
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "your-email@gmail.com",
//       pass: "your-password",
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "abdallahgaber230@gmail.com",
//     subject: "New Email from food wastage",
//     html: `Name: ${name}<br/>Email: ${email}<br/>Phone: ${phone}<br/>City: ${city}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// }

// // Server-side route handling the form submission
// app.post("/registration", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const phone = req.body.phone;
//   const city = req.body.city;

//   // Call the sendEmail function with the form data
//   sendEmail(name, email, phone, city);

//   // Send a response to the client
//   res.send("Email sent from food wastage");
// });
