import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export interface ScannerVerificationPillProps {
    name?: string;
    isDuplicate?: boolean;
    bottom?: number;
}

export function ScannerVerificationPill({
    name = "John Doe",
    isDuplicate = false,
    bottom = 175,
}: ScannerVerificationPillProps) {
    const statusColor = isDuplicate ? "#ef4444" : "#10b981";

    return (
        <View
            style={{
                position: "absolute",
                bottom,
                alignSelf: "center",
                zIndex: 10,
            }}
            className={`flex-row items-center px-4 py-3 rounded-full border shadow-lg ${isDuplicate
                    ? "bg-rose-50 border-rose-200"
                    : "bg-white border-gray-100"
                }`}
        >
            {/* Status Icon */}
            <View
                className={`w-9 h-9 rounded-full items-center justify-center mr-3 ${isDuplicate ? "bg-rose-100" : "bg-emerald-100"
                    }`}
            >
                <Ionicons
                    name={isDuplicate ? "alert-circle" : "checkmark-circle"}
                    size={21}
                    color={statusColor}
                />
            </View>

            {/* Text */}
            <View className="mr-2">
                <Text
                    className={`text-[11px] font-bold uppercase tracking-wider ${isDuplicate ? "text-rose-600" : "text-emerald-600"
                        }`}
                >
                    {isDuplicate ? "Already Scanned" : "Recorded"}
                </Text>

                <Text
                    className="text-gray-900 text-sm font-semibold mt-0.5"
                    numberOfLines={1}
                >
                    {name}
                </Text>
            </View>
        </View>
    );
}