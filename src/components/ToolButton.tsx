import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/theme';

type ToolButtonProps = {
  icon: string;
  label: string;
  active?: boolean;
  onPress?: () => void;
  gradient?: readonly [string, string];
};

export function ToolButton({ icon, label, active = false, onPress, gradient }: ToolButtonProps) {
  if (active && gradient) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}>
        <LinearGradient
          colors={gradient as [string, string]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.iconBox}
        >
          <Text style={styles.iconActive}>{icon}</Text>
        </LinearGradient>
        <Text style={[styles.label, styles.labelActive]}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}
    >
      <View style={[styles.iconBox, styles.iconBoxDefault, active && styles.iconBoxActive]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 6,
    minWidth: 64,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxDefault: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  iconBoxActive: {
    borderColor: 'rgba(255,77,141,0.50)',
    backgroundColor: 'rgba(255,77,141,0.15)',
  },
  icon: { fontSize: 24 },
  iconActive: { fontSize: 24 },
  label: {
    fontSize: 11,
    fontFamily: 'Inter_400Regular',
    color: 'rgba(255,255,255,0.55)',
    textAlign: 'center',
  },
  labelActive: {
    color: colors.glamPink,
    fontFamily: 'Inter_600SemiBold',
  },
  pressed: { opacity: 0.75, transform: [{ scale: 0.95 }] },
});
