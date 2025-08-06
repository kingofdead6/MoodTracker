import { useEffect, useState, useCallback } from "react";
import { View, ScrollView, RefreshControl, Text, SafeAreaView, StatusBar, Platform, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView, AnimatePresence } from "moti";
import { getMoodEntries, deleteMoodEntry } from "../lib/storage";
import MoodEntryItem from "../components/MoodEntryItem";

type MoodEntry = {
  timestamp: string;
  [key: string]: any;
};

export default function History() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadEntries = async () => {
    const data = await getMoodEntries();
    setEntries(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadEntries();
    setRefreshing(false);
  }, []);

  const handleDelete = useCallback((timestamp: string) => {
    Alert.alert(
      "Delete Mood Entry",
      "Are you sure you want to delete this mood entry?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteMoodEntry(timestamp);
            await loadEntries();
            Alert.alert("Entry deleted!");
          },
        },
      ]
    );
  }, []);

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <LinearGradient
      colors={["#e0f2fe", "#bfdbfe"]}
      style={{ flex: 1 }}
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
          }`}
        >
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 500 }}
            className="mb-8"
          >
            <Text className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Your Mood History
            </Text>
            <Text className="text-base text-gray-500 mt-2">
              Reflect on your past moods and notes.
            </Text>
          </MotiView>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={["#2563eb"]}
              />
            }
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <AnimatePresence>
              {entries.length === 0 ? (
                <MotiView
                  key="empty"
                  from={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ type: "timing", duration: 300 }}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    padding: 24,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                >
                  <Text className="text-base text-gray-600 text-center">
                    No entries yet. Go log your mood!
                  </Text>
                </MotiView>
              ) : (
                entries.map((entry, index) => (
                  <MotiView
                    key={index}
                    from={{ opacity: 0, translateX: -10 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ type: "timing", duration: 300, delay: index * 50 }}
                  >
                    <MoodEntryItem entry={entry} onDelete={() => handleDelete(entry.timestamp)} />
                  </MotiView>
                ))
              )}
            </AnimatePresence>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}