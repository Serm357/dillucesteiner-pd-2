"use client";
import { sendMail } from "@/app/actions/resend";
import React from "react";

const SendMailButton = () => {
  return <button onClick={sendMail}>send Mail</button>;
};

export default SendMailButton;
