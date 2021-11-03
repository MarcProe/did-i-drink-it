import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

export function handleBarcode() {
  const scan = async () => {
    BarcodeScanner.hideBackground(); // make background of WebView transparent

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
  };

  return {
    scan,
  };
}
