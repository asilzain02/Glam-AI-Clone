import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode, memo } from 'react';
import { Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { colors, gradients } from '@/constants/colors';
import { radii } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';

type Props = {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  intensity?: number;
};

function GlassCardComponent({ children, onPress, style, contentStyle, intensity = 28 }: Props) {
  return (
    <Pressable onPress={onPress} disabled={!onPress} style={[styles.shell, shadows.card, style]}>
      <BlurView intensity={intensity} tint="dark" style={styles.blur}>
        <LinearGradient colors={gradients.darkGlass} style={[styles.content, contentStyle]}>
          {children}
        </LinearGradient>
      </BlurView>
    </Pressable>
  );
}

export const GlassCard = memo(GlassCardComponent);

const styles = StyleSheet.create({
  shell: { overflow: 'hidden', borderRadius: radii.lg, borderWidth: 1, borderColor: colors.glassBorder, backgroundColor: colors.glass },
  blur: { overflow: 'hidden', borderRadius: radii.lg },
  content: { padding: 20, minHeight: 1 },
});
