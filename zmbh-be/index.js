const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
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

const authRoute = require("./authorization/auth");
app.use("/api/auth", authRoute);
app.post("/api/contact-us", (req, res) => {
  const { email, name, message } = req.body;
  const data = req.body;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .send({ message: "Hiba történt: Érvénytelen email cím" });
  }

  const options = {
    from: email,
    to: "zmbhsolutions@gmail.com",
    subject: `Új üzenet érkezett a Contact-us oldalról: ${name}`,
    text: `Név: ${name}\nEmail: ${email}\nÜzenet: ${message}`,
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
