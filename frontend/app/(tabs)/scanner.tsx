import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { CameraView, BarcodeScanningResult, useCameraPermissions } from "expo-camera";
import { ScannerOverlay } from "@/components/scanner/scanner-overlay";
import { ScannerVerificationPill } from "@/components/scanner/scanner-verification-pill";
import { ScannerManualVerificationButton } from "@/components/scanner/scanner-manual-verfication-button";

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [torch, setTorch] = useState(false);
  const [scannedRecords, setScannedRecords] = useState<Set<string>>(new Set(["John Doe"]));
  const [currentScan, setCurrentScan] = useState<{ name: string; isDuplicate: boolean }>({
    name: "John Doe",
    isDuplicate: false,
  });
  const [lastScannedCode, setLastScannedCode] = useState<string | null>(null);
  const [layout, setLayout] = useState<{ width: number; height: number } | null>(null);

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
    // Restrict scanning to inside the highlighted center viewfinder box (256x256)
    if (layout && layout.width > 0 && layout.height > 0) {
      const boxSize = 256;
      const boxMinX = (layout.width - boxSize) / 2;
      const boxMaxX = (layout.width + boxSize) / 2;
      const boxMinY = (layout.height - boxSize) / 2;
      const boxMaxY = (layout.height + boxSize) / 2;
      const tolerance = 40; // margin allowance around box border

      let qrX: number | null = null;
      let qrY: number | null = null;

      if (result.cornerPoints && result.cornerPoints.length > 0) {
        const sumX = result.cornerPoints.reduce((acc, pt) => acc + pt.x, 0);
        const sumY = result.cornerPoints.reduce((acc, pt) => acc + pt.y, 0);
        qrX = sumX / result.cornerPoints.length;
        qrY = sumY / result.cornerPoints.length;
      } else if (result.bounds) {
        const { origin, size } = result.bounds;
        qrX = origin.x + size.width / 2;
        qrY = origin.y + size.height / 2;
      }

      if (qrX !== null && qrY !== null) {
        // If coordinates are normalized (0..1 range), scale to layout pixels
        if (qrX <= 1 && qrY <= 1) {
          qrX *= layout.width;
          qrY *= layout.height;
        }

        const isInside =
          qrX >= boxMinX - tolerance &&
          qrX <= boxMaxX + tolerance &&
          qrY >= boxMinY - tolerance &&
          qrY <= boxMaxY + tolerance;

        if (!isInside) {
          // Ignore QR codes detected outside the highlighted viewfinder box
          return;
        }
      }
    }

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
    <View
      style={{ flex: 1 }}
      className="bg-black relative"
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setLayout({ width, height });
      }}
    >
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
      <ScannerManualVerificationButton
        onPress={() => {
          alert("Manual Entry Pressed");
        }}
      />
    </View>
  );
}