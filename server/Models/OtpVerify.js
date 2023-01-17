import express from "express";
import bcrypt from "bcryptjs";
import UserOTPVerification from "./UserOTPVerification.js";
import nodemailer from "nodemailer";

// Email Sender

let testAccount = await nodemailer.createTestAccount();
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shoppyotpverify@gmail.com",
    pass: "ezqxdxldmsfznthk",
  },
});

// Email Otp Verification

const sendOtpVerification = async (_id, name, email, password, res) => {
  // console.log(email);
  try {
    var otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    let info = await transporter.sendMail({
      from: "shoppyotpverify@gmail.com",
      to: email,
      subject: "Verify Your Account",
      text: `Your Otp is : ${otp}, do not share otp.`,
    });

    // console.log("Message sent: %s", info.messageId);
    // console.log(info);

    const saltRounds = 10;
    const hashedOTP = await bcrypt.hash(otp, saltRounds);
    const newOtpVerification = await new UserOTPVerification({
      userId: _id,
      otp: otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    await newOtpVerification.save();
  } catch (error) {
    // console.log(error);
    res.json({
      status: "FAILED",
      message: error,
    });
  }
};

export default sendOtpVerification;
