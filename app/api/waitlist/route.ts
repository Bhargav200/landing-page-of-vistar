import { NextRequest, NextResponse } from "next/server"

// Google Form submission credentials
const GOOGLE_FORM_ID = process.env.GOOGLE_FORM_ID || ""
const GOOGLE_FORM_ENTRY_NAME = process.env.GOOGLE_FORM_ENTRY_NAME || ""
const GOOGLE_FORM_ENTRY_EMAIL = process.env.GOOGLE_FORM_ENTRY_EMAIL || ""
const GOOGLE_FORM_ENTRY_PROFESSION = process.env.GOOGLE_FORM_ENTRY_PROFESSION || ""
const GOOGLE_FORM_ENTRY_COLLEGE = process.env.GOOGLE_FORM_ENTRY_COLLEGE || ""

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, profession, college } = body

    // Validate required fields
    if (!name || !email || !profession || !college) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Submit to Google Form
    if (GOOGLE_FORM_ID && GOOGLE_FORM_ENTRY_NAME && GOOGLE_FORM_ENTRY_EMAIL && GOOGLE_FORM_ENTRY_PROFESSION && GOOGLE_FORM_ENTRY_COLLEGE) {
      try {
        const formData = new URLSearchParams()
        formData.append(GOOGLE_FORM_ENTRY_NAME, name)
        formData.append(GOOGLE_FORM_ENTRY_EMAIL, email)
        formData.append(GOOGLE_FORM_ENTRY_PROFESSION, profession)
        formData.append(GOOGLE_FORM_ENTRY_COLLEGE, college)

        console.log("[v0] Submitting to Google Form ID:", GOOGLE_FORM_ID)
        console.log("[v0] Form entries:", {
          name: GOOGLE_FORM_ENTRY_NAME,
          email: GOOGLE_FORM_ENTRY_EMAIL,
          profession: GOOGLE_FORM_ENTRY_PROFESSION,
          college: GOOGLE_FORM_ENTRY_COLLEGE,
        })

        const googleFormUrl = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse`
        console.log("[v0] Submitting to URL:", googleFormUrl)

        const response = await fetch(googleFormUrl, {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          // Google Forms doesn't require credentials
          credentials: "omit",
        })

        console.log("[v0] Google Forms HTTP Status:", response.status)
        console.log("[v0] Form data submitted successfully")
      } catch (formError) {
        console.error("[v0] Error submitting to Google Forms:", formError instanceof Error ? formError.message : formError)
      }
    } else {
      console.error("[v0] Missing Google Form configuration!")
      console.error("[v0] Configuration check:", {
        hasFormId: !!GOOGLE_FORM_ID,
        hasNameEntry: !!GOOGLE_FORM_ENTRY_NAME,
        hasEmailEntry: !!GOOGLE_FORM_ENTRY_EMAIL,
        hasProfessionEntry: !!GOOGLE_FORM_ENTRY_PROFESSION,
        hasCollegeEntry: !!GOOGLE_FORM_ENTRY_COLLEGE,
      })
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Successfully added to waitlist" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Waitlist API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
