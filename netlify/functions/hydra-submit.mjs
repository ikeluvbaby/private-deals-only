const HYDRA_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwyepybBUx39smY9wICC5i2vhl501fzGDlotGcHDek7Rd0lzUIHIq8bpW8tpM-5PGMZgQ/exec";

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  },
  body: JSON.stringify(body),
});

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return json(405, { success: false, error: "Method not allowed" });
  }

  try {
    const parsed = event.body ? JSON.parse(event.body) : {};

    const upstream = await fetch(HYDRA_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed),
      redirect: "follow",
    });

    const text = await upstream.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = {
        success: upstream.ok,
        raw: text,
      };
    }

    if (!upstream.ok) {
      return json(upstream.status, {
        success: false,
        error: data?.error || `Hydra webhook request failed with status ${upstream.status}`,
        details: data,
      });
    }

    return json(200, data);
  } catch (error) {
    return json(500, {
      success: false,
      error: error instanceof Error ? error.message : "Unknown server error",
    });
  }
}
