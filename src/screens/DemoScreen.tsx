import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { SectionTitle } from '@/components/SectionTitle';
import { colors, gradients } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { typography } from '@/constants/typography';
import { demoImages, demoProjects, effects, screenshotScenarios, templates } from '@/data/demoContent';
import { useResponsive } from '@/hooks/useResponsive';

export function DemoScreen() {
  const { isTablet } = useResponsive();
  return (
    <PremiumScaffold>
      <LinearGradient colors={gradients.hero} style={[styles.hero, shadows.glowPink]}>
        <View style={styles.heroCopy}>
          <Text style={styles.kicker}>SCREENSHOT STUDIO</Text>
          <Text style={styles.title}>Contest-ready Glam AI demo mode</Text>
          <Text style={styles.subtitle}>Premium seeded portraits, edits, templates, AI logs, and 10 curated screenshot scenarios for an 8x Social submission.</Text>
          <View style={styles.actions}>
            <GradientButton title="Open App" onPress={() => router.replace('/(tabs)')} style={styles.actionButton} />
            <GradientButton title="Photo Editor" variant="ghost" onPress={() => router.push('/(tabs)/editor/photo')} style={styles.actionButton} />
          </View>
        </View>
        <View style={styles.heroStack}>
          <Image source={{ uri: demoImages[0] }} style={styles.stackOne} contentFit="cover" />
          <Image source={{ uri: demoImages[5] }} style={styles.stackTwo} contentFit="cover" />
        </View>
      </LinearGradient>

      <SectionTitle eyebrow="Required shots" title="10 screenshot scenarios" />
      <View style={styles.scenarioGrid}>
        {screenshotScenarios.map((scenario, index) => (
          <GlassCard key={scenario} style={[styles.scenarioCard, isTablet && styles.scenarioCardTablet]} contentStyle={styles.scenarioContent}>
            <Text style={styles.scenarioNumber}>{String(index + 1).padStart(2, '0')}</Text>
            <Text style={styles.scenarioText}>{scenario}</Text>
          </GlassCard>
        ))}
      </View>

      <SectionTitle eyebrow="Finished edits" title="Premium mock images" />
      <View style={styles.imageGrid}>
        {demoImages.map((uri, index) => (
          <GlassCard key={uri} style={[styles.imageCard, isTablet && styles.imageCardTablet]} contentStyle={styles.imageContent}>
            <Image source={{ uri }} style={styles.finishedImage} contentFit="cover" transition={250} />
            <Text style={styles.cardTitle}>Finished Edit #{index + 1}</Text>
            <Text style={styles.muted}>AI beauty · luxury filter · export-ready</Text>
          </GlassCard>
        ))}
      </View>

      <SectionTitle eyebrow="Effects" title="AI feature coverage" />
      <View style={styles.effectsGrid}>
        {effects.map((effect) => (
          <LinearGradient key={effect.id} colors={effect.gradient as [string, string, ...string[]]} style={styles.effectCard}>
            <Text style={styles.effectIcon}>{effect.icon}</Text>
            <Text style={styles.cardTitle}>{effect.title}</Text>
            <Text style={styles.effectMeta}>{effect.subtitle}</Text>
          </LinearGradient>
        ))}
      </View>

      <SectionTitle eyebrow="Seeded data" title="Templates and projects" />
      <View style={styles.projectGrid}>
        {[...templates, ...demoProjects].slice(0, 8).map((item) => (
          <GlassCard key={item.id} style={styles.projectCard} contentStyle={styles.projectContent}>
            {'image' in item ? <Image source={{ uri: item.image }} style={styles.projectThumb} contentFit="cover" /> : <Image source={{ uri: item.coverUrl }} style={styles.projectThumb} contentFit="cover" />}
            <View style={styles.projectCopy}><Text style={styles.cardTitle}>{item.title}</Text><Text style={styles.muted}>{'meta' in item ? item.meta : `${item.kind} · ${item.format}`}</Text></View>
          </GlassCard>
        ))}
      </View>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  hero: { minHeight: 430, borderRadius: radii.xl, padding: spacing.x3, borderWidth: 1, borderColor: colors.glassBorder, overflow: 'hidden' },
  heroCopy: { maxWidth: 680, zIndex: 2 },
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  title: { ...typography.display, color: colors.white, marginTop: 10, maxWidth: 700 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: spacing.x2, maxWidth: 620 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2, marginTop: spacing.x3 },
  actionButton: { minWidth: 150 },
  heroStack: { position: 'absolute', right: -10, bottom: -20, width: 250, height: 315 },
  stackOne: { position: 'absolute', right: 30, bottom: 0, width: 160, height: 272, borderRadius: 34, borderWidth: 1, borderColor: colors.glassBorder },
  stackTwo: { position: 'absolute', left: 0, bottom: 70, width: 112, height: 168, borderRadius: 28, borderWidth: 1, borderColor: colors.glassBorder },
  scenarioGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2 },
  scenarioCard: { flexGrow: 1, flexBasis: 150 },
  scenarioCardTablet: { flexBasis: 200 },
  scenarioContent: { padding: spacing.x2 },
  scenarioNumber: { ...typography.caption, color: colors.pink, letterSpacing: 1.4 },
  scenarioText: { ...typography.bodyStrong, color: colors.white, marginTop: 8 },
  imageGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2 },
  imageCard: { flexGrow: 1, flexBasis: 155 },
  imageCardTablet: { flexBasis: 220 },
  imageContent: { padding: 10 },
  finishedImage: { height: 280, borderRadius: radii.lg, marginBottom: 12 },
  cardTitle: { ...typography.bodyStrong, color: colors.white },
  muted: { ...typography.caption, color: colors.textMuted, marginTop: 5 },
  effectsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2 },
  effectCard: { flexGrow: 1, flexBasis: 150, minHeight: 174, borderRadius: radii.lg, padding: spacing.x2, justifyContent: 'space-between', overflow: 'hidden' },
  effectIcon: { fontSize: 30 },
  effectMeta: { ...typography.caption, color: 'rgba(255,255,255,0.75)', marginTop: 5 },
  projectGrid: { gap: spacing.x2 },
  projectCard: {},
  projectContent: { padding: spacing.x2, flexDirection: 'row', alignItems: 'center', gap: spacing.x2 },
  projectThumb: { width: 76, height: 90, borderRadius: 20 },
  projectCopy: { flex: 1 },
});
