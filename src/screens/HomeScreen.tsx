import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { memo, useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { SectionTitle } from '@/components/SectionTitle';
import { colors, gradients } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { typography } from '@/constants/typography';
import { creators, demoImages, demoProjects, effects, templates } from '@/data/demoContent';
import { useResponsive } from '@/hooks/useResponsive';

const EffectTile = memo(function EffectTile({ item }: { item: (typeof effects)[number] }) {
  return (
    <LinearGradient colors={item.gradient as [string, string, ...string[]]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.effectTile, shadows.glowPurple]}>
      <Text style={styles.effectIcon}>{item.icon}</Text>
      <View>
        <Text style={styles.effectTitle}>{item.title}</Text>
        <Text style={styles.effectSubtitle}>{item.subtitle}</Text>
      </View>
    </LinearGradient>
  );
});

export function HomeScreen() {
  const { isTiny, isTablet, contentWidth, horizontalPadding } = useResponsive();
  const projectWidth = useMemo(() => (isTablet ? (contentWidth - horizontalPadding * 2 - 16) / 2 : contentWidth - horizontalPadding * 2), [contentWidth, horizontalPadding, isTablet]);

  return (
    <PremiumScaffold>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.kicker}>GLAM AI STUDIO</Text>
          <Text style={styles.greeting}>Good evening, Creator</Text>
        </View>
        <Pressable onPress={() => router.push('/demo')} style={styles.demoPill}>
          <Text style={styles.demoText}>Demo</Text>
        </Pressable>
      </View>

      <LinearGradient colors={gradients.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.hero, shadows.glowPurple]}>
        <View style={styles.heroCopy}>
          <Text style={[styles.heroTitle, isTiny && styles.heroTitleTiny]}>Create Viral AI Photos & Videos</Text>
          <Text style={styles.heroSubtitle}>Retouch portraits, remove backgrounds, erase objects, and export polished reels with a luxury creator workflow.</Text>
          <View style={[styles.heroActions, isTiny && styles.heroActionsStack]}>
            <GradientButton title="Upload Photo" onPress={() => router.push('/(tabs)/editor/photo')} style={styles.heroButton} />
            <GradientButton title="Create Reel" variant="ghost" onPress={() => router.push('/(tabs)/editor/video')} style={styles.heroButton} />
          </View>
        </View>
        <View style={styles.heroArtWrap}>
          <Image source={{ uri: demoImages[0] }} style={styles.heroArtMain} contentFit="cover" transition={250} />
          <Image source={{ uri: demoImages[2] }} style={styles.heroArtFloating} contentFit="cover" transition={250} />
        </View>
      </LinearGradient>

      <SectionTitle eyebrow="Trending now" title="AI effects creators are remixing" action="See all" />
      <FlatList horizontal data={effects} keyExtractor={(item) => item.id} renderItem={({ item }) => <EffectTile item={item} />} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList} initialNumToRender={4} />

      <SectionTitle eyebrow="Templates" title="Popular formats for social growth" action="Browse" />
      <View style={styles.templateGrid}>
        {templates.map((template) => (
          <GlassCard key={template.id} style={[styles.templateCard, isTablet && styles.templateCardTablet]} contentStyle={styles.templateContent}>
            <Image source={{ uri: template.image }} style={styles.templateImage} contentFit="cover" transition={250} />
            <LinearGradient colors={template.gradient as [string, string, ...string[]]} style={styles.templateBadge}><Text style={styles.templateBadgeText}>AI</Text></LinearGradient>
            <Text style={styles.cardTitle}>{template.title}</Text>
            <Text style={styles.muted}>{template.meta}</Text>
          </GlassCard>
        ))}
      </View>

      <SectionTitle eyebrow="Featured creators" title="Campaign-ready inspiration" />
      <View style={styles.creatorRow}>
        {creators.map((creator) => (
          <GlassCard key={creator.id} style={styles.creatorCard} contentStyle={styles.creatorContent}>
            <Image source={{ uri: creator.image }} style={styles.creatorAvatar} contentFit="cover" />
            <Text style={styles.creatorName}>{creator.name}</Text>
            <Text style={styles.muted}>{creator.handle}</Text>
            <Text style={styles.creatorStat}>{creator.stat}</Text>
          </GlassCard>
        ))}
      </View>

      <SectionTitle eyebrow="Recent work" title="Continue editing" action="Open gallery" />
      <View style={styles.projectList}>
        {demoProjects.slice(0, 3).map((project) => (
          <GlassCard key={project.id} style={[styles.projectCard, { width: projectWidth }]} contentStyle={styles.projectContent}>
            <Image source={{ uri: project.coverUrl }} style={styles.projectImage} contentFit="cover" />
            <View style={styles.projectCopy}>
              <Text style={styles.cardTitle}>{project.title}</Text>
              <Text style={styles.muted}>{project.kind.toUpperCase()} · {project.format} · {project.updatedAt}</Text>
            </View>
            <Text style={styles.status}>{project.status}</Text>
          </GlassCard>
        ))}
      </View>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.x2, marginBottom: spacing.x2 },
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  greeting: { ...typography.bodyStrong, color: colors.white, marginTop: 4 },
  demoPill: { borderRadius: radii.pill, backgroundColor: colors.glassStrong, borderWidth: 1, borderColor: colors.glassBorder, paddingHorizontal: 18, paddingVertical: 10 },
  demoText: { ...typography.bodyStrong, color: colors.white },
  hero: { minHeight: 430, borderRadius: radii.xl, overflow: 'hidden', padding: spacing.x3, borderWidth: 1, borderColor: colors.glassBorder },
  heroCopy: { zIndex: 2, maxWidth: 620 },
  heroTitle: { ...typography.display, color: colors.white, maxWidth: 620 },
  heroTitleTiny: { fontSize: 38, lineHeight: 44 },
  heroSubtitle: { ...typography.body, color: colors.textMuted, maxWidth: 560, marginTop: spacing.x2 },
  heroActions: { flexDirection: 'row', gap: spacing.x2, marginTop: spacing.x3, flexWrap: 'wrap' },
  heroActionsStack: { flexDirection: 'column' },
  heroButton: { minWidth: 156 },
  heroArtWrap: { position: 'absolute', right: -18, bottom: -16, width: 245, height: 310 },
  heroArtMain: { position: 'absolute', right: 18, bottom: 0, width: 176, height: 270, borderRadius: 34, borderWidth: 1, borderColor: colors.glassBorder },
  heroArtFloating: { position: 'absolute', left: 0, bottom: 78, width: 108, height: 150, borderRadius: 28, borderWidth: 1, borderColor: colors.glassBorder },
  horizontalList: { gap: spacing.x2, paddingRight: spacing.x3 },
  effectTile: { width: 190, height: 224, borderRadius: radii.xl, padding: spacing.x3, justifyContent: 'space-between', overflow: 'hidden' },
  effectIcon: { fontSize: 34 },
  effectTitle: { ...typography.section, color: colors.white },
  effectSubtitle: { ...typography.body, color: 'rgba(255,255,255,0.76)', marginTop: 4 },
  templateGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2 },
  templateCard: { flexBasis: '47%', flexGrow: 1, minWidth: 150 },
  templateCardTablet: { flexBasis: '23%' },
  templateContent: { padding: 12 },
  templateImage: { height: 150, borderRadius: 20, marginBottom: 14 },
  templateBadge: { position: 'absolute', top: 22, right: 22, borderRadius: radii.pill, paddingHorizontal: 10, paddingVertical: 5 },
  templateBadgeText: { ...typography.caption, color: colors.white, fontFamily: 'Inter_600SemiBold' },
  cardTitle: { ...typography.bodyStrong, color: colors.white },
  muted: { ...typography.caption, color: colors.textMuted, marginTop: 5 },
  creatorRow: { flexDirection: 'row', gap: spacing.x2, flexWrap: 'wrap' },
  creatorCard: { flexGrow: 1, flexBasis: 150 },
  creatorContent: { alignItems: 'center', padding: spacing.x2 },
  creatorAvatar: { width: 76, height: 76, borderRadius: 38, marginBottom: 12 },
  creatorName: { ...typography.bodyStrong, color: colors.white, textAlign: 'center' },
  creatorStat: { ...typography.caption, color: colors.champagne, marginTop: 10 },
  projectList: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2 },
  projectCard: { minWidth: 280 },
  projectContent: { flexDirection: 'row', alignItems: 'center', gap: spacing.x2 },
  projectImage: { width: 76, height: 94, borderRadius: 20 },
  projectCopy: { flex: 1 },
  status: { ...typography.caption, color: colors.white, overflow: 'hidden', borderRadius: radii.pill, backgroundColor: 'rgba(255,77,141,0.22)', paddingHorizontal: 10, paddingVertical: 6, textTransform: 'capitalize' },
});
