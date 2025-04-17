import fs from "fs";
import path from "path";

export async function saveResponseToFile(
  data: string,
  folderName: string
): Promise<void> {
  try {
    const now: Date = new Date();
    const date: string = now.toISOString().split("T")[0];
    const time: string = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
    const fileName: string = `${folderName.toUpperCase()}-${date}_${time}.json`;

    const directoryPath: string = path.join(
      process.cwd(),
      "payload_results",
      folderName
    );

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    const filePath: string = path.join(directoryPath, fileName);

    fs.writeFileSync(
      filePath,
      JSON.stringify(JSON.parse(data), null, 2),
      "utf8"
    );

    console.log(`Log Info: ✅ Response saved to ${filePath}`);
  } catch (error: any) {
    console.error("Log Error:❌ Error writing to file:", error.message);
  }
}
