import { useEffect, useState } from "react";
import { View, Text, Platform, StatusBar, Image } from "react-native";
import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";
import "../global.css";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <LinearGradient
        colors={["#e0f2fe", "#bfdbfe"]}
        style={{ flex: 1 }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: Platform.OS === "android" ? 40 : 0,
          }}
        >
          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 1000 }}
            style={{
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Logo.png")}
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "#6b7280",
                marginTop: 12,
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Capture your emotions daily
            </Text>
          </MotiView>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#e0f2fe", "#bfdbfe"]}
      style={{ flex: 1 }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          headerStyle: {
            height: Platform.OS === "android" ? 100 : 120,
          },
          tabBarIcon: ({ color, size }) => {
            const iconName: React.ComponentProps<typeof Ionicons>["name"] =
              route.name === "history" ? "time-outline" : "happy-outline";
            return <Ionicons name={iconName} size={size + 4} color={color} />;
          },
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#9ca3af",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopColor: "#e5e7eb",
            borderTopWidth: 1,
            paddingBottom: Platform.OS === "ios" ? 20 : 10,
            height: Platform.OS === "ios" ? 80 : 60,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginBottom: 4,
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
          }}
        />
      </Tabs>
    </LinearGradient>
  );
}