import { View, Text, Pressable } from "react-native";
import { MotiView } from "moti";

const moods = ["😀", "😐", "😢", "😠", "😴"];

export default function MoodSelector({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (mood: string) => void;
}) {
  return (
    <View className="flex-row flex-wrap justify-center gap-4">
      {moods.map((mood, index) => (
        <MotiView
          key={mood}
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 300, delay: index * 100 }}
        >
          <Pressable
            onPress={() => onSelect(mood)}
            style={{
              width: 56,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              backgroundColor: selected === mood ? "#3b82f6" : "#ffffff",
              borderWidth: 1,
              borderColor: selected === mood ? "#2563eb" : "#e5e7eb",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3, // Android shadow
            }}
            className="active:scale-95"
          >
            <Text className="text-3xl">{mood}</Text>
          </Pressable>
        </MotiView>
      ))}
    </View>
  );
}