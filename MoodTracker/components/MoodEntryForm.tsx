import { useState } from "react";
import { View, TextInput, Pressable, Text, Alert } from "react-native";
import { MotiView } from "moti";
import { saveMoodEntry } from "../lib/storage";

export default function MoodEntryForm({
  mood,
  onClearMood,
}: {
  mood: string | null;
  onClearMood: () => void;
}) {
  const [note, setNote] = useState("");

  const submit = async () => {
    if (!mood) {
      Alert.alert("Please select a mood first!");
      return;
    }

    await saveMoodEntry({
      mood,
      note,
      timestamp: new Date().toISOString(),
    });

    setNote("");
    onClearMood();
    Alert.alert("Mood logged!");
  };

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 300 }}
      className="w-full"
    >
      <TextInput
        placeholder="Add a note about your mood..."
        value={note}
        onChangeText={setNote}
        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4 text-base text-gray-900 placeholder-gray-400"
        multiline
        numberOfLines={3}
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3, // Android shadow
        }}
      />
      <Pressable
        onPress={submit}
        style={{
          backgroundColor: "#3b82f6",
          borderRadius: 12,
          paddingVertical: 12,
          paddingHorizontal: 24,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3, // Android shadow
        }}
        className="active:bg-blue-600"
      >
        <Text className="text-white font-semibold text-base">Save Mood</Text>
      </Pressable>
    </MotiView>
  );
}