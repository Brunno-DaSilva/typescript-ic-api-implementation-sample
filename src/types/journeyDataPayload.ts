export interface JourneyDataPayload {
  public_data: {
    capture_language?: string;
  };
  private_data: {
    transaction_id?: string;
    include_pii?: boolean;
    start_date?: string; //yyyy-mm-dd
    end_date?: string; //yyyy-mm-dd
    result_size?: number; // between 1–10000
    search_after?: number[];
  };
}

/**
 *
 * Alert:  Pass only the search_after value;
 * Alert: no other private_data object properties are necessary.
 * Alert: Do not pass search_after on an initial request.
 * Alert: Doing so will invalidate the request, resulting in
 * Alert: an empty or unexpected response.
 *
 */
