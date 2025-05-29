// src/config/constants.ts
import dotenv from "dotenv";
dotenv.config();

if (
  !process.env.CUSTOMER_ID ||
  !process.env.API_KEY ||
  !process.env.BASE_URL ||
  !process.env.END_POINT_BARCODE_ONLY ||
  !process.env.BARCODE
) {
  console.error("❌ Missing one or more required environment variables.");
  process.exit(1);
}

export const ENV = {
  CUSTOMER_ID: process.env.CUSTOMER_ID as string,
  API_KEY: process.env.API_KEY as string,
  BASE_URL: process.env.BASE_URL as string,
  END_POINT_BARCODE_ONLY: process.env.END_POINT_BARCODE_ONLY as string,
  BARCODE: process.env.BARCODE as string,
  MY_PHONE: process.env.MY_PHONE as string,
  TRANSACTION_ID_ONE: process.env.TRANSACTION_ID_ONE as string,
  TRANSACTION_ID_TWO: process.env.TRANSACTION_ID_TWO as string,
  END_POINT_SUB_EMAIL: process.env.END_POINT_SUB_EMAIL as string,
  END_POINT_START: process.env.END_POINT_START as string,
  END_POINT_END: process.env.END_POINT_END as string,
  END_POINT_GET_STATUS: process.env.END_POINT_GET_STATUS as string,
  END_POINT_GET_RESULTS: process.env.END_POINT_GET_RESULTS as string,
  END_POINT_GET_TRANS_DATA: process.env.END_POINT_GET_TRANS_DATA as string,
  END_POINT_GET_JOURNEY: process.env.END_POINT_GET_JOURNEY as string,
  END_POINT_START_SELFIE: process.env.END_POINT_START_SELFIE as string,
  END_POINT_END_SELFIE: process.env.END_POINT_END_SELFIE as string,
  END_POINT_SUB_FRONT: process.env.END_POINT_SUB_FRONT as string,
  END_POINT_SUB_BACK: process.env.END_POINT_SUB_BACK as string,
  END_POINT_SUB_BARCODE: process.env.END_POINT_SUB_BARCODE as string,
  END_POINT_SUB_SELFIE: process.env.END_POINT_SUB_SELFIE as string,
};

export const SIGNALS = [
  "idcheck",
  "ocr_match",
  "selfie",
  "document_liveness_idrnd",
  "ocr_scan",
];

export const DOCUMENT_TYPE = {
  NA_DL: "na_dl",
  PASSPORT: "passport",
  Other: "other",
} as const;

export const CAPTURE_LANGUAGE = {
  EN_US: "en-us",
  FR_CA: "fr-ca",
  ES_MX: "es-mx",
} as const;
