import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export interface ScannerManualVerificationPillProps {
    onPress?: () => void;
}

export function ScannerManualVerificationPill({
    onPress,
}: ScannerManualVerificationPillProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={{ position: "absolute", bottom: 115, alignSelf: "center", zIndex: 10 }}
            className="bg-white px-4 py-2.5 rounded-full border border-gray-100 flex-row items-center gap-2 shadow-md"
        >
            <Ionicons name="keypad" size={16} color="#1f2937" />
            <Text className="text-gray-800 text-xs font-semibold">
                Manual Entry
            </Text>
        </TouchableOpacity>
    );
}