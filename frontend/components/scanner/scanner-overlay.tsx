import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface ScannerOverlayProps {
  torch?: boolean;
  onToggleTorch?: () => void;
}

export function ScannerOverlay({ torch = false, onToggleTorch }: ScannerOverlayProps) {
  const insets = useSafeAreaInsets();
  const scanAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 2200,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 2200,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    return () => animation.stop();
  }, [scanAnim]);

  const translateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 230],
  });

  return (
    <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }} pointerEvents="box-none">
      {/* Dark Backdrop Layout Mask around the Box */}
      <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }} pointerEvents="none">
        <View className="flex-1 bg-black/50" />
        <View className="flex-row h-64">
          <View className="flex-1 bg-black/50" />
          <View className="w-64 h-64" />
          <View className="flex-1 bg-black/50" />
        </View>
        <View className="flex-1 bg-black/50" />
      </View>

      {/* Absolutely Centered Viewfinder Box */}
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
        pointerEvents="none"
      >
        <View className="w-64 h-64 relative items-center justify-center">
          {/* 4 Corner Reticles */}
          <View className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-emerald-400 rounded-tl-xl" />
          <View className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-emerald-400 rounded-tr-xl" />
          <View className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-emerald-400 rounded-bl-xl" />
          <View className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-400 rounded-br-xl" />

          {/* Animated Scanning Laser Line */}
          <View className="w-full h-full overflow-hidden p-2">
            <Animated.View
              style={{ transform: [{ translateY }] }}
              className="w-full h-0.5 bg-emerald-400 shadow-md shadow-emerald-400"
            />
          </View>
        </View>
      </View>

      {/* Top Controls Bar */}
      <View
        style={{
          paddingTop: Math.max(insets.top, 16) + 8,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
        }}
        className="px-6 flex-row justify-end"
      >
        <TouchableOpacity
          onPress={onToggleTorch}
          activeOpacity={0.7}
          className={`w-11 h-11 rounded-full items-center justify-center border shadow-md ${
            torch ? "bg-amber-400 border-amber-400" : "bg-black/60 border-white/20"
          }`}
        >
          <Ionicons
            name={torch ? "flash" : "flash-off"}
            size={20}
            color={torch ? "#000000" : "#ffffff"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
