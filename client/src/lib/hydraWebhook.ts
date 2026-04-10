export const HYDRA_WEBHOOK_PROXY_URL = "/.netlify/functions/hydra-submit";

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
  const response = await fetch(HYDRA_WEBHOOK_PROXY_URL, {
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
