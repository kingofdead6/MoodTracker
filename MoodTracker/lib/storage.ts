import AsyncStorage from "@react-native-async-storage/async-storage";

const MOOD_KEY = "mood-entries";

export const saveMoodEntry = async (entry: any) => {
  const existing = await getMoodEntries();
  const updated = [entry, ...existing];
  await AsyncStorage.setItem(MOOD_KEY, JSON.stringify(updated));
};

export const getMoodEntries = async () => {
  const data = await AsyncStorage.getItem(MOOD_KEY);
  return data ? JSON.parse(data) : [];
};

export const deleteMoodEntry = async (timestamp: string) => {
  const existing = await getMoodEntries();
  const updated = existing.filter((entry: any) => entry.timestamp !== timestamp);
  await AsyncStorage.setItem(MOOD_KEY, JSON.stringify(updated));
};