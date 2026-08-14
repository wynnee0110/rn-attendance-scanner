import { Text, View } from "react-native";

export default function HomeStats() {
    return (
        <View className="mx-6 mt-6">
            <View className="flex-row gap-3">
                <View className="flex-1 rounded-2xl bg-white p-4">
                    <Text className="text-2xl font-bold text-gray-900">
                        186
                    </Text>
                    <Text className="mt-1 text-xs text-gray-500">
                        Scans
                    </Text>
                </View>

                <View className="flex-1 rounded-2xl bg-white p-4">
                    <Text className="text-2xl font-bold text-emerald-500">
                        163
                    </Text>
                    <Text className="mt-1 text-xs text-gray-500">
                        Successful
                    </Text>
                </View>

                <View className="flex-1 rounded-2xl bg-white p-4">
                    <Text className="text-2xl font-bold text-rose-500">
                        23
                    </Text>
                    <Text className="mt-1 text-xs text-gray-500">
                        Duplicate
                    </Text>
                </View>
            </View>
        </View>
    );
}
