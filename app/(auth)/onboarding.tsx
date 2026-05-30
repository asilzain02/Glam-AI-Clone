import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { colors } from '@/constants/theme';

const SLIDES = [
  { icon: '💄', title: 'AI Beauty Pro', desc: 'Retouch, smoothing, and professional makeup effects in one tap.' },
  { icon: '🪄', title: 'Smart Magic', desc: 'Remove backgrounds, erase objects, and expand your canvas instantly.' },
  { icon: '🎞️', title: 'Viral Reels', desc: 'Turn static photos into cinematic video reels with beat-sync music.' },
];

export default function Onboarding() {
  return (
    <GlamScaffold>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to{'\n'}Your Studio</Text>
        <Text style={styles.subtitle}>Supercharge your creativity with high-end AI toolkit.</Text>
      </View>

      <View style={styles.cards}>
        {SLIDES.map((slide, index) => (
          <GlamCard key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.iconBox}>
                <Text style={styles.icon}>{slide.icon}</Text>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.cardTitle}>{slide.title}</Text>
                <Text style={styles.cardDesc}>{slide.desc}</Text>
              </View>
            </View>
          </GlamCard>
        ))}
      </View>

      <View style={styles.footer}>
        <GlamButton 
          title="Create Account" 
          fullWidth 
          onPress={() => router.push('/(auth)/signup')} 
        />
        <GlamButton 
          title="Log In" 
          variant="ghost" 
          fullWidth 
          onPress={() => router.push('/(auth)/login')} 
        />
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  header: { gap: 8, marginVertical: 32 },
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Poppins_700Bold',
    lineHeight: 48,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  cards: { gap: 16 },
  card: { padding: 16 },
  cardContent: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  icon: { fontSize: 28 },
  textBox: { flex: 1, gap: 4 },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
  },
  cardDesc: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    lineHeight: 18,
  },
  footer: { gap: 12, marginTop: 40, marginBottom: 20 },
});

