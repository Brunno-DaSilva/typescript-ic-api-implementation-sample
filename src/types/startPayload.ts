export interface StartPayload {
  public_data: {
    capture_language?: string;
  };
  private_data: {
    ttl?: number;
    document_type: string;
    signals: string[];
    send_link: {
      type: string;
      to: string;
    };
  };
}
