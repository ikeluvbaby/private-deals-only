exports.handler = async function (event) {
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby5TSLM01kriqY2VCLiP9bg2HRpSGHlPvCo11YcgqbIvruWKKa8hSQh5zqHnvTVDkT4/exec";

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Method not allowed",
      }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};

    const payload = {
      name: String(body.name || "").trim(),
      phone: String(body.phone || "").trim(),
      email: String(body.email || "").trim(),
      type: String(body.type || "").trim(),
      message: String(body.message || "").trim(),
    };

    if (!payload.name || !payload.phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Name and phone are required",
        }),
      };
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      parsed = { raw: text };
    }

    if (!response.ok) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Apps Script request failed",
          details: parsed,
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        forwarded: true,
        appsScript: parsed,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || "Unknown error",
      }),
    };
  }
};
