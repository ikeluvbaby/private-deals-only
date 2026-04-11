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
    const contentType =
      event.headers["content-type"] || event.headers["Content-Type"] || "";

    let body = {};
    let isTwilioInbound = false;

    if (contentType.includes("application/json")) {
      body = event.body ? JSON.parse(event.body) : {};
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const params = new URLSearchParams(event.body || "");
      body = Object.fromEntries(params.entries());

      if (body.From || body.Body || body.MessageSid) {
        isTwilioInbound = true;
      }
    } else {
      try {
        body = event.body ? JSON.parse(event.body) : {};
      } catch (err) {
        const params = new URLSearchParams(event.body || "");
        body = Object.fromEntries(params.entries());

        if (body.From || body.Body || body.MessageSid) {
          isTwilioInbound = true;
        }
      }
    }

    let payload;

    if (isTwilioInbound) {
      payload = {
        name: "",
        phone: String(body.From || "").trim(),
        email: "",
        type: "sms_inbound",
        deal_type: "sms_inbound",
        location: "",
        budget: "",
        message: String(body.Body || "").trim(),
        source: "TWILIO_INBOUND",
        twilio_message_sid: String(body.MessageSid || "").trim(),
        twilio_to: String(body.To || "").trim(),
      };
    } else {
      payload = {
        name: String(body.name || "").trim(),
        phone: String(body.phone || "").trim(),
        email: String(body.email || "").trim(),
        type: String(body.type || body.deal_type || "").trim(),
        deal_type: String(body.deal_type || body.type || "").trim(),
        location: String(body.location || "").trim(),
        budget: String(body.budget || "").trim(),
        message: String(body.message || "").trim(),
        source: String(body.source || "PRIVATE_DEALS_ONLY").trim(),
      };
    }

    if (!payload.phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Phone is required",
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

    if (isTwilioInbound) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/xml",
        },
        body: `<?xml version="1.0" encoding="UTF-8"?><Response></Response>`,
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        forwarded: true,
        twilioInbound: isTwilioInbound,
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
