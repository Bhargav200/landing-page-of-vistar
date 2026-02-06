import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    GOOGLE_FORM_ID: process.env.GOOGLE_FORM_ID ? "✓ Loaded" : "✗ Missing",
    GOOGLE_FORM_ENTRY_NAME: process.env.GOOGLE_FORM_ENTRY_NAME ? "✓ Loaded" : "✗ Missing",
    GOOGLE_FORM_ENTRY_EMAIL: process.env.GOOGLE_FORM_ENTRY_EMAIL ? "✓ Loaded" : "✗ Missing",
    GOOGLE_FORM_ENTRY_PROFESSION: process.env.GOOGLE_FORM_ENTRY_PROFESSION ? "✓ Loaded" : "✗ Missing",
    GOOGLE_FORM_ENTRY_COLLEGE: process.env.GOOGLE_FORM_ENTRY_COLLEGE ? "✓ Loaded" : "✗ Missing",
  })
}
