import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamScaffold } from '@/components/GlamScaffold';
import { colors, gradients } from '@/constants/theme';
import { demoImages } from '@/data/demoContent';

export default function Splash() {
  return (
    <GlamScaffold scroll={false} noPadding>
      <View style={styles.container}>
        <Image 
          source={{ uri: demoImages[9] }} 
          style={styles.bgImage} 
          contentFit="cover" 
        />
        <LinearGradient
          colors={['transparent', 'rgba(10,8,20,0.4)', colors.navy]}
          style={styles.overlay}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <View style={styles.logoBadge}>
                <Text style={styles.logoBadgeText}>GLAM AI</Text>
              </View>
              <Text style={styles.headline}>
                The Future of{'\n'}
                <Text style={styles.gradientText}>Visual Storytelling</Text>
              </Text>
              <Text style={styles.subheadline}>
                Professional-grade AI photo & video tools for modern social creators.
              </Text>
            </View>

            <View style={styles.footer}>
              <GlamButton 
                title="Start Creating" 
                size="lg" 
                fullWidth 
                onPress={() => router.push('/(auth)/onboarding')} 
              />
              <GlamButton 
                title="Open Demo Studio" 
                size="lg" 
                variant="ghost" 
                fullWidth 
                onPress={() => router.replace('/demo')} 
              />
              <Text style={styles.legal}>
                By continuing, you agree to our Terms and Privacy Policy.
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: { position: 'absolute', inset: 0 },
  overlay: { flex: 1, padding: 24, justifyContent: 'flex-end' },
  content: { gap: 40, paddingBottom: 40 },
  header: { gap: 16 },
  logoBadge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  logoBadgeText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 2,
  },
  headline: {
    color: '#fff',
    fontSize: 48,
    fontFamily: 'Poppins_700Bold',
    lineHeight: 56,
  },
  gradientText: {
    color: colors.glamPink,
  },
  subheadline: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    lineHeight: 24,
  },
  footer: { gap: 16 },
  legal: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
});

