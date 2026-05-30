import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { gradients } from '@/constants/theme';

export function GlamCard({ children, onPress, className = '', style }: { children: ReactNode; onPress?: () => void; className?: string; style?: ViewStyle }) {
  const Wrapper = onPress ? Pressable : Pressable;
  return (
    <Wrapper onPress={onPress} className={`overflow-hidden rounded-[28px] border border-white/20 ${className}`} style={style}>
      <BlurView intensity={32} tint="dark" className="overflow-hidden rounded-[28px]">
        <LinearGradient colors={gradients.darkGlass} className="p-4">{children}</LinearGradient>
      </BlurView>
    </Wrapper>
  );
}
