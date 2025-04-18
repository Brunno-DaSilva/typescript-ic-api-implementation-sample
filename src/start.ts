import axios, { AxiosResponse } from "axios";
import crypto from "crypto";
import { saveResponseToFile } from "./utils/saveResponseToFile";
import { StartPayload } from "./types/startPayload";
import dotenv from "dotenv";
dotenv.config();

async function main(): Promise<void> {
  try {
    const { CUSTOMER_ID, API_KEY, BASE_URL, END_POINT_START, MY_PHONE } =
      process.env;

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

    const SIGNALS: string[] = [
      "idcheck",
      "ocr_match",
      "selfie",
      "document_liveness_idrnd",
      "ocr_scan",
    ];

    const payload: StartPayload = {
      public_data: {
        capture_language: "en-us",
      },
      private_data: {
        ttl: 10,
        document_type: "na_dl",
        signals: SIGNALS,
        send_link: {
          type: "sms",
          to: MY_PHONE,
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
    console.log("Log Info: Response Signature:", responseSignatureLog);

    const responseBody: string = Buffer.from(response.data, "base64").toString(
      "utf8"
    );
    console.log("Log Info: Response Body:", responseBody);

    console.log(" Log Info: 💾 Save response to file");

    await saveResponseToFile(responseBody, "START");
  } catch (error: any) {
    console.error("Log Error: ❌", error.message);
  }
}

main();
