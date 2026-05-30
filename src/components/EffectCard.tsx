import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AIEffect } from '@/types';

export function EffectCard({ effect, onPress }: { effect: AIEffect; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}
    >
      <LinearGradient
        colors={effect.gradient as [string, string, ...string[]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <Text style={styles.icon}>{effect.icon}</Text>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{effect.title}</Text>
          <Text style={styles.subtitle}>{effect.subtitle}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 12,
    borderRadius: 24,
    overflow: 'hidden',
  },
  card: {
    width: 160,
    height: 200,
    padding: 16,
    justifyContent: 'space-between',
  },
  icon: { fontSize: 36 },
  textBlock: { gap: 3 },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 11,
    fontFamily: 'Inter_400Regular',
    color: 'rgba(255,255,255,0.80)',
    lineHeight: 14,
  },
  pressed: { opacity: 0.82, transform: [{ scale: 0.97 }] },
});

