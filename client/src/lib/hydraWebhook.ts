export const HYDRA_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwyepybBUx39smY9wICC5i2vhl501fzGDlotGcHDek7Rd0lzUIHIq8bpW8tpM-5PGMZgQ/exec";

export type HydraLeadPayload = {
  name: string;
  email: string;
  phone: string;
  deal_type: string;
  location: string;
  budget: string;
  message: string;
  source: string;
};

export type HydraWebhookResponse = {
  success?: boolean;
  error?: string;
  row?: number;
  lead_id?: string;
  duplicate?: boolean;
  merged?: boolean;
  priority?: string;
  assigned?: boolean;
  tech_name?: string;
  owner_sms_sent?: boolean;
};

export async function submitHydraLead(
  payload: HydraLeadPayload,
): Promise<HydraWebhookResponse> {
  if (!HYDRA_WEBHOOK_URL || !HYDRA_WEBHOOK_URL.startsWith("https://script.google.com/macros/s/")) {
    throw new Error("Hydra webhook URL is not valid in client/src/lib/hydraWebhook.ts");
  }

  const response = await fetch(HYDRA_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "create_lead",
      data: payload,
    }),
  });

  let data: HydraWebhookResponse | null = null;
  try {
    data = (await response.json()) as HydraWebhookResponse;
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.error || `Webhook request failed with status ${response.status}`);
  }

  if (!data?.success) {
    throw new Error(data?.error || "Webhook returned an unsuccessful response.");
  }

  return data;
}
