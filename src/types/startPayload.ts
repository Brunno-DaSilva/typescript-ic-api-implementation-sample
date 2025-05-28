type SendLinkMessageType = "sms" | "email";
interface SendLink {
  type?: SendLinkMessageType;
  body?: string;
  to?: string;
}

interface PrivateData {
  document_type?: string;
  location?: string;
  purpose?: string;
  return_images?: boolean;
  send_link?: SendLink;
  signals?: string[];
  ttl?: number; // between 10–30
  user_defined?: Record<string, unknown>;
  return_capture_url?: boolean;
}

interface PublicData {
  qr_breakpoint_px?: number;
  redirect_url?: string;
  error_redirect_url?: string;
  results_url?: string;
  status_url?: string;
  capture_language?: string;
}

export interface StartPayload {
  public_data: PublicData;
  private_data: PrivateData;
}
