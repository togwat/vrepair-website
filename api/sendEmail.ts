import nodemailer from 'nodemailer'
import 'dotenv/config'
import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'

const app = express();
app.use(express.json());

// allow react vite server
app.use(
    cors({
        origin: [
			process.env.CORS_ORIGIN_DEV,
			process.env.CORS_ORIGIN_PROD
		],
    })
);

const transporter = nodemailer.createTransport({
	service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
})

// api endpoint
app.post("/api/send-email", async (req: Request, res: Response) => {
	try {
		const subject = req.body?.subject;
		const text = req.body?.text;

		// verifies SMTP config is reachable
		await transporter.verify();

		const info = await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			subject,
			text,
		});

		return res.json({ 
			ok: true, 
			messageId: info.messageId,
		});
	} catch (err: any) {
		console.error("Send failed:", err?.response || err);
		return res.status(500).json({
			ok: false,
			error: err?.response || err?.message,
		})
	}
});

app.listen(process.env.PORT, () => {
	console.log(`Email API listening on port ${process.env.PORT}`);
});