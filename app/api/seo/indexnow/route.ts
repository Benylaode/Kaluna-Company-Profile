import { NextResponse } from "next/server";
import { SITE_URL, submitToIndexNow } from "../../../../lib/seo/indexnow";

const canonicalUrls = [
  `${SITE_URL}/`,
  `${SITE_URL}/services`,
  `${SITE_URL}/works`,
  `${SITE_URL}/who-we-are`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/works/myboss-iot-system`,
  `${SITE_URL}/works/industrial-automation-edge`,
  `${SITE_URL}/works/smart-facility-energy`,
  `${SITE_URL}/works/myboss-logistics-fleet-management`,
  `${SITE_URL}/works/smart-machinery-telemetry`,
  `${SITE_URL}/works/smart-device-ecosystem`,
];

export async function POST(request: Request) {
  let urls = canonicalUrls;

  try {
    const body = await request.json();
    if (Array.isArray(body?.urls) && body.urls.length > 0) {
      urls = body.urls;
    }
  } catch {
    // Empty body intentionally submits the canonical priority set.
  }

  const result = await submitToIndexNow(urls);

  return NextResponse.json(
    { ...result, submittedCount: urls.length },
    { status: result.success ? 200 : result.status }
  );
}

export async function GET() {
  return NextResponse.json({
    status: "IndexNow endpoint ready",
    siteUrl: SITE_URL,
    canonicalCount: canonicalUrls.length,
  });
}
