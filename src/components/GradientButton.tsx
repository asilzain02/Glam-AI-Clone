import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';
import { Pressable, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { colors, gradients } from '@/constants/colors';
import { radii } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { typography } from '@/constants/typography';

type Props = { title: string; onPress?: () => void; variant?: 'primary' | 'secondary' | 'ghost'; style?: StyleProp<ViewStyle> };

function GradientButtonComponent({ title, onPress, variant = 'primary', style }: Props) {
  if (variant === 'ghost') {
    return (
      <Pressable onPress={onPress} style={[styles.ghost, style]}>
        <Text style={styles.ghostText}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={[styles.pressable, variant === 'primary' ? shadows.glowPink : undefined, style]}>
      <LinearGradient colors={variant === 'primary' ? gradients.glam : gradients.violetGlass} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

export const GradientButton = memo(GradientButtonComponent);

const styles = StyleSheet.create({
  pressable: { overflow: 'hidden', borderRadius: radii.pill },
  gradient: { minHeight: 54, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 22 },
  text: { ...typography.bodyStrong, color: colors.white, textAlign: 'center' },
  ghost: { minHeight: 54, justifyContent: 'center', borderRadius: radii.pill, borderWidth: 1, borderColor: colors.glassBorder, paddingHorizontal: 22, backgroundColor: 'rgba(255,255,255,0.07)' },
  ghostText: { ...typography.bodyStrong, color: colors.white, textAlign: 'center' },
});
