import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
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
import { ToolButton } from '@/components/ToolButton';
import { colors, gradients } from '@/constants/theme';
import { demoImages, effects } from '@/data/demoContent';
import { applyAIFilter, enhanceBeauty, removeBackground, removeObject } from '@/services/ai';

const TOOLS = [
  { id: 'beauty', icon: '✨', label: 'Beauty', gradient: gradients.glam },
  { id: 'retouch', icon: '🪄', label: 'Retouch', gradient: gradients.glam },
  { id: 'background', icon: '🏙️', label: 'BG Remove', gradient: gradients.cyber },
  { id: 'erase', icon: '⬛', label: 'Erase', gradient: gradients.cyber },
  { id: 'anime', icon: '🌸', label: 'Anime', gradient: gradients.animeRose },
  { id: 'barbie', icon: '💖', label: 'Barbie', gradient: gradients.pinkFire },
  { id: 'cinematic', icon: '🎬', label: 'Film', gradient: gradients.filmNoir },
] as const;

type ToolId = typeof TOOLS[number]['id'];

export default function PhotoEditor() {
  const [asset, setAsset] = useState(demoImages[0]);
  const [logs, setLogs] = useState<string[]>([]);
  const [activeTool, setActiveTool] = useState<ToolId | null>(null);
  const [loading, setLoading] = useState(false);

  const pick = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) setAsset(result.assets[0].uri);
  }, []);

  const run = useCallback(async (toolId: ToolId) => {
    setActiveTool(toolId);
    setLoading(true);
    try {
      const request = { imageUri: asset, effectId: toolId, prompt: `${toolId} luxury beauty edit` };
      let result;
      if (toolId === 'beauty' || toolId === 'retouch') {
        result = await enhanceBeauty(request);
      } else if (toolId === 'background') {
        result = await removeBackground(request);
      } else if (toolId === 'erase') {
        result = await removeObject(request);
      } else {
        result = await applyAIFilter(request);
      }
      setAsset(result.outputUrl);
      setLogs(result.logs);
    } finally {
      setLoading(false);
    }
  }, [asset]);

  return (
    <GlamScaffold title="Photo Editor" showBack>
      {/* ── Preview ── */}
      <View style={styles.preview}>
        <Image source={{ uri: asset }} style={styles.previewImage} contentFit="cover" />
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={colors.glamPink} />
            <Text style={styles.loadingText}>Applying AI Effect…</Text>
          </View>
        )}
        {activeTool && !loading && (
          <View style={styles.toolBadge}>
            <Text style={styles.toolBadgeText}>✓ {activeTool.toUpperCase()}</Text>
          </View>
        )}
      </View>

      {/* ── Primary CTA Row ── */}
      <View style={styles.ctaRow}>
        <GlamButton title="📸 Upload" size="md" onPress={pick} />
        <GlamButton title="⬇ Export" size="md" variant="ghost" />
        <GlamButton title="↩ Reset" size="md" variant="ghost" onPress={() => { setAsset(demoImages[0]); setLogs([]); setActiveTool(null); }} />
      </View>

      {/* ── Tools Grid ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Beauty Tools</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.toolsRow}
        >
          {TOOLS.map((tool) => (
            <ToolButton
              key={tool.id}
              icon={tool.icon}
              label={tool.label}
              active={activeTool === tool.id}
              gradient={tool.gradient}
              onPress={() => run(tool.id)}
            />
          ))}
        </ScrollView>
      </View>

      {/* ── Effects Carousel ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI Filters</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.effectsRow}
        >
          {effects.filter((e) => e.category !== 'video').map((effect) => (
            <EffectCard
              key={effect.id}
              effect={effect}
              onPress={() => run(effect.id as ToolId)}
            />
          ))}
        </ScrollView>
      </View>

      {/* ── AI Logs ── */}
      {logs.length > 0 && (
        <GlamCard style={styles.logsCard}>
          <Text style={styles.logsTitle}>AI Processing Logs</Text>
          {logs.map((log) => (
            <Text key={log} style={styles.logLine}>▸ {log}</Text>
          ))}
        </GlamCard>
      )}
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  preview: {
    height: 400,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  previewImage: { width: '100%', height: '100%' },
  loadingOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  toolBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: 'rgba(255,77,141,0.85)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  toolBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: '#fff',
    letterSpacing: 0.8,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  section: { marginTop: 24, gap: 14 },
  sectionTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#fff',
  },
  toolsRow: { gap: 12, paddingRight: 20 },
  effectsRow: { paddingRight: 20 },
  logsCard: { marginTop: 24 },
  logsTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: 'rgba(255,255,255,0.60)',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  logLine: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 18,
    paddingVertical: 3,
  },
});

