import { NextResponse } from "next/server";
import { z } from "zod/v4";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // For now, log the submission. Once Supabase is connected,
    // this will insert into a contact_submissions table.
    // In production, this could also send an email notification.
    const timestamp = new Date().toISOString();
    const submission = { ...data, timestamp };

    // Placeholder: when Supabase is set up, uncomment:
    // const supabase = createClient();
    // await supabase.from('contact_submissions').insert(submission);

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
