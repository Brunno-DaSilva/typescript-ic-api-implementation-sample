import axios, { AxiosResponse } from "axios";
import crypto from "crypto";
import { saveResponseToFile } from "./utils/saveResponseToFile";
import { StartPayload } from "./types/startPayload";
import {
  ENV,
  SIGNALS,
  EN_US,
  FR_CA,
  ES_MX,
  DOCUMENT_TYPE,
} from "./utils/constants";

async function getStart(): Promise<void> {
  try {
    const { CUSTOMER_ID, API_KEY, BASE_URL, END_POINT_START, MY_PHONE } = ENV;
    const { NA_DL } = DOCUMENT_TYPE;

    if (
      !CUSTOMER_ID ||
      !API_KEY ||
      !BASE_URL ||
      !END_POINT_START ||
      !MY_PHONE
    ) {
      console.error("Log Error: ❌ Missing environment variables.");
      process.exit(1);
    }

    const payload: StartPayload = {
      public_data: {
        capture_language: EN_US,
      },
      private_data: {
        ttl: 10,
        document_type: NA_DL,
        signals: SIGNALS,
        return_capture_url: true,
        send_link: {
          type: "sms",
          to: MY_PHONE,
          body: "Your Custom message here",
        },

        user_defined: {
          my_session_key: "3E3E3E-E3E3E-CUSTOM_KEY",
        },
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
      BASE_URL + END_POINT_START,
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

    await saveResponseToFile(responseBody, "START");
  } catch (error: any) {
    console.error("Log Error: ❌", error.message);
  }
}

getStart();
