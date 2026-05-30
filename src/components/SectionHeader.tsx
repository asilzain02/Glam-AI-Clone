import { Text, View } from 'react-native';
export function SectionHeader({ title, action }: { title: string; action?: string }) {
  return <View className="mb-3 mt-6 flex-row items-center justify-between"><Text className="text-2xl font-extrabold text-white">{title}</Text>{action ? <Text className="text-sm font-semibold text-pink-300">{action}</Text> : null}</View>;
}
