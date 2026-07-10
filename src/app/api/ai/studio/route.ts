import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ success: false, error: "Prompt is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    let responseData;

    if (!apiKey) {
      // Local keyword parsing engine for specific business categories
      const lowerPrompt = prompt.toLowerCase();

      if (lowerPrompt.includes("led") || lowerPrompt.includes("light") || lowerPrompt.includes("lumen")) {
        responseData = {
          companyName: "LumenOS Lighting",
          colorPalette: "Lux Cyan & Cobalt Dark",
          primaryColor: "#06b6d4",
          secondaryColor: "#0f172a",
          logoIdea: "LumenX",
          tagline: "Illuminating the future with smart solid-state automation.",
          features: [
            "Interactive Bulb Brightness Calculator",
            "3D Virtual Fixture Showroom Viewer",
            "B2B Bulk RFQ Quotation Pipeline",
            "Eco-Savings carbon reduction index tracker",
          ],
          timeline: [
            { phase: "Architecture Mockup", duration: "1 Week" },
            { phase: "3D Rendering WebGL setup", duration: "2 Weeks" },
            { phase: "Edge Caching & database dev", duration: "3 Weeks" },
            { phase: "QA Testing & deployment", duration: "1 Week" },
          ],
          costs: [
            { item: "UI/UX & WebGL Mockup design", cost: 1200 },
            { item: "Supabase DB & Edge integration", cost: 2400 },
            { item: "Interactive Brightness Calculator", cost: 900 },
            { item: "SLA Deploy & Vercel hosting", cost: 300 },
          ],
        };
      } else if (lowerPrompt.includes("hospital") || lowerPrompt.includes("medical") || lowerPrompt.includes("health")) {
        responseData = {
          companyName: "CareSync Digital",
          colorPalette: "Emerald Mint & Slate Clinical",
          primaryColor: "#10b981",
          secondaryColor: "#0f172a",
          logoIdea: "CareX",
          tagline: "Unifying clinical operations with latency-free record channels.",
          features: [
            "Doctor Slot Scheduling Dashboard",
            "Real-time Pharmacy Inventory hooks",
            "HIPAA compliant telemedicine room",
            "Edge patient records sync",
          ],
          timeline: [
            { phase: "System Blueprint", duration: "2 Weeks" },
            { phase: "Database RLS security audit", duration: "3 Weeks" },
            { phase: "Module dev & Google Meet hooks", duration: "4 Weeks" },
            { phase: "QA compliance certification", duration: "2 Weeks" },
          ],
          costs: [
            { item: "DB Blueprint & RLS encryption", cost: 2200 },
            { item: "Doctor & Pharmacy Portal Modules", cost: 4500 },
            { item: "Telemedicine Video sync setup", cost: 1800 },
            { item: "SLA Deploy & Vercel hosting", cost: 500 },
          ],
        };
      } else if (lowerPrompt.includes("restaurant") || lowerPrompt.includes("food") || lowerPrompt.includes("cafe")) {
        responseData = {
          companyName: "BiteGrid Dining",
          colorPalette: "Amber Gold & Charcoal Deep",
          primaryColor: "#f59e0b",
          secondaryColor: "#18181b",
          logoIdea: "BiteOS",
          tagline: "Headless QR Menu ordering and Kitchen monitor automation.",
          features: [
            "Interactive QR Digital Menu compiler",
            "Real-time kitchen POS monitor stream",
            "Razorpay billing integration checkout",
            "SMS reservation alert dispatcher",
          ],
          timeline: [
            { phase: "UX Wireframe layout", duration: "1 Week" },
            { phase: "Menu Hook & Stripe/Razorpay dev", duration: "2 Weeks" },
            { phase: "Kitchen monitor channel setup", duration: "2 Weeks" },
            { phase: "Live staging testing & rollout", duration: "1 Week" },
          ],
          costs: [
            { item: "QR Menu UX UI layout", cost: 800 },
            { item: "Razorpay & Invoicing database integration", cost: 1500 },
            { item: "Kitchen POS Channel setup", cost: 1200 },
            { item: "SMS Alert integration hooks", cost: 400 },
          ],
        };
      } else {
        // Fallback default response
        responseData = {
          companyName: "NovaDigital Innovations",
          colorPalette: "Indigo Purple & Zinc Cyber",
          primaryColor: "#a855f7",
          secondaryColor: "#09090b",
          logoIdea: "NovaOS",
          tagline: "Accelerating digital operations with premium AI systems.",
          features: [
            "Next.js 15 layout structure",
            "ThinkX OS client billing portal integration",
            "AI Chatbot customer guide",
            "Contact scheduling & analytics panel",
          ],
          timeline: [
            { phase: "Product Wireframes", duration: "1 Week" },
            { phase: "Component coding & databases", duration: "3 Weeks" },
            { phase: "Testing & Deploy setup", duration: "1 Week" },
          ],
          costs: [
            { item: "Digital UI layout design", cost: 1000 },
            { item: "Database & Client OS hooks", cost: 2000 },
            { item: "AI Chatbot & analytics", cost: 800 },
            { item: "Vercel serverless staging deploy", cost: 200 },
          ],
        };
      }
    } else {
      // Connect to Gemini API to parse the user prompt dynamically
      const systemInstruction = "Generate a JSON response for a business website quotation. Keys: companyName (string), colorPalette (string), primaryColor (hex string), secondaryColor (hex string), logoIdea (string), tagline (string), features (array of strings), timeline (array of objects with keys phase and duration), costs (array of objects with keys item and cost). Output ONLY valid raw JSON.";

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              { role: "user", parts: [{ text: `${systemInstruction}\nUser prompt: ${prompt}` }] },
            ],
            generationConfig: {
              responseMimeType: "application/json",
            },
          }),
        }
      );

      const data = await response.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      responseData = JSON.parse(rawText);
    }

    return NextResponse.json({ success: true, ...responseData });
  } catch (error: any) {
    console.error("Studio API error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
