interface TransactionLocation {
  lat_lng: [number, number]; // Tuple of [latitude, longitude]
  address: string;
  sub_location: string;
}
interface PrivateData {
  barcode: string;
  device_id?: string;
  device_type?: string;
  jurisdiction?: string;
  location?: string;
  transaction_location?: TransactionLocation;
  purpose?: string;
  user_defined?: Record<string, unknown>;
}

export interface BarcodePayload {
  public_data: {
    capture_language?: string;
  };
  private_data: PrivateData;
}
