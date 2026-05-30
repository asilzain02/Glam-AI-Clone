import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { gradients, shadows } from '@/constants/theme';

type GlamCardProps = {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  glowColor?: string;
  padded?: boolean;
};

export function GlamCard({
  children,
  onPress,
  style,
  padded = true,
}: GlamCardProps) {
  const inner = (
    <BlurView intensity={28} tint="dark" style={styles.blur}>
      <LinearGradient
        colors={gradients.darkGlass}
        style={[styles.gradient, !padded && styles.noPad]}
      >
        {children}
      </LinearGradient>
    </BlurView>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.card,
          style,
          shadows.card,
          pressed && styles.pressed,
        ]}
      >
        {inner}
      </Pressable>
    );
  }

  return (
    <View style={[styles.card, style, shadows.card]}>
      {inner}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  blur: {
    overflow: 'hidden',
    borderRadius: 28,
  },
  gradient: {
    padding: 18,
  },
  noPad: {
    padding: 0,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
});

