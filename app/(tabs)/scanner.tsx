import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { CameraView, BarcodeScanningResult, useCameraPermissions } from "expo-camera";
import { ScannerOverlay } from "@/components/scanner/scanner-overlay";
import { ScannerVerificationPill } from "@/components/scanner/scanner-verification-pill";
import { ScannerManualVerificationPill } from "@/components/scanner/scanner-manual-verfication-pill";

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [torch, setTorch] = useState(false);
  const [scannedRecords, setScannedRecords] = useState<Set<string>>(new Set(["John Doe"]));
  const [currentScan, setCurrentScan] = useState<{ name: string; isDuplicate: boolean }>({
    name: "John Doe",
    isDuplicate: false,
  });
  const [lastScannedCode, setLastScannedCode] = useState<string | null>(null);

  if (!permission) {
    return <View className="flex-1 bg-black" />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-950 px-6">
        <Text className="text-white text-base font-medium mb-4">Camera permission is required</Text>
        <Button title="Allow Camera" onPress={requestPermission} />
      </View>
    );
  }

  const handleBarcodeScanned = (result: BarcodeScanningResult) => {
    const code = result.data || "Unknown Attendee";

    // Avoid triggering multiple scans of the same physical QR code in the same instant
    if (code === lastScannedCode) return;
    setLastScannedCode(code);

    if (scannedRecords.has(code)) {
      // Duplicate detected!
      setCurrentScan({ name: code, isDuplicate: true });
    } else {
      // New unique record!
      setScannedRecords((prev) => new Set(prev).add(code));
      setCurrentScan({ name: code, isDuplicate: false });
    }

    // Reset lastScannedCode after 1.5 seconds to allow re-scanning later if needed
    setTimeout(() => {
      setLastScannedCode(null);
    }, 1500);
  };

  return (
    <View style={{ flex: 1 }} className="bg-black relative">
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        enableTorch={torch}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={handleBarcodeScanned}
      />

      {/* Centered Camera Viewfinder Overlay & Torch Button */}
      <ScannerOverlay
        torch={torch}
        onToggleTorch={() => setTorch((prev) => !prev)}
      />

      {/* White Theme Verification Pill */}
      <ScannerVerificationPill
        name={currentScan.name}
        isDuplicate={currentScan.isDuplicate}
      />

      {/* White Theme Manual Entry Pill */}
      <ScannerManualVerificationPill
        onPress={() => {
          alert("Manual Entry Pressed");
        }}
      />
    </View>
  );
}