import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { colors, gradients } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { demoImages, effects } from '@/data/demoContent';
import { runBeautyEnhancement } from '@/services/ai';

const photoTools = ['Beauty', 'Retouch', 'Skin Smooth', 'Teeth', 'Background', 'Erase'] as const;

export default function PhotoEditor() {
  const [active, setActive] = useState('Beauty');
  const [logs, setLogs] = useState<string[]>(['Ready for AI beauty enhancement.']);

  async function runEdit() {
    const result = await runBeautyEnhancement({ imageUri: demoImages[0], effectId: 'beauty-pro', prompt: effects[0].prompt, strength: 0.82 });
    setLogs(result.logs);
  }

  return (
    <PremiumScaffold>
      <Text style={styles.kicker}>PHOTO EDITOR</Text>
      <Text style={styles.title}>Luxury portrait workflow</Text>
      <Text style={styles.subtitle}>Upload, retouch, replace backgrounds, erase distractions, and export social-ready images.</Text>

      <GlassCard style={styles.canvasCard} contentStyle={styles.canvasContent}>
        <Image source={{ uri: demoImages[0] }} style={styles.canvasImage} contentFit="cover" transition={250} />
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.72)']} style={styles.canvasOverlay}>
          <Text style={styles.canvasTitle}>Beauty Pro · Editorial Glow</Text>
          <Text style={styles.canvasMeta}>Face enhancement · Skin smoothing · Eye light</Text>
        </LinearGradient>
      </GlassCard>

      <View style={styles.toolsGrid}>
        {photoTools.map((tool) => (
          <Pressable key={tool} onPress={() => setActive(tool)} style={[styles.tool, active === tool && styles.toolActive]}>
            <Text style={[styles.toolText, active === tool && styles.toolTextActive]}>{tool}</Text>
          </Pressable>
        ))}
      </View>

      <GlassCard contentStyle={styles.panelContent}>
        <Text style={styles.panelTitle}>{active} settings</Text>
        <Text style={styles.subtitle}>Fine-tune strength, texture preservation, identity safety, and export quality.</Text>
        <View style={styles.slider}><LinearGradient colors={gradients.glam} style={styles.sliderFill} /></View>
        <View style={styles.actions}><GradientButton title="Run AI Edit" onPress={runEdit} style={styles.actionButton} /><GradientButton title="Export 4:5" variant="ghost" style={styles.actionButton} /></View>
      </GlassCard>

      <GlassCard contentStyle={styles.panelContent}>
        <Text style={styles.panelTitle}>AI Logs</Text>
        {logs.map((log) => <Text key={log} style={styles.logLine}>• {log}</Text>)}
      </GlassCard>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  title: { ...typography.title, color: colors.white, marginTop: 8 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: 8 },
  canvasCard: { marginTop: spacing.x3 },
  canvasContent: { padding: 12 },
  canvasImage: { height: 520, borderRadius: radii.lg },
  canvasOverlay: { position: 'absolute', left: 12, right: 12, bottom: 12, borderBottomLeftRadius: radii.lg, borderBottomRightRadius: radii.lg, padding: spacing.x3, minHeight: 150, justifyContent: 'flex-end' },
  canvasTitle: { ...typography.section, color: colors.white },
  canvasMeta: { ...typography.body, color: colors.textMuted, marginTop: 6 },
  toolsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2, marginVertical: spacing.x3 },
  tool: { flexGrow: 1, minWidth: 105, alignItems: 'center', borderRadius: radii.lg, borderWidth: 1, borderColor: colors.strokeSubtle, backgroundColor: 'rgba(255,255,255,0.07)', paddingVertical: 16, paddingHorizontal: 14 },
  toolActive: { borderColor: colors.pink, backgroundColor: 'rgba(255,77,141,0.20)' },
  toolText: { ...typography.bodyStrong, color: colors.textMuted },
  toolTextActive: { color: colors.white },
  panelContent: { padding: spacing.x3 },
  panelTitle: { ...typography.section, color: colors.white },
  slider: { height: 12, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.10)', overflow: 'hidden', marginTop: spacing.x3 },
  sliderFill: { width: '78%', height: '100%', borderRadius: 6 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2, marginTop: spacing.x3 },
  actionButton: { flexGrow: 1, minWidth: 150 },
  logLine: { ...typography.body, color: colors.textMuted, marginTop: 10 },
});
