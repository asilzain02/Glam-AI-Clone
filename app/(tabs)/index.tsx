import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useCallback } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { EffectCard } from '@/components/EffectCard';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { colors, gradients } from '@/constants/theme';
import { creators, demoImages, effects, featuredTemplates } from '@/data/demoContent';

// ─── Featured Template Card ───────────────────────────────────────────────────
function TemplateChip({ label, icon }: { label: string; icon: string }) {
  return (
    <Pressable style={styles.chip}>
      <Text style={styles.chipIcon}>{icon}</Text>
      <Text style={styles.chipLabel}>{label}</Text>
    </Pressable>
  );
}

// ─── Creator Avatar ───────────────────────────────────────────────────────────
function CreatorAvatar({ uri, name }: { uri: string; name: string }) {
  return (
    <View style={styles.avatarWrapper}>
      <LinearGradient colors={gradients.glam} style={styles.avatarRing}>
        <Image source={{ uri }} style={styles.avatar} contentFit="cover" />
      </LinearGradient>
      <Text style={styles.avatarName} numberOfLines={1}>{name}</Text>
    </View>
  );
}

// ─── Home Screen ─────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const goToDemo = useCallback(() => router.push('/demo'), []);
  const goToEditor = useCallback(() => router.push('/(tabs)/editor'), []);

  return (
    <GlamScaffold>
      {/* ── Hero ── */}
      <View style={styles.hero}>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>✦  AI-Powered Creator Studio</Text>
        </View>

        <Text style={styles.heroHeadline}>
          Create Viral{'\n'}
          <Text style={styles.heroGradientText}>AI Photos{'\n'}&amp; Videos</Text>
        </Text>

        <Text style={styles.heroSub}>
          Beauty retouching · Background replace · Anime filters · Reel generator
        </Text>

        <View style={styles.heroButtons}>
          <GlamButton
            title="📸  Upload Photo"
            size="lg"
            onPress={goToEditor}
          />
          <GlamButton
            title="🎞  Create Reel"
            size="lg"
            variant="ghost"
            onPress={() => router.push('/(tabs)/editor/video')}
          />
        </View>
      </View>

      {/* ── Hero Preview Card ── */}
      <GlamCard style={styles.previewCard}>
        <View style={styles.previewRow}>
          <Image
            source={{ uri: demoImages[0] }}
            style={styles.previewImage}
            contentFit="cover"
          />
          <View style={styles.previewContent}>
            <View style={styles.previewBadge}>
              <Text style={styles.previewBadgeText}>🏆 Contest Mode</Text>
            </View>
            <Text style={styles.previewTitle}>Screenshot{'\n'}Studio</Text>
            <Text style={styles.previewSub}>
              Premium AI edits preloaded for judging screenshots.
            </Text>
            <View style={styles.previewBtn}>
              <GlamButton title="Open Studio" size="sm" onPress={goToDemo} />
            </View>
          </View>
        </View>
      </GlamCard>

      {/* ── Trending AI Effects ── */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending AI Effects</Text>
          <Pressable>
            <Text style={styles.sectionAction}>See all →</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carousel}
        >
          {effects.map((effect) => (
            <EffectCard
              key={effect.id}
              effect={effect}
              onPress={() => router.push('/(tabs)/editor')}
            />
          ))}
        </ScrollView>
      </View>

      {/* ── Featured Templates ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Templates</Text>
        <View style={styles.chipRow}>
          {featuredTemplates.map((t) => (
            <TemplateChip key={t.label} label={t.label} icon={t.icon} />
          ))}
        </View>
      </View>

      {/* ── Featured Creators ── */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Creators</Text>
          <Pressable>
            <Text style={styles.sectionAction}>Follow →</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.creatorsCarousel}
        >
          {creators.map((c) => (
            <CreatorAvatar key={c.name} uri={c.avatar} name={c.name} />
          ))}
        </ScrollView>
      </View>

      {/* ── Recent Projects Preview ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickGrid}>
          {demoImages.slice(0, 4).map((uri, i) => (
            <Pressable key={uri} style={({ pressed }) => [styles.quickCell, pressed && { opacity: 0.8 }]}>
              <Image source={{ uri }} style={styles.quickImage} contentFit="cover" />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.70)']}
                style={styles.quickOverlay}
              >
                <Text style={styles.quickLabel}>Edit #{i + 1}</Text>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  // Hero
  hero: { paddingTop: 12, paddingBottom: 28, gap: 16 },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(139,92,246,0.20)',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(139,92,246,0.40)',
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  heroBadgeText: {
    color: colors.royalViolet,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  heroHeadline: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 42,
    color: '#fff',
    lineHeight: 50,
  },
  heroGradientText: {
    color: colors.glamPink,
  },
  heroSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: 'rgba(255,255,255,0.60)',
    lineHeight: 20,
  },
  heroButtons: { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },

  // Preview Card
  previewCard: { marginBottom: 8 },
  previewRow: { flexDirection: 'row', gap: 16, alignItems: 'center' },
  previewImage: { width: 110, height: 130, borderRadius: 20 },
  previewContent: { flex: 1, gap: 8 },
  previewBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,77,141,0.20)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,77,141,0.40)',
  },
  previewBadgeText: {
    color: colors.glamPink,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
  },
  previewTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#fff',
    lineHeight: 26,
  },
  previewSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.60)',
    lineHeight: 17,
  },
  previewBtn: {},

  // Sections
  section: { marginTop: 28, gap: 16 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#fff',
  },
  sectionAction: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: colors.glamPink,
  },
  carousel: { paddingRight: 20 },

  // Template Chips
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  chipIcon: { fontSize: 15 },
  chipLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#fff',
  },

  // Creators
  creatorsCarousel: { gap: 16, paddingRight: 20 },
  avatarWrapper: { alignItems: 'center', gap: 6, width: 72 },
  avatarRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: colors.navy,
  },
  avatarName: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: 'rgba(255,255,255,0.70)',
    textAlign: 'center',
  },

  // Quick Grid
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  quickCell: {
    width: '47.5%',
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
  },
  quickImage: { width: '100%', height: '100%' },
  quickOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    justifyContent: 'flex-end',
    padding: 12,
  },
  quickLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#fff',
  },
});

