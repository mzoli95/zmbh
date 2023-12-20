const cors = require("cors");
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // Használd a true értéket, ha a port 465-ös, false, ha 587-es
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.post("/api/contact-us", (req, res) => {
  const { email, name, message } = req.body;
  const data = req.body;
  console.log(data);
  console.log(email);
  console.log(name);
  console.log(message);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test(email));
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .send({ message: "Hiba történt: Érvénytelen email cím" });
  }

  const options = {
    from: email,
    to: "zmbhsolutions@gmail.com",
    subject: `New message from the Contact-us form: ${name}`,
    text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log("error", error);
      return res.status(500).send({ message: `Hiba történt: ${error}` });
    } else {
      console.log("Email elküldve: " + info.response);
      return res.status(200).send({ message: "Az üzenet sikeresen elküldve." });
    }
  });
});

const port = 4100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
