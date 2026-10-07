export const SITE_URL = "https://www.kalunatechnology.com";

export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "71f6c2e4a9b84d73a1c9f2056e0bd41a";

export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/indexnow-key.txt`;

export interface IndexNowResponse {
  success: boolean;
  status: number;
  message: string;
}

export async function submitToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  if (!urls.length) {
    return { success: false, status: 400, message: "No URLs provided." };
  }

  const canonicalHost = new URL(SITE_URL).host;
  const normalizedUrls = Array.from(
    new Set(
      urls
        .map((value) => {
          try {
            return new URL(value, SITE_URL);
          } catch {
            return null;
          }
        })
        .filter((url): url is URL => Boolean(url) && url.host === canonicalHost)
        .map((url) => url.toString())
    )
  );

  if (!normalizedUrls.length) {
    return {
      success: false,
      status: 400,
      message: "No canonical Kaluna Technology URLs were provided.",
    };
  }

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: canonicalHost,
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: normalizedUrls,
      }),
    });

    if (response.ok || response.status === 202) {
      return {
        success: true,
        status: response.status,
        message: `Submitted ${normalizedUrls.length} URL(s) to IndexNow.`,
      };
    }

    return {
      success: false,
      status: response.status,
      message: `IndexNow returned HTTP ${response.status}.`,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error instanceof Error ? error.message : "Unknown IndexNow error",
    };
  }
}
