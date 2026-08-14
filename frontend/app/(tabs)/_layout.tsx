import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // TAB BAR
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 50,
          right: 50,
          marginHorizontal: 20,

          height: 64,

          backgroundColor: "#FFFFFF",
          borderRadius: 32,
          borderWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.08)",

          elevation: 10,

          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.16,
          shadowRadius: 12,
          ...(Platform.OS === "web"
            ? ({ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12), 0px 2px 6px rgba(0, 0, 0, 0.06)" } as any)
            : {}),
        },

        // TAB SPACING
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },

        // COLORS
        tabBarActiveTintColor: "#111827",
        tabBarInactiveTintColor: "#9CA3AF",

        // LABELS
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
          marginTop: 1,
          marginBottom: 5,
        },

        // ICONS
        tabBarIconStyle: {
          marginTop: 3,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={21}
              color={focused ? "#111827" : "#9CA3AF"}
            />
          ),
        }}
      />

      {/* SCANNER */}
      <Tabs.Screen
        name="scanner"
        options={{
          title: "Scan",

          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "600",
            marginTop: 8,
            marginBottom: 0,
          },

          tabBarIconStyle: {
            marginTop: 0,
          },

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: -18,

                width: 60,
                height: 60,

                borderRadius: 30,

                backgroundColor: "#FFFFFF",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Scanner Button */}
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,

                  backgroundColor: focused ? "#111827" : "#F3F4F6",

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name={focused ? "scan" : "scan-outline"}
                  size={24}
                  color={focused ? "#FFFFFF" : "#4B5563"}
                />
              </View>
            </View>
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={21}
              color={focused ? "#111827" : "#9CA3AF"}
            />
          ),
        }}
      />
    </Tabs>
  );
}