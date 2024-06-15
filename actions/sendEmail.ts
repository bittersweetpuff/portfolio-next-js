"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email"
const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) =>{
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
    
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    };

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    };

    
    console.log("Sending email")
    let data;
    //Tries to send email using RESEND
    try {
        await resend.emails.send({
            from: 'Portfolio contact form <onboarding@resend.dev>',
            to: '',
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        });
    } catch (error) {
        
        return {
            error: getErrorMessage(error)
        };
    }
    return {
        data,
    };
};