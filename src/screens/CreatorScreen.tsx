import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { SectionTitle } from '@/components/SectionTitle';
import { colors } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { templates } from '@/data/demoContent';

const tools = [
  { title: 'Story Creator', route: '/(tabs)/creator/story', icon: '⚡', copy: '9:16 story scenes with bold typography and reveal animations.' },
  { title: 'Carousel Creator', route: '/(tabs)/creator/carousel', icon: '▱', copy: '4:5 educational carousel packs with cover, steps, and CTA slides.' },
  { title: 'Reel Creator', route: '/(tabs)/creator/reel', icon: '♪', copy: 'Beat-synced vertical reels with zooms, captions, and transitions.' },
] as const;

export function CreatorScreen() {
  return (
    <PremiumScaffold>
      <Text style={styles.kicker}>CREATOR TOOLS</Text>
      <Text style={styles.title}>Compose social-native campaigns</Text>
      <Text style={styles.subtitle}>Launch a story, carousel, or reel from premium templates tuned for viral beauty content.</Text>
      <View style={styles.toolGrid}>{tools.map((tool) => <GlassCard key={tool.title} style={styles.toolCard} contentStyle={styles.toolContent}><Text style={styles.icon}>{tool.icon}</Text><Text style={styles.cardTitle}>{tool.title}</Text><Text style={styles.subtitle}>{tool.copy}</Text><GradientButton title={`Open ${tool.title}`} onPress={() => router.push(tool.route as never)} style={styles.button} /></GlassCard>)}</View>
      <SectionTitle eyebrow="Templates" title="Creator-ready packs" />
      <View style={styles.templateRow}>{templates.map((template) => <GlassCard key={template.id} style={styles.templateCard} contentStyle={styles.templateContent}><Image source={{ uri: template.image }} style={styles.templateImage} contentFit="cover" /><Text style={styles.cardTitle}>{template.title}</Text><Text style={styles.meta}>{template.meta}</Text></GlassCard>)}</View>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  title: { ...typography.title, color: colors.white, marginTop: 8 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: 8 },
  toolGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2, marginTop: spacing.x3 },
  toolCard: { flexGrow: 1, flexBasis: 240 },
  toolContent: { padding: spacing.x3 },
  icon: { fontSize: 36, marginBottom: 16 },
  cardTitle: { ...typography.section, color: colors.white },
  button: { marginTop: spacing.x3 },
  templateRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2 },
  templateCard: { flexGrow: 1, flexBasis: 150 },
  templateContent: { padding: 10 },
  templateImage: { height: 190, borderRadius: radii.lg, marginBottom: 12 },
  meta: { ...typography.caption, color: colors.textMuted, marginTop: 4 },
});
