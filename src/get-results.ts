import axios, { AxiosResponse } from "axios";
import crypto from "crypto";
import { saveResponseToFile } from "./utils/saveResponseToFile";
import { ENV, CAPTURE_LANGUAGE } from "./utils/constants";
import { ResultsPayload } from "./types/resultsPayload";

async function getResults(): Promise<void> {
  try {
    const {
      CUSTOMER_ID,
      API_KEY,
      BASE_URL,
      END_POINT_GET_RESULTS,
      TRANSACTION_ID_ONE,
    } = ENV;
    const { EN_US } = CAPTURE_LANGUAGE;

    if (
      !CUSTOMER_ID ||
      !API_KEY ||
      !BASE_URL ||
      !END_POINT_GET_RESULTS ||
      !TRANSACTION_ID_ONE
    ) {
      console.error("Log Error: ❌ Missing environment variables.");
      process.exit(1);
    }

    const YOUR_TRANSACTION_ID = TRANSACTION_ID_ONE || "YOUR_TRANSACTION_ID";

    const payload: ResultsPayload = {
      public_data: {
        capture_language: EN_US,
      },
      private_data: {
        transaction_id: YOUR_TRANSACTION_ID,
      },
    };

    const payloadString: string = JSON.stringify(payload);
    const base64EncodedPayload: string =
      Buffer.from(payloadString).toString("base64");

    const hmac = crypto.createHmac("sha256", API_KEY);
    hmac.update(base64EncodedPayload);

    const signature: string = "sha256=" + hmac.digest("hex");

    const headers: Record<string, string> = {
      "customer-id": CUSTOMER_ID,
      signature: signature,
      Accept: "application/json",
    };

    const response: AxiosResponse<string> = await axios.post(
      BASE_URL + END_POINT_GET_RESULTS,
      base64EncodedPayload,
      { headers }
    );

    const responseSignatureLog: string | undefined =
      response.headers["signature"];
    console.log("Log Info: ✍️ Response Signature:", responseSignatureLog);

    const responseBody: string = Buffer.from(response.data, "base64").toString(
      "utf8"
    );
    console.log("Log Info: 📄 Response Body:", responseBody);

    console.log(" Log Info: 💾 Save response to file");

    await saveResponseToFile(responseBody, "RESULTS");
  } catch (error: any) {
    console.error("Log Error: ❌", error.message);
  }
}

getResults();
