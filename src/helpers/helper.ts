import nodemailer from 'nodemailer';

export const sendEmail = async (
    email: string,
    subject: string,
    text: string,
    html: string,
    attachments?: Array<{ filename: string; content: any; contentType: string }>,
) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_USER,
            pass: process.env.GOOGLE_PASS,
        },
    })

    const mailOptions = {
        from: process.env.GOOGLE_USER,
        to: email,
        subject,
        html,
        attachments,
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        // logger.log('Email sent: %s', info.messageId) // For logging purposes
        return info
    } catch (error) {
        console.error('Error sending email: ', error)
        throw error
    }
}