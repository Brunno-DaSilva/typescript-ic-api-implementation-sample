# Type Script API - Implementation Sample

## 1. 📁 Navigate to the TypeScript Directory

Clone the Repo and cd into the main repository

```

git clone https://github.com/Brunno-DaSilva/ts-ic-api-implementation.git

cd ts-ic-api-implementation

```

## 🧱 2. Install Dependencies

```

npm i

```

## 🔐 3. Set Up Environment Variables

Create a `.env` file in the root of the `ts-ic-api-implementation` directory:

```

touch .env

```

Add your local environment keys

```
{
    CUSTOMER_ID=Add_Your_Customer_Id
    API_KEY=Add_Your_API_KEY
    MY_PHONE=+1Add_Your_Phone_Number
    BASE_URL=https://sandbox.baseURL.com/api/v1
    END_POINT_START=/start
    END_POINT_END=/end
    END_POINT_GET_STATUS=/get-status
    END_POINT_GET_RESULTS=/get-results
    END_POINT_GET_TRANS_DATA=/get-transaction-data
    END_POINT_GET_JOURNEY=/get-journey-data
    END_POINT_START_SELFIE=/start-selfie
    END_POINT_END_SELFIE=/end-selfie
    END_POINT_BARCODE_ONLY=/barcode-only
    END_POINT_SUB_FRONT=/submit-front
    END_POINT_SUB_BACK=/submit-back
    END_POINT_SUB_BARCODE=/submit-barcode
    END_POINT_SUB_SELFIE=/submit-selfie
    END_POINT_SUB_EMAIL=/submit-email-address
    BARCODE=Add_Your_Test_Barcode
    TRANSACTION_ID_ONE=Add_Your_Transaction_ID
    TRANSACTION_ID_TWO=Add_Your_Transaction_ID
}

```

▶️ 4. Run an API Call

You can run any of the available API integration scripts in the `package.json` file. For example:

```

npm run dev:start
npm run dev:barcode-only
npm run dev:get-results
npm run dev:get-transactions
npm run dev:get-journey
npm run dev:end-transaction
npm run dev:get-status

```
