import { View, Text, Pressable } from "react-native";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";

export default function MoodEntryItem({ entry, onDelete }: { entry: any; onDelete: () => void }) {
  const date = new Date(entry.timestamp);
  const formatted = date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <MotiView
      from={{ opacity: 0, translateX: -10 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "timing", duration: 300 }}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text className="text-lg font-semibold text-gray-900">
          {entry.mood} - {formatted}
        </Text>
        {entry.note ? (
          <Text className="text-base text-gray-600 mt-1">{entry.note}</Text>
        ) : null}
      </View>
      <Pressable
        onPress={onDelete}
        style={{
          padding: 8,
          borderRadius: 8,
          backgroundColor: "#fee2e2",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}
        className="active:bg-red-200"
      >
        <Ionicons name="trash-outline" size={20} color="#dc2626" />
      </Pressable>
    </MotiView>
  );
}