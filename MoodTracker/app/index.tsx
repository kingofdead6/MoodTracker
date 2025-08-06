import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import MoodSelector from "../components/MoodSelector";
import MoodEntryForm from "../components/MoodEntryForm";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AnimatePresence, MotiView } from "moti"; // For animations

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <LinearGradient
      colors={["#e0f2fe", "#bfdbfe"]} 
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <View
          className={`flex-1 px-6 py-8 ${
            Platform.OS === "android" ? "pt-12" : "pt-4"
          }`} // Adjust padding for Android
        >
          {/* Header Section */}
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 500 }}
            className="mb-8"
          >
            <Text className="text-3xl font-extrabold text-gray-900 tracking-tight">
              How are you feeling today?
            </Text>
            <Text className="text-base text-gray-500 mt-2">
              Share your mood to start your day mindfully.
            </Text>
          </MotiView>

          {/* Mood Selector Section */}
          <AnimatePresence>
            <MotiView
              from={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "timing", duration: 300 }}
              className="bg-white rounded-2xl shadow-md p-6 mb-6"
            >
              <MoodSelector selected={selectedMood} onSelect={setSelectedMood} />
            </MotiView>
          </AnimatePresence>

          {/* Mood Entry Form Section */}
          <AnimatePresence>
            {selectedMood && (
              <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                transition={{ type: "timing", duration: 300 }}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <MoodEntryForm
                  mood={selectedMood}
                  onClearMood={() => setSelectedMood(null)}
                />
              </MotiView>
            )}
          </AnimatePresence>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}