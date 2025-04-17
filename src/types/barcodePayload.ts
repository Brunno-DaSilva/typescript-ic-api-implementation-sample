export interface BarcodePayload {
  public_data: {
    capture_language?: string;
  };
  private_data: {
    barcode: string;
  };
}
