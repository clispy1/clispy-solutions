import { NextResponse } from "next/server";
import { agencyInfo } from "@/data/agency";

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate the data
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email and message are required" },
                { status: 400 }
            );
        }

        // Send email using Email.js service
        const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service_id: "YOUR_EMAILJS_SERVICE_ID", // Replace with your Email.js service ID
                    template_id: "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your Email.js template ID
                    user_id: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your Email.js public key
                    template_params: {
                        from_name: name,
                        from_email: email,
                        phone: phone || "Not provided",
                        message: message,
                        to_email: agencyInfo.email,
                        subject: `New Quote Request from ${name}`,
                    },
                }),
            }
        );

        if (response.status !== 200) {
            throw new Error("Failed to send email");
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
