export interface TransactionDataPayload {
  public_data: {
    capture_language?: string;
  };
  private_data: {
    transaction_id: string;
  };
}
