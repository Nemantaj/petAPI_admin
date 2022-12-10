const Admin = require("../models/Admin");
const Token = require("../models/Token");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer");
const crypto = require("crypto");

exports.adminLogin = (req, res, next) => {
  const email = req.body.email;
  const pwd = req.body.pass;

  let admin;

  if (!email || !pwd) {
    const error = new Error(
      "Please provide your login credentials to continue!"
    );
    error.title = "Error Occured";
    error.statusCode = 422;
    throw error;
  }

  Admin.findOne({ email: email })
    .then((result) => {
      if (!result) {
        const error = new Error(
          "There are no users related to this email address!"
        );
        error.title = "Error Occured";
        error.statusCode = 422;
        throw error;
      }

      admin = result;
      return bcryptjs.compare(pwd, result.password);
    })
    .then((passMatch) => {
      if (!passMatch) {
        const error = new Error("The password you entered is incorrect!.");
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      const token = jwt.sign(
        {
          email: admin.email,
          adminId: admin._id.toString(),
        },
        "secret"
      );

      res.status(200).json({
        token: token,
        adminId: admin._id,
        name: admin.name,
        message: {
          title: "Login Successfull!",
          msg: "Logging In!",
        },
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.sendRecoveryCodes = async (req, res, next) => {
  const email = req.params.email;

  if (!email) {
    const error = new Error(
      "No email address is found in the request object!."
    );
    error.title = "Error Occured!";
    error.statusCode = 422;
    throw error;
  }

  let admin;
  let recoveryCodes;

  Admin.findOne({ email: email })
    .then((result) => {
      if (!result) {
        const error = new Error(
          "There are no users with this corresponding email address!"
        );
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      admin = result;

      return Token.findOne({ userId: result._id });
    })
    .then((result) => {
      recoveryCodes = Math.floor(100000 + Math.random() * 900000);

      if (result === null) {
        const token = new Token({
          userId: admin._id,
          token: recoveryCodes,
        });
        return token.save();
      } else {
        result.token = recoveryCodes;
        result.createdAt = Date.now();
        return result.save();
      }
    })
    .then((result) => {
      if (!result) {
        const error = new Error("An internal occured, please try again!");
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      let mailTransporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: "nemantajsahu7@gmail.com",
          pass: "lphqnirgfqpclqyt",
        },
      });

      let mailDetails = {
        from: "Kukurku <noreply@kukurku.com>",
        to: email,
        subject: "Reset your password",
        html: `<h2>Your recovery code for Password Reset is:</h2><h3>${recoveryCodes}</h3><p>The code will expire in 10 minutes.</p>`,
      };

      return mailTransporter.sendMail(mailDetails);
    })
    .then((result) => {
      if (!result) {
        const error = new Error("An internal occured, please try again!");
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      res.json({ success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.validateCode = (req, res, next) => {
  const email = req.body.emailSaved;
  const code = req.body.code;

  if (!email || !code) {
    const error = new Error(
      "No email address is found in the request object!."
    );
    error.title = "Error Occured!";
    error.statusCode = 422;
    throw error;
  }

  Admin.findOne({ email: email })
    .then((result) => {
      if (!result) {
        const error = new Error(
          "No account is found related to this email address!."
        );
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      admin = result;
      return Token.findOne({ userId: result._id, token: code });
    })
    .then((result) => {
      if (!result) {
        const error = new Error(
          "The recovery code you provided has been expired!."
        );
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      const hash = crypto.randomBytes(64).toString("hex");
      admin.token = hash;
      return admin.save();
    })
    .then((result) => {
      if (!result) {
        const error = new Error("An internal occured, please try again!");
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      res.json({ success: true, token: result.token });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.changePassword = (req, res, next) => {
  const email = req.body.email;
  const token = req.body.token;
  const pass = req.body.pass;

  let admin;

  if (!email || !token) {
    const error = new Error(
      "No email address is found in the request object!."
    );
    error.title = "Error Occured!";
    error.statusCode = 422;
    throw error;
  }

  Admin.findOne({ token: token })
    .then((result) => {
      if (!result) {
        const error = new Error("Your recovery token has expired!");
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      admin = result;

      return bcryptjs.hash(pass, 12);
    })
    .then((hashed) => {
      admin.password = hashed;
      admin.token = "";

      return admin.save();
    })
    .then((result) => {
      if (!result) {
        const error = new Error("An internal server error occured!");
        error.title = "Error Occured!";
        error.statusCode = 422;
        throw error;
      }

      res.json({ success: true });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
