import { Text, View } from "react-native";

export default function HomeHeaderPill() {

    return (
        <>
            {/* Scanner */}
            <View className="mx-6 rounded-3xl bg-gray-900 p-5">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <View className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        <Text className="ml-2 text-sm font-medium text-white">
                            Scanner Online
                        </Text>
                    </View>

                    <Text className="text-xs text-gray-500">
                        SCANNER-001
                    </Text>
                </View>

                <Text className="mt-6 text-sm text-gray-400">
                    Attendance
                </Text>

                <View className="flex-row items-end">
                    <Text className="text-4xl font-bold text-white">
                        67
                    </Text>
                </View>

                <View className="mt-4 h-1.5 rounded-full bg-gray-700">
                    <View
                        className="h-full rounded-full bg-emerald-400"
                        style={{ width: "93%" }}
                    />
                </View>
            </View>
        </>
    )
}