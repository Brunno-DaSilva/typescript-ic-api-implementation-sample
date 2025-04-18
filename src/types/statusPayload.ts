export interface StatusPayload {
  public_data: {
    capture_language?: string;
  };
  private_data: {
    transaction_id: string;
  };
}
