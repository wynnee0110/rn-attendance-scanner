import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <Text className="text-sm font-medium text-gray-500">
            Account
          </Text>

          <Text className="mt-1 text-3xl font-bold text-gray-900">
            Profile
          </Text>
        </View>

        {/* Profile Card */}
        <View className="mx-6 rounded-3xl bg-white p-5">
          <View className="flex-row items-center">
            {/* Avatar */}
            <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-900">
              <Text className="text-xl font-bold text-white">
                WO
              </Text>
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold text-gray-900">
                Wayne Obial
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                Scanner Operator
              </Text>

              <View className="mt-2 flex-row items-center">
                <View className="h-2 w-2 rounded-full bg-emerald-500" />

                <Text className="ml-2 text-xs font-medium text-emerald-600">
                  Active
                </Text>
              </View>
            </View>

            <Ionicons
              name="create-outline"
              size={21}
              color="#6B7280"
            />
          </View>
        </View>

        {/* Scanner Account */}
        <View className="mx-6 mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            Scanner Account
          </Text>

          <View className="overflow-hidden rounded-3xl bg-white">
            {/* Scanner ID */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Ionicons
                  name="qr-code-outline"
                  size={20}
                  color="#111827"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-xs text-gray-400">
                  Scanner ID
                </Text>

                <Text className="mt-1 font-semibold text-gray-900">
                  SCANNER-001
                </Text>
              </View>
            </View>

            {/* Role */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Ionicons
                  name="shield-checkmark-outline"
                  size={20}
                  color="#111827"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-xs text-gray-400">
                  Account Role
                </Text>

                <Text className="mt-1 font-semibold text-gray-900">
                  Scanner
                </Text>
              </View>
            </View>

            {/* Location */}
            <View className="flex-row items-center p-4">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Ionicons
                  name="location-outline"
                  size={20}
                  color="#111827"
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-xs text-gray-400">
                  Assigned Location
                </Text>

                <Text className="mt-1 font-semibold text-gray-900">
                  Main Entrance
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Device */}
        <View className="mx-6 mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            Device
          </Text>

          <View className="overflow-hidden rounded-3xl bg-white">
            {/* Connection */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <Ionicons
                name="wifi-outline"
                size={21}
                color="#374151"
              />

              <View className="ml-3 flex-1">
                <Text className="font-medium text-gray-800">
                  Network
                </Text>

                <Text className="mt-1 text-xs text-emerald-600">
                  Connected
                </Text>
              </View>

              <View className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </View>

            {/* Camera */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <Ionicons
                name="camera-outline"
                size={21}
                color="#374151"
              />

              <View className="ml-3 flex-1">
                <Text className="font-medium text-gray-800">
                  Camera
                </Text>

                <Text className="mt-1 text-xs text-emerald-600">
                  Available
                </Text>
              </View>

              <Ionicons
                name="checkmark-circle"
                size={19}
                color="#10B981"
              />
            </View>

            {/* Battery */}
            <View className="flex-row items-center p-4">
              <Ionicons
                name="battery-half-outline"
                size={21}
                color="#374151"
              />

              <View className="ml-3 flex-1">
                <Text className="font-medium text-gray-800">
                  Battery
                </Text>

                <Text className="mt-1 text-xs text-gray-500">
                  78%
                </Text>
              </View>

              <Text className="text-sm font-semibold text-gray-700">
                Good
              </Text>
            </View>
          </View>
        </View>

        {/* Preferences */}
        <View className="mx-6 mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            Preferences
          </Text>

          <View className="overflow-hidden rounded-3xl bg-white">
            {/* Notifications */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <Ionicons
                name="notifications-outline"
                size={21}
                color="#374151"
              />

              <Text className="ml-3 flex-1 font-medium text-gray-800">
                Notifications
              </Text>

              <View className="rounded-full bg-emerald-50 px-3 py-1">
                <Text className="text-xs font-semibold text-emerald-600">
                  On
                </Text>
              </View>
            </View>

            {/* Sound */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <Ionicons
                name="volume-high-outline"
                size={21}
                color="#374151"
              />

              <Text className="ml-3 flex-1 font-medium text-gray-800">
                Scan Sound
              </Text>

              <View className="rounded-full bg-emerald-50 px-3 py-1">
                <Text className="text-xs font-semibold text-emerald-600">
                  On
                </Text>
              </View>
            </View>

            {/* Vibration */}
            <View className="flex-row items-center p-4">
              <Ionicons
                name="phone-portrait-outline"
                size={21}
                color="#374151"
              />

              <Text className="ml-3 flex-1 font-medium text-gray-800">
                Vibration
              </Text>

              <View className="rounded-full bg-emerald-50 px-3 py-1">
                <Text className="text-xs font-semibold text-emerald-600">
                  On
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View className="mx-6 mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            Account
          </Text>

          <View className="overflow-hidden rounded-3xl bg-white">
            {/* Account Information */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <Ionicons
                name="person-outline"
                size={21}
                color="#374151"
              />

              <Text className="ml-3 flex-1 font-medium text-gray-800">
                Account Information
              </Text>

              <Ionicons
                name="chevron-forward"
                size={18}
                color="#9CA3AF"
              />
            </View>

            {/* Security */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <Ionicons
                name="lock-closed-outline"
                size={21}
                color="#374151"
              />

              <Text className="ml-3 flex-1 font-medium text-gray-800">
                Security
              </Text>

              <Ionicons
                name="chevron-forward"
                size={18}
                color="#9CA3AF"
              />
            </View>

            {/* Help */}
            <View className="flex-row items-center border-b border-gray-100 p-4">
              <Ionicons
                name="help-circle-outline"
                size={21}
                color="#374151"
              />

              <Text className="ml-3 flex-1 font-medium text-gray-800">
                Help & Support
              </Text>

              <Ionicons
                name="chevron-forward"
                size={18}
                color="#9CA3AF"
              />
            </View>

            {/* Logout */}
            <View className="flex-row items-center p-4">
              <Ionicons
                name="log-out-outline"
                size={21}
                color="#EF4444"
              />

              <Text className="ml-3 flex-1 font-medium text-rose-500">
                Sign Out
              </Text>

              <Ionicons
                name="chevron-forward"
                size={18}
                color="#FDA4AF"
              />
            </View>
          </View>
        </View>

        {/* App Version */}
        <Text className="mt-8 text-center text-xs text-gray-400">
          Attendance Scanner
        </Text>

        <Text className="mt-1 text-center text-xs text-gray-400">
          Version 1.0.0
        </Text>
      </ScrollView>
    </View>
  );
}