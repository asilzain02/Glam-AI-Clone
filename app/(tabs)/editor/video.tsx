import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { colors, gradients } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { demoImages } from '@/data/demoContent';

const tracks = ['Intro', 'Beauty', 'Zoom', 'Caption', 'Beat Cut', 'Export'] as const;

export default function VideoEditor() {
  return (
    <PremiumScaffold>
      <Text style={styles.kicker}>VIDEO EDITOR</Text>
      <Text style={styles.title}>Reel generator timeline</Text>
      <Text style={styles.subtitle}>Trim, split, add effects, music, captions, and export vertical content for Story or Reel.</Text>

      <GlassCard style={styles.previewCard} contentStyle={styles.previewContent}>
        <Image source={{ uri: demoImages[5] }} style={styles.previewImage} contentFit="cover" transition={250} />
        <LinearGradient colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.72)']} style={styles.previewOverlay}>
          <Text style={styles.previewTitle}>Runway Reveal Reel</Text>
          <Text style={styles.subtitle}>9:16 · 8 seconds · captions + beat cuts</Text>
        </LinearGradient>
      </GlassCard>

      <GlassCard contentStyle={styles.timelineContent}>
        <View style={styles.timelineHeader}><Text style={styles.panelTitle}>Timeline</Text><Text style={styles.timecode}>00:00 / 00:08</Text></View>
        <View style={styles.timeline}>{tracks.map((track, index) => <LinearGradient key={track} colors={index % 2 ? gradients.violetGlass : gradients.glam} style={[styles.segment, { flex: index === 1 ? 1.4 : 1 }]}><Text style={styles.segmentText}>{track}</Text></LinearGradient>)}</View>
        <View style={styles.toolRow}>{['Trim', 'Split', 'Effects', 'Music', 'Captions', 'Export'].map((tool) => <Text key={tool} style={styles.toolChip}>{tool}</Text>)}</View>
      </GlassCard>

      <View style={styles.actions}><GradientButton title="Generate Reel" style={styles.actionButton} /><GradientButton title="Export 9:16" variant="ghost" style={styles.actionButton} /></View>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  title: { ...typography.title, color: colors.white, marginTop: 8 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: 8 },
  previewCard: { marginTop: spacing.x3 },
  previewContent: { padding: 12 },
  previewImage: { height: 540, borderRadius: radii.lg },
  previewOverlay: { position: 'absolute', left: 12, right: 12, bottom: 12, minHeight: 170, justifyContent: 'flex-end', padding: spacing.x3, borderBottomLeftRadius: radii.lg, borderBottomRightRadius: radii.lg },
  previewTitle: { ...typography.section, color: colors.white },
  timelineContent: { padding: spacing.x3 },
  timelineHeader: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.x2, alignItems: 'center' },
  panelTitle: { ...typography.section, color: colors.white },
  timecode: { ...typography.caption, color: colors.textMuted },
  timeline: { height: 86, flexDirection: 'row', gap: 8, marginTop: spacing.x3 },
  segment: { minWidth: 54, borderRadius: radii.md, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 },
  segmentText: { ...typography.caption, color: colors.white, textAlign: 'center' },
  toolRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: spacing.x3 },
  toolChip: { ...typography.bodyStrong, color: colors.white, overflow: 'hidden', borderRadius: radii.pill, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: colors.strokeSubtle, paddingHorizontal: 16, paddingVertical: 12 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2, marginTop: spacing.x3 },
  actionButton: { flexGrow: 1, minWidth: 150 },
});
