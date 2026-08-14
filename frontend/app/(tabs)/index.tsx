import ScannerHeaderPill from "@/components/home/scanner-header-pill";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="px-6 pt-16 pb-6 flex-row items-center justify-between">
          <View>
            <Text className="text-sm text-gray-500">Welcome back</Text>
            <Text className="text-2xl font-bold text-gray-900">
              Volunteer
            </Text>
          </View>

          <View className="h-10 w-10 items-center justify-center rounded-full bg-gray-900">
            <Text className="font-bold text-white">WO</Text>
          </View>
        </View>

        {/* Scanner */}
        <ScannerHeaderPill />

        {/* Scan Button */}
        <View className="mx-6 mt-5">
          <Pressable className="h-16 flex-row items-center justify-center rounded-2xl bg-emerald-500 active:opacity-80">
            <Ionicons name="scan-outline" size={24} color="white" />
            <Text className="ml-2 text-base font-bold text-white">
              Scan QR Code
            </Text>
          </Pressable>
        </View>

        {/* Stats */}
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

        {/* Recent Scans */}
        <View className="mx-6 mt-6">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">
              Recent Scans
            </Text>

            <Text className="text-xs font-semibold text-gray-500">
              View all
            </Text>
          </View>

          <View className="overflow-hidden rounded-2xl bg-white">
            {[
              ["John Doe", "2:41 PM", true],
              ["Maria Santos", "2:39 PM", true],
              ["Alex Cruz", "2:37 PM", false],
            ].map(([name, time, success], index) => (
              <View
                key={index}
                className={`flex-row items-center p-4 ${index !== 2 ? "border-b border-gray-100" : ""
                  }`}
              >
                <View
                  className={`h-9 w-9 items-center justify-center rounded-full ${success ? "bg-emerald-50" : "bg-rose-50"
                    }`}
                >
                  <Ionicons
                    name={success ? "checkmark" : "alert"}
                    size={18}
                    color={success ? "#10B981" : "#EF4444"}
                  />
                </View>

                <View className="ml-3 flex-1">
                  <Text className="font-semibold text-gray-900">
                    {name}
                  </Text>

                  <Text
                    className={`text-xs ${success ? "text-emerald-600" : "text-rose-500"
                      }`}
                  >
                    {success
                      ? "Attendance recorded"
                      : "Already scanned"}
                  </Text>
                </View>

                <Text className="text-xs text-gray-400">
                  {time}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}