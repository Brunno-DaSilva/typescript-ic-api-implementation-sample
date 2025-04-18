type SendLinkMessageType = "sms" | "email";
interface SendLink {
  type?: SendLinkMessageType;
  body?: string;
  to?: string;
}

type DocumentType = "na_dl" | "passport" | "other";
interface PrivateData {
  document_type?: DocumentType;
  location?: string;
  purpose?: string;
  return_capture_url?: boolean;
  return_images?: boolean;
  send_link?: SendLink;
  signals?: string[];
  ttl?: number; // between 10–30
  user_defined?: Record<string, unknown>;
}

export interface StartPayload {
  public_data: {
    capture_language?: string;
    redirect_url?: string;
    error_redirect_url?: string;
    results_url?: string;
    status_url?: string;
  };
  private_data: PrivateData;
}
