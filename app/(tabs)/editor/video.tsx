import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { colors } from '@/constants/theme';
import { demoImages } from '@/data/demoContent';
import { buildFfmpegCommand, splitClip, TimelineClip } from '@/services/video';

const TOOLS = ['Trim', 'Split', 'Filter', 'Audio', 'Text', 'Speed', 'Export'];

export default function VideoEditor() {
  const [trim, setTrim] = useState(7);
  
  const clips: TimelineClip[] = useMemo(() => [
    { id: 'clip1', uri: 'demo-reel.mp4', start: 0, end: trim, layer: 0 }
  ], [trim]);

  const command = buildFfmpegCommand(clips, 'reel');
  const split = splitClip(clips[0], Math.max(1, trim / 2));

  return (
    <GlamScaffold title="Video Studio" showBack>
      <View style={styles.previewContainer}>
        <Image 
          source={{ uri: demoImages[1] }} 
          style={styles.preview} 
          contentFit="cover" 
        />
        <View style={styles.previewBadge}>
          <Text style={styles.previewBadgeText}>9:16 HD</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Timeline Control</Text>
        <GlamCard style={styles.timelineCard}>
          <View style={styles.timelineRows}>
            <View style={styles.timeMarkers}>
              {[0, 2, 4, 6, 8, 10].map(t => (
                <Text key={t} style={styles.markerText}>{t}s</Text>
              ))}
            </View>
            <View style={styles.track}>
              {split.map((clip, idx) => (
                <View 
                  key={clip.id} 
                  style={[
                    styles.clip, 
                    { flex: clip.end - clip.start, backgroundColor: idx === 0 ? colors.glamPink : colors.royalViolet }
                  ]} 
                />
              ))}
            </View>
          </View>
          <View style={styles.timelineFooter}>
            <Text style={styles.timelineStats}>
              Processing duration: <Text style={styles.highlight}>{trim.toFixed(1)}s</Text>
            </Text>
            <GlamButton title="Adjust" size="sm" variant="ghost" />
          </View>
        </GlamCard>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Video Tools</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.toolsRow}
        >
          {TOOLS.map((tool) => (
            <View key={tool} style={styles.toolChip}>
              <Text style={styles.toolLabel}>{tool}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Export Plan</Text>
        <View style={styles.commandBox}>
          <Text style={styles.commandText}>{command}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <GlamButton title="Generate AI Reel" fullWidth size="lg" />
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    height: 440,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  preview: { flex: 1 },
  previewBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  previewBadgeText: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'Inter_600SemiBold',
    letterSpacing: 1,
  },
  section: { marginTop: 28, gap: 14 },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
  timelineCard: { padding: 16, gap: 16 },
  timelineRows: { gap: 8 },
  timeMarkers: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 },
  markerText: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 10,
    fontFamily: 'Inter_400Regular',
  },
  track: {
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 4,
    gap: 4,
  },
  clip: {
    height: '100%',
    borderRadius: 8,
  },
  timelineFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
  },
  timelineStats: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
  },
  highlight: {
    color: colors.glamPink,
    fontFamily: 'Inter_600SemiBold',
  },
  toolsRow: { gap: 12, paddingRight: 20 },
  toolChip: {
    backgroundColor: colors.surface,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  toolLabel: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  commandBox: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  commandText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 11,
    fontFamily: 'monospace',
    lineHeight: 16,
  },
  footer: { marginTop: 40, marginBottom: 20 },
});

