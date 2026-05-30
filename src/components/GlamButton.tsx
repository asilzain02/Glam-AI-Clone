import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text } from 'react-native';
import { gradients } from '@/constants/theme';

export function GlamButton({ title, onPress, variant = 'primary' }: { title: string; onPress?: () => void; variant?: 'primary' | 'ghost' }) {
  if (variant === 'ghost') {
    return <Pressable onPress={onPress} className="rounded-full border border-white/20 px-5 py-4"><Text className="text-center font-semibold text-white">{title}</Text></Pressable>;
  }
  return (
    <Pressable onPress={onPress} className="overflow-hidden rounded-full shadow-lg shadow-pink-500/40">
      <LinearGradient colors={gradients.glam} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} className="px-6 py-4">
        <Text className="text-center text-base font-bold text-white">{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}
