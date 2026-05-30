import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { AIEffect } from '@/types';

export function EffectCard({ effect }: { effect: AIEffect }) {
  return (
    <LinearGradient colors={effect.gradient as [string, string, ...string[]]} className="mr-3 h-40 w-36 justify-between rounded-[28px] p-4">
      <Text className="text-3xl">{effect.icon}</Text>
      <View>
        <Text className="text-lg font-extrabold text-white">{effect.title}</Text>
        <Text className="mt-1 text-xs text-white/80">{effect.subtitle}</Text>
      </View>
    </LinearGradient>
  );
}
