const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});
app.use(limiter);

const validateInputs = [
  check("name")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Name is required"),
  check("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid email is required"),
  check("message")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Message is required"),
  check("phone")
    .trim()
    .matches(/^[0-9()+\s-]*$/)
    .withMessage("Phone number contains invalid characters"),
];

app.post("/send-email", validateInputs, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: "jainjayesh799@gmail.com",
    subject: `RCRS Mail from ${name}`,
    text: `Name: ${name}\nPhone: ${phone}\n\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email");
    } else {
      res.send("Email sent successfully!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
