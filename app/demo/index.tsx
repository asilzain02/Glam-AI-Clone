import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GlamScaffold } from '@/components/GlamScaffold';
import { EffectCard } from '@/components/EffectCard';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { ProjectCard } from '@/components/ProjectCard';
import { colors, gradients } from '@/constants/theme';
import { demoImages, demoProjects, effects } from '@/data/demoContent';

// Screenshot scenarios for contest judging
const SCREENSHOT_SCENARIOS = [
  {
    id: 's1',
    title: 'Beauty Retouching',
    subtitle: 'AI skin smoothing, eye enhancement & editorial makeup',
    tag: '📸 Photo Edit',
    tagColor: colors.glamPink,
    image: demoImages[0],
    badge: 'BEFORE → AFTER',
  },
  {
    id: 's2',
    title: 'Cinematic Color Grade',
    subtitle: 'Film-grade LUT, lens blur & luxury fashion lighting',
    tag: '🎬 Filter',
    tagColor: '#F9E7C8',
    image: demoImages[1],
    badge: 'AI ENHANCED',
  },
  {
    id: 's3',
    title: 'Magazine Cover Layout',
    subtitle: 'Editorial typography, cover framing & luxury positioning',
    tag: '📰 Creator',
    tagColor: colors.royalViolet,
    image: demoImages[2],
    badge: 'COVER READY',
  },
  {
    id: 's4',
    title: 'Background Removal',
    subtitle: 'Studio quality backdrop replacement in one tap',
    tag: '🏙️ Background',
    tagColor: colors.mint,
    image: demoImages[3],
    badge: 'INSTANT',
  },
  {
    id: 's5',
    title: 'Anime Portrait Filter',
    subtitle: 'High-end anime fashion art from a selfie',
    tag: '🌸 Anime',
    tagColor: '#FF9A9E',
    image: demoImages[4],
    badge: 'TRENDING',
  },
  {
    id: 's6',
    title: 'AI Reel Generator',
    subtitle: 'Photos → 9:16 viral reel with beats & transitions',
    tag: '🎞️ Video',
    tagColor: colors.royalViolet,
    image: demoImages[5],
    badge: '9:16 FORMAT',
  },
  {
    id: 's7',
    title: 'Barbie Dream Aesthetic',
    subtitle: 'Glossy pink editorial with dreamy glow effects',
    tag: '💖 Style',
    tagColor: colors.glamPinkLight,
    image: demoImages[6],
    badge: 'VIRAL STYLE',
  },
  {
    id: 's8',
    title: 'Object Eraser Tool',
    subtitle: 'AI inpainting removes distractions seamlessly',
    tag: '🪄 Erase',
    tagColor: colors.mint,
    image: demoImages[7],
    badge: 'CLEAN',
  },
  {
    id: 's9',
    title: 'Luxury Brand Aesthetic',
    subtitle: 'High-fashion editorial with gold tones & sharp contrast',
    tag: '👑 Luxury',
    tagColor: colors.champagne,
    image: demoImages[8],
    badge: 'PREMIUM',
  },
  {
    id: 's10',
    title: 'Social Carousel Pack',
    subtitle: '4:5 multi-slide format optimized for engagement',
    tag: '◫ Carousel',
    tagColor: colors.royalViolet,
    image: demoImages[9],
    badge: '4:5 PACK',
  },
] as const;

function ScenarioCard({ scenario }: { scenario: typeof SCREENSHOT_SCENARIOS[number] }) {
  return (
    <GlamCard style={styles.scenarioCard}>
      <Image
        source={{ uri: scenario.image }}
        style={styles.scenarioImage}
        contentFit="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.85)']}
        style={styles.scenarioOverlay}
      >
        <View style={styles.scenarioBadge}>
          <Text style={styles.scenarioBadgeText}>{scenario.badge}</Text>
        </View>
      </LinearGradient>
      <View style={styles.scenarioContent}>
        <View style={[styles.scenarioTag, { borderColor: scenario.tagColor + '60' }]}>
          <Text style={[styles.scenarioTagText, { color: scenario.tagColor }]}>
            {scenario.tag}
          </Text>
        </View>
        <Text style={styles.scenarioTitle}>{scenario.title}</Text>
        <Text style={styles.scenarioSub}>{scenario.subtitle}</Text>
      </View>
    </GlamCard>
  );
}

export default function DemoMode() {
  return (
    <GlamScaffold>
      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.contestBadge}>
          <Text style={styles.contestBadgeText}>🏆  8x Social Challenge</Text>
        </View>
        <Text style={styles.heroTitle}>Screenshot{'\n'}Studio</Text>
        <Text style={styles.heroSub}>
          10 premium AI edit scenarios preloaded with professional photography for contest-ready screenshots and demo recordings.
        </Text>
        <View style={styles.ctaRow}>
          <GlamButton title="← Open App" size="md" onPress={() => router.replace('/(tabs)')} />
          <GlamButton title="Edit Photo" size="md" variant="ghost" onPress={() => router.push('/(tabs)/editor/photo')} />
        </View>
      </View>

      {/* ── Stats Bar ── */}
      <View style={styles.statsBar}>
        {[['10', 'Scenarios'], ['8', 'AI Effects'], ['4', 'Formats'], ['∞', 'Exports']].map(([val, lbl]) => (
          <View key={lbl} style={styles.stat}>
            <Text style={styles.statValue}>{val}</Text>
            <Text style={styles.statLabel}>{lbl}</Text>
          </View>
        ))}
      </View>

      {/* ── Screenshot Scenarios ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hero Screenshots</Text>
        <Text style={styles.sectionSub}>Swipe through — each card = one contest screenshot scenario</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
          {SCREENSHOT_SCENARIOS.map((s) => (
            <ScenarioCard key={s.id} scenario={s} />
          ))}
        </ScrollView>
      </View>

      {/* ── AI Effects Showcase ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI Effects Gallery</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
          {effects.map((effect) => (
            <EffectCard key={effect.id} effect={effect} />
          ))}
        </ScrollView>
      </View>

      {/* ── Projects Showcase ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Projects</Text>
        {demoProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </View>

      {/* ── Format Grid ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Export Formats</Text>
        <View style={styles.formatGrid}>
          {[
            { fmt: '9:16', label: 'Vertical Reel', icon: '📱', h: 200, w: '30%' },
            { fmt: '4:5', label: 'Instagram Post', icon: '📸', h: 160, w: '36%' },
            { fmt: '1:1', label: 'Square Grid', icon: '◫', h: 130, w: '28%' },
          ].map(({ fmt, label, icon, h, w }) => (
            <View key={fmt} style={[styles.formatCard, { width: w as any, height: h }]}>
              <LinearGradient colors={gradients.heroCard} style={styles.formatInner}>
                <Text style={styles.formatIcon}>{icon}</Text>
                <Text style={styles.formatFmt}>{fmt}</Text>
                <Text style={styles.formatLabel}>{label}</Text>
              </LinearGradient>
            </View>
          ))}
        </View>
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: 8, gap: 16, paddingBottom: 8 },
  contestBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(251,191,36,0.15)',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(251,191,36,0.40)',
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  contestBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: colors.amber,
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 46,
    color: '#fff',
    lineHeight: 54,
  },
  heroSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: 'rgba(255,255,255,0.60)',
    lineHeight: 21,
  },
  ctaRow: { flexDirection: 'row', gap: 12 },

  statsBar: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    padding: 16,
    marginTop: 4,
    justifyContent: 'space-around',
  },
  stat: { alignItems: 'center', gap: 4 },
  statValue: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: colors.glamPink,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: 'rgba(255,255,255,0.50)',
  },

  section: { marginTop: 32, gap: 14 },
  sectionTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    color: '#fff',
  },
  sectionSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.50)',
    marginTop: -8,
  },
  carousel: { paddingRight: 20, gap: 0 },

  // Scenario Card
  scenarioCard: {
    width: 280,
    marginRight: 16,
    overflow: 'hidden',
  },
  scenarioImage: {
    width: '100%',
    height: 320,
    borderRadius: 24,
  },
  scenarioOverlay: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  scenarioBadge: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  scenarioBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    color: '#fff',
    letterSpacing: 0.8,
  },
  scenarioContent: { paddingTop: 14, gap: 6 },
  scenarioTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  scenarioTagText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 0.3,
  },
  scenarioTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#fff',
    lineHeight: 24,
  },
  scenarioSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.55)',
    lineHeight: 17,
  },

  // Format Grid
  formatGrid: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-end',
  },
  formatCard: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  formatInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  formatIcon: { fontSize: 24 },
  formatFmt: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#fff',
  },
  formatLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    color: 'rgba(255,255,255,0.50)',
    textAlign: 'center',
  },
});

