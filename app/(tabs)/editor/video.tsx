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
import Slider from '@react-native-community/slider';
import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { SectionHeader } from '@/components/SectionHeader';
import { demoImages } from '@/data/demoContent';
import { buildFfmpegCommand, splitClip, TimelineClip } from '@/services/video';

export default function VideoEditor() {
  const [trim, setTrim] = useState(7);
  const clips: TimelineClip[] = useMemo(() => [{ id: 'clip1', uri: 'demo-reel.mp4', start: 0, end: trim, layer: 0 }], [trim]);
  const command = buildFfmpegCommand(clips, 'reel');
  const split = splitClip(clips[0], Math.max(1, trim / 2));
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Video Editor</Text><Image source={{ uri: demoImages[1] }} className="mt-5 h-[420px] rounded-[36px]" contentFit="cover" /><SectionHeader title="Timeline" /><GlamCard><View className="h-16 flex-row items-center gap-2">{split.map((clip) => <View key={clip.id} className="h-10 flex-1 rounded-2xl bg-pink-400/70" />)}</View><Text className="text-white/70">Trim: {trim.toFixed(1)}s · 9:16 Reel</Text><Slider minimumValue={3} maximumValue={15} value={trim} onValueChange={setTrim} minimumTrackTintColor="#FF4D8D" /></GlamCard><View className="mt-4 flex-row flex-wrap gap-3">{['Trim','Split','Layer Effects','Filters','Music','Captions','Export'].map((tool) => <Text key={tool} className="rounded-full bg-white/10 px-4 py-3 text-white">{tool}</Text>)}</View><SectionHeader title="FFmpeg Export Plan" /><Text className="rounded-3xl bg-black/35 p-4 text-xs text-white/70">{command}</Text><View className="mt-5"><GlamButton title="Export Reel" /></View></GlamScaffold>;
}
