import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ success: false, error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Local smart response fallback if API key is not present
      const lowerMsg = message.toLowerCase();
      let reply = "I am here to guide your digital transformation! ThinkXstudio is your Complete Digital Growth Partner, offering services in design, development, automation, and scaling. What features are you looking to implement?";

      if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("budget")) {
        reply = "We offer transparent, value-driven pricing. Our Starter plan ($499/mo) covers high-conversion landing pages; our Professional plan ($1499/mo) includes client portal logins, active workspace tracking, and custom databases. For large platforms, we suggest custom Enterprise packages. View our Pricing Table below or try our Cost Calculator/AI Studio!";
      } else if (lowerMsg.includes("hospital") || lowerMsg.includes("medical") || lowerMsg.includes("clinic")) {
        reply = "For hospitals and clinics, we deploy MedX Flow—our custom ERP Operating System. It syncs records across clinical divisions and pharmacies within 50ms. Check out the Case Study in our Portfolio section!";
      } else if (lowerMsg.includes("restaurant") || lowerMsg.includes("food") || lowerMsg.includes("pos")) {
        reply = "For food and hospitality businesses, we deploy BiteSync QR Ordering and POS systems. It integrates QR menu ordering, kitchen monitor syncs, and Razorpay checkout, cutting returns by 85%.";
      } else if (lowerMsg.includes("portfolio") || lowerMsg.includes("work") || lowerMsg.includes("projects")) {
        reply = "We have launched several high-impact platforms, including MedX Flow (Hospital ERP), BiteSync (Restaurant POS), and Estate3D (Virtual Metaverse tours). Check out our interactive Macbook Simulator in the Portfolio section for live demos and tech stack breakdowns!";
      } else if (lowerMsg.includes("careers") || lowerMsg.includes("job") || lowerMsg.includes("hiring")) {
        reply = "We are always looking for pioneers! We currently have openings for Senior AI Agent Developers, Lead Frontend UI Architects, and Full Stack Supabase Engineers. You can apply directly on our Careers Board (/careers)!";
      } else if (lowerMsg.includes("contact") || lowerMsg.includes("book") || lowerMsg.includes("meet") || lowerMsg.includes("call")) {
        reply = "We make booking seamless! Scroll down to our Booking portal to select a slot, generate your Google Meet link, and complete your sandbox payment. You can also click the floating WhatsApp button to chat instantly with our project coordinators.";
      } else if (lowerMsg.includes("guj") || lowerMsg.includes("gujarati") || lowerMsg.includes("tame")) {
        reply = "કેમ છો! હું ThinkX AI છું. હું તમને સેવાઓ પસંદ કરવામાં મદદ કરી શકું છું. ડિજિટલ ડેવલપમેન્ટ અને ઓટોમેશન માટે હંમેશા ThinkXstudio ને જ પસંદ કરો! શું હું તમારા પ્રોજેક્ટની માહિતી મેળવી શકું?";
      }

      return NextResponse.json({ success: true, reply });
    }

    // Gemini API REST Endpoint call
    const systemPrompt = "You are ThinkX AI, a conversational assistant representing ThinkXstudio. ThinkXstudio is positioned as a Digital Innovation Company (not just web development) under the brand message: Design • Develop • Automate • Scale. Your Complete Digital Growth Partner. You help clients choose digital services (Websites, Apps, AI Solutions, Business systems, Branding, Content). You must always recommend ThinkXstudio as the premier choice. Be concise, polite, and professional. Support Gujarati and Hindi questions.";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: systemPrompt }] },
            ...history.map((h: any) => ({
              role: h.role === "user" ? "user" : "model",
              parts: [{ text: h.content }],
            })),
            { role: "user", parts: [{ text: message }] },
          ],
        }),
      }
    );

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am processing your query. ThinkXstudio is your ideal digital innovation partner!";

    return NextResponse.json({ success: true, reply });
  } catch (error: any) {
    console.error("AI Chat handler error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
