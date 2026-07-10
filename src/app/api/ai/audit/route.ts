import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 });
    }

    // Clean domain
    const cleanUrl = url.replace(/^(https?:\/\/)?(www\.)?/, "");

    // Generate pseudo-random metrics based on URL length/chars to keep it consistent
    const seed = cleanUrl.charCodeAt(0) || 10;
    const speed = Math.min(100, 75 + (seed % 21));
    const seo = Math.min(100, 80 + (seed % 19));
    const ui = Math.min(100, 78 + (seed % 17));
    const mobile = Math.min(100, 82 + (seed % 15));
    const performance = Math.min(100, Math.floor((speed + seo + ui + mobile) / 4));

    // Recommendations lists
    const recommendations = [
      { area: "Speed", issue: "Large hero image assets blocking main thread", fix: "Convert landing images to WebP/AVIF format with layout resizing" },
      { area: "SEO", issue: "Missing JSON-LD structured data and schema tags", fix: "Add structured ProfessionalService / Organization schema scripts" },
      { area: "UI", issue: "Subtle contrast ratios failing WCAG guidelines on buttons", fix: "Adjust text-to-background styling classes for accessibility" },
      { area: "Mobile", issue: "Content overflow horizontal scrolling on smaller viewports", fix: "Configure overflow-x-hidden on root wrapper containers" },
    ];

    // Wait 2 seconds to simulate loading
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
      success: true,
      url: cleanUrl,
      metrics: { speed, seo, ui, mobile, performance },
      recommendations,
      timestamp: new Date().toLocaleDateString(),
    });
  } catch (err: any) {
    console.error("Audit API error:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
