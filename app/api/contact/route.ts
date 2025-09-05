import { ContactTemplate } from "@/emails/ContactTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  try {
    console.log("Form data:", { name, email, message });
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "istatasila7@gmail.com",
      subject: `New message from ${name}`,
      react: await ContactTemplate({ name, email, message })
    });
    console.log("Resend response:", { data, error });

    if (error) {
      return NextResponse.json({ error });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
