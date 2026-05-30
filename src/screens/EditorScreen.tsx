import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { memo, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { SectionTitle } from '@/components/SectionTitle';
import { colors, gradients } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { typography } from '@/constants/typography';
import { demoImages } from '@/data/demoContent';
import { useResponsive } from '@/hooks/useResponsive';

const tools = [
  { id: 'beauty', label: 'Beauty', icon: '✨', detail: 'Skin smooth, eye light, natural lips', value: 82 },
  { id: 'retouch', label: 'Retouch', icon: '💎', detail: 'Face sculpt, shine control, teeth whitening', value: 68 },
  { id: 'background', label: 'Background', icon: '🏙️', detail: 'Remove and replace with studio sets', value: 76 },
  { id: 'erase', label: 'Erase', icon: '🪄', detail: 'Object cleanup with mask inpainting', value: 54 },
  { id: 'anime', label: 'Anime', icon: '🌸', detail: 'Stylized viral portrait mode', value: 61 },
  { id: 'barbie', label: 'Barbie', icon: '🎀', detail: 'Glossy pink dream campaign', value: 88 },
  { id: 'cinematic', label: 'Cinematic', icon: '🎬', detail: 'Film grade, bloom, grain and depth', value: 72 },
] as const;

const ToolPill = memo(function ToolPill({ item, active, onPress }: { item: (typeof tools)[number]; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.toolPill, active && styles.toolPillActive]}>
      <Text style={styles.toolIcon}>{item.icon}</Text>
      <Text style={[styles.toolLabel, active && styles.toolLabelActive]}>{item.label}</Text>
    </Pressable>
  );
});

export function EditorScreen() {
  const [activeTool, setActiveTool] = useState<(typeof tools)[number]['id']>('beauty');
  const { isTablet } = useResponsive();
  const selectedTool = useMemo(() => tools.find((tool) => tool.id === activeTool) ?? tools[0], [activeTool]);

  return (
    <PremiumScaffold>
      <View style={styles.headerRow}>
        <View style={styles.headerCopy}>
          <Text style={styles.kicker}>PRO EDITOR</Text>
          <Text style={styles.title}>Studio-grade AI retouching</Text>
          <Text style={styles.subtitle}>One workspace for beauty, retouch, background, erase, anime, Barbie, and cinematic exports.</Text>
        </View>
        <GradientButton title="Export" style={styles.exportButton} />
      </View>

      <View style={[styles.workspace, isTablet && styles.workspaceTablet]}>
        <GlassCard style={styles.previewCard} contentStyle={styles.previewContent}>
          <View style={styles.previewHeader}>
            <Text style={styles.previewTitle}>Live Preview</Text>
            <Text style={styles.previewBadge}>4:5 Editorial</Text>
          </View>
          <View style={styles.previewStage}>
            <Image source={{ uri: demoImages[1] }} style={styles.previewBefore} contentFit="cover" />
            <Image source={{ uri: demoImages[0] }} style={styles.previewAfter} contentFit="cover" />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.58)']} style={styles.previewOverlay}>
              <Text style={styles.previewOverlayText}>Before / After AI Glow</Text>
            </LinearGradient>
          </View>
          <View style={styles.quickActions}>
            <GradientButton title="Upload Photo" onPress={() => router.push('/(tabs)/editor/photo')} style={styles.quickButton} />
            <GradientButton title="Create Reel" variant="ghost" onPress={() => router.push('/(tabs)/editor/video')} style={styles.quickButton} />
          </View>
        </GlassCard>

        <View style={styles.panelColumn}>
          <GlassCard style={styles.toolPanel} contentStyle={styles.toolPanelContent}>
            <Text style={styles.panelTitle}>AI Tools</Text>
            <View style={styles.toolGrid}>
              {tools.map((tool) => <ToolPill key={tool.id} item={tool} active={tool.id === activeTool} onPress={() => setActiveTool(tool.id)} />)}
            </View>
          </GlassCard>

          <GlassCard style={styles.settingsPanel} contentStyle={styles.settingsContent}>
            <View style={styles.settingHeader}>
              <Text style={styles.selectedIcon}>{selectedTool.icon}</Text>
              <View style={styles.selectedCopy}>
                <Text style={styles.panelTitle}>{selectedTool.label}</Text>
                <Text style={styles.muted}>{selectedTool.detail}</Text>
              </View>
            </View>
            <View style={styles.sliderTrack}><LinearGradient colors={gradients.glam} style={[styles.sliderFill, { width: `${selectedTool.value}%` }]} /></View>
            <View style={styles.metricsRow}>
              {['Skin', 'Light', 'Depth'].map((metric, index) => (
                <View key={metric} style={styles.metricBox}>
                  <Text style={styles.metricValue}>{selectedTool.value - index * 7}%</Text>
                  <Text style={styles.muted}>{metric}</Text>
                </View>
              ))}
            </View>
          </GlassCard>
        </View>
      </View>

      <SectionTitle eyebrow="Output presets" title="Professional export formats" />
      <View style={styles.presetRow}>
        {['Story 9:16', 'Reel 9:16', 'Carousel 4:5', 'Profile 1:1'].map((preset) => (
          <GlassCard key={preset} style={styles.presetCard} contentStyle={styles.presetContent}>
            <Text style={styles.presetText}>{preset}</Text>
          </GlassCard>
        ))}
      </View>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: spacing.x2, flexWrap: 'wrap', marginBottom: spacing.x3 },
  headerCopy: { flex: 1, minWidth: 270 },
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  title: { ...typography.title, color: colors.white, marginTop: 8 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: 10, maxWidth: 620 },
  exportButton: { minWidth: 132 },
  workspace: { gap: spacing.x2 },
  workspaceTablet: { flexDirection: 'row', alignItems: 'stretch' },
  previewCard: { flex: 1.25 },
  previewContent: { padding: spacing.x2 },
  previewHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.x2, marginBottom: spacing.x2 },
  previewTitle: { ...typography.section, color: colors.white },
  previewBadge: { ...typography.caption, color: colors.white, backgroundColor: 'rgba(255,77,141,0.22)', overflow: 'hidden', borderRadius: radii.pill, paddingHorizontal: 10, paddingVertical: 6 },
  previewStage: { height: 440, borderRadius: radii.lg, overflow: 'hidden', backgroundColor: colors.slate900 },
  previewBefore: { position: 'absolute', left: 0, top: 0, width: '50%', height: '100%' },
  previewAfter: { position: 'absolute', right: 0, top: 0, width: '52%', height: '100%' },
  previewOverlay: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: spacing.x2, height: 108, justifyContent: 'flex-end' },
  previewOverlayText: { ...typography.bodyStrong, color: colors.white },
  quickActions: { flexDirection: 'row', gap: spacing.x2, flexWrap: 'wrap', marginTop: spacing.x2 },
  quickButton: { flexGrow: 1, minWidth: 150 },
  panelColumn: { flex: 0.75, gap: spacing.x2, minWidth: 280 },
  toolPanel: { flex: 1 },
  toolPanelContent: { padding: spacing.x2 },
  panelTitle: { ...typography.section, color: colors.white },
  toolGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: spacing.x2 },
  toolPill: { minWidth: 112, flexGrow: 1, borderRadius: radii.lg, borderWidth: 1, borderColor: colors.strokeSubtle, backgroundColor: 'rgba(255,255,255,0.06)', padding: 14 },
  toolPillActive: { borderColor: colors.pink, backgroundColor: 'rgba(255,77,141,0.18)' },
  toolIcon: { fontSize: 22, marginBottom: 8 },
  toolLabel: { ...typography.bodyStrong, color: colors.textMuted },
  toolLabelActive: { color: colors.white },
  settingsPanel: {},
  settingsContent: { padding: spacing.x2 },
  settingHeader: { flexDirection: 'row', gap: spacing.x2, alignItems: 'center' },
  selectedIcon: { fontSize: 34 },
  selectedCopy: { flex: 1 },
  muted: { ...typography.caption, color: colors.textMuted, marginTop: 5 },
  sliderTrack: { height: 12, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.10)', marginTop: spacing.x3, overflow: 'hidden' },
  sliderFill: { height: '100%', borderRadius: 6 },
  metricsRow: { flexDirection: 'row', gap: spacing.x2, marginTop: spacing.x2 },
  metricBox: { flex: 1, borderRadius: radii.md, backgroundColor: 'rgba(255,255,255,0.07)', padding: spacing.x2 },
  metricValue: { ...typography.bodyStrong, color: colors.white },
  presetRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2 },
  presetCard: { flexGrow: 1, flexBasis: 150 },
  presetContent: { padding: spacing.x2, alignItems: 'center' },
  presetText: { ...typography.bodyStrong, color: colors.white },
});
