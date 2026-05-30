import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, gradients, shadows } from '@/constants/theme';

type GlamButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'ghost' | 'danger';
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export function GlamButton({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  disabled = false,
  size = 'md',
}: GlamButtonProps) {
  const isDisabled = disabled || loading;
  const padV = size === 'sm' ? 10 : size === 'lg' ? 18 : 14;
  const padH = size === 'sm' ? 16 : size === 'lg' ? 28 : 22;
  const fontSize = size === 'sm' ? 13 : size === 'lg' ? 18 : 15;

  if (variant === 'ghost') {
    return (
      <Pressable
        onPress={isDisabled ? undefined : onPress}
        style={({ pressed }) => [
          styles.ghost,
          fullWidth && styles.fullWidth,
          { paddingVertical: padV, paddingHorizontal: padH },
          pressed && styles.pressed,
          isDisabled && styles.disabled,
        ]}
      >
        <Text style={[styles.ghostText, { fontSize }]}>
          {loading ? '...' : title}
        </Text>
      </Pressable>
    );
  }

  if (variant === 'danger') {
    return (
      <Pressable
        onPress={isDisabled ? undefined : onPress}
        style={({ pressed }) => [
          styles.danger,
          fullWidth && styles.fullWidth,
          { paddingVertical: padV, paddingHorizontal: padH },
          pressed && styles.pressed,
          isDisabled && styles.disabled,
        ]}
      >
        <Text style={[styles.primaryText, { fontSize }]}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={isDisabled ? undefined : onPress}
      style={({ pressed }) => [
        styles.primaryWrapper,
        fullWidth && styles.fullWidth,
        shadows.pink,
        pressed && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      <LinearGradient
        colors={gradients.glam}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { paddingVertical: padV, paddingHorizontal: padH }]}
      >
        {loading ? (
          <View style={styles.loadingRow}>
            <ActivityIndicator color="#fff" size="small" />
            <Text style={[styles.primaryText, { fontSize, marginLeft: 8 }]}>Processing…</Text>
          </View>
        ) : (
          <Text style={[styles.primaryText, { fontSize }]}>{title}</Text>
        )}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryWrapper: {
    overflow: 'hidden',
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },
  ghost: {
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  ghostText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
  },
  danger: {
    borderRadius: 999,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  fullWidth: { alignSelf: 'stretch' },
  pressed: { opacity: 0.80 },
  disabled: { opacity: 0.45 },
  loadingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
});

