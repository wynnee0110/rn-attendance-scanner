import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm font-medium text-gray-500">
                Good afternoon,
              </Text>

              <Text className="mt-1 text-3xl font-bold text-gray-900">
                Wayne 👋
              </Text>
            </View>

            <View className="h-11 w-11 items-center justify-center rounded-full bg-gray-900">
              <Text className="font-bold text-white">WO</Text>
            </View>
          </View>
        </View>

        {/* Scanner Status */}
        <View className="mx-6 rounded-3xl bg-gray-900 p-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="h-3 w-3 rounded-full bg-emerald-400" />

              <Text className="ml-2 text-sm font-semibold text-white">
                Scanner Online
              </Text>
            </View>

            <Text className="text-xs text-gray-400">
              SCANNER-001
            </Text>
          </View>

          <Text className="mt-6 text-sm text-gray-400">
            Today's attendance
          </Text>

          <View className="mt-1 flex-row items-end">
            <Text className="text-4xl font-bold text-white">
              186
            </Text>

            <Text className="mb-1 ml-2 text-sm text-gray-400">
              / 200 attendees
            </Text>
          </View>

          {/* Progress */}
          <View className="mt-5 h-2 overflow-hidden rounded-full bg-gray-700">
            <View
              className="h-full rounded-full bg-emerald-400"
              style={{ width: "93%" }}
            />
          </View>

          <View className="mt-3 flex-row justify-between">
            <Text className="text-xs text-gray-400">
              93% attendance
            </Text>

            <Text className="text-xs text-gray-400">
              14 remaining
            </Text>
          </View>
        </View>

        {/* Statistics */}
        <View className="mx-6 mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            Today's Stats
          </Text>

          <View className="flex-row gap-3">
            {/* Scans */}
            <View className="flex-1 rounded-3xl bg-white p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <Ionicons
                  name="scan-outline"
                  size={20}
                  color="#2563EB"
                />
              </View>

              <Text className="mt-4 text-2xl font-bold text-gray-900">
                186
              </Text>

              <Text className="mt-1 text-xs text-gray-500">
                Total Scans
              </Text>
            </View>

            {/* Successful */}
            <View className="flex-1 rounded-3xl bg-white p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#10B981"
                />
              </View>

              <Text className="mt-4 text-2xl font-bold text-gray-900">
                163
              </Text>

              <Text className="mt-1 text-xs text-gray-500">
                Successful
              </Text>
            </View>
          </View>

          <View className="mt-3 flex-row gap-3">
            {/* Duplicates */}
            <View className="flex-1 rounded-3xl bg-white p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-rose-50">
                <Ionicons
                  name="repeat-outline"
                  size={20}
                  color="#EF4444"
                />
              </View>

              <Text className="mt-4 text-2xl font-bold text-gray-900">
                23
              </Text>

              <Text className="mt-1 text-xs text-gray-500">
                Duplicates
              </Text>
            </View>

            {/* Rate */}
            <View className="flex-1 rounded-3xl bg-white p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                <Ionicons
                  name="trending-up-outline"
                  size={20}
                  color="#7C3AED"
                />
              </View>

              <Text className="mt-4 text-2xl font-bold text-gray-900">
                98.2%
              </Text>

              <Text className="mt-1 text-xs text-gray-500">
                Success Rate
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Scans */}
        <View className="mx-6 mt-6">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Recent Scans
            </Text>

            <Text className="text-xs font-semibold text-gray-500">
              View All
            </Text>
          </View>

          <View className="overflow-hidden rounded-3xl bg-white">
            {/* John */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                <Ionicons
                  name="checkmark"
                  size={20}
                  color="#10B981"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-semibold text-gray-900">
                  John Doe
                </Text>

                <Text className="mt-1 text-xs text-emerald-600">
                  Attendance recorded
                </Text>
              </View>

              <Text className="text-xs text-gray-400">
                2:41 PM
              </Text>
            </View>

            {/* Maria */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                <Ionicons
                  name="checkmark"
                  size={20}
                  color="#10B981"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-semibold text-gray-900">
                  Maria Santos
                </Text>

                <Text className="mt-1 text-xs text-emerald-600">
                  Attendance recorded
                </Text>
              </View>

              <Text className="text-xs text-gray-400">
                2:39 PM
              </Text>
            </View>

            {/* Alex */}
            <View className="flex-row items-center p-4">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-rose-50">
                <Ionicons
                  name="alert"
                  size={20}
                  color="#EF4444"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-semibold text-gray-900">
                  Alex Cruz
                </Text>

                <Text className="mt-1 text-xs text-rose-500">
                  Already scanned
                </Text>
              </View>

              <Text className="text-xs text-gray-400">
                2:37 PM
              </Text>
            </View>
          </View>
        </View>

        {/* Quick Info */}
        <View className="mx-6 mt-6 rounded-3xl bg-white p-5">
          <View className="flex-row items-center">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
              <Ionicons
                name="location-outline"
                size={20}
                color="#111827"
              />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-xs text-gray-400">
                Current Location
              </Text>

              <Text className="mt-1 font-semibold text-gray-900">
                Main Entrance
              </Text>
            </View>

            <View className="rounded-full bg-emerald-50 px-3 py-1.5">
              <Text className="text-xs font-semibold text-emerald-600">
                Active
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}