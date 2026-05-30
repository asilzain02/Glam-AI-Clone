import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { SectionTitle } from '@/components/SectionTitle';
import { colors } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { demoProjects } from '@/data/demoContent';
import { useResponsive } from '@/hooks/useResponsive';

export function GalleryScreen() {
  const { isTablet } = useResponsive();
  const columns = isTablet ? [demoProjects.filter((_, index) => index % 3 === 0), demoProjects.filter((_, index) => index % 3 === 1), demoProjects.filter((_, index) => index % 3 === 2)] : [demoProjects.filter((_, index) => index % 2 === 0), demoProjects.filter((_, index) => index % 2 === 1)];

  return (
    <PremiumScaffold>
      <Text style={styles.kicker}>GALLERY</Text>
      <Text style={styles.title}>Your AI content vault</Text>
      <Text style={styles.subtitle}>Recent projects, saved favorites, and final exports arranged for fast review.</Text>

      <View style={styles.statsRow}>
        {[
          ['Recent', '24'],
          ['Favorites', '12'],
          ['Exports', '38'],
        ].map(([label, value]) => <GlassCard key={label} style={styles.statCard} contentStyle={styles.statContent}><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></GlassCard>)}
      </View>

      <SectionTitle eyebrow="Pinterest style" title="Recent edits" action="Filter" />
      <View style={styles.masonryRow}>
        {columns.map((column, columnIndex) => (
          <View key={columnIndex} style={styles.masonryColumn}>
            {column.map((project, index) => (
              <GlassCard key={project.id} style={styles.projectCard} contentStyle={styles.projectContent}>
                <Image source={{ uri: project.coverUrl }} style={[styles.projectImage, { height: 210 + ((index + columnIndex) % 2) * 72 }]} contentFit="cover" transition={250} />
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectMeta}>{project.kind} · {project.format} · {project.updatedAt}</Text>
              </GlassCard>
            ))}
          </View>
        ))}
      </View>

      <SectionTitle eyebrow="Empty states" title="Beautiful states for new creators" />
      <GlassCard contentStyle={styles.emptyState}>
        <Text style={styles.emptyIcon}>🪩</Text>
        <Text style={styles.projectTitle}>No archived exports yet</Text>
        <Text style={styles.subtitle}>Finished videos and downloaded edits appear here after export.</Text>
      </GlassCard>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  title: { ...typography.title, color: colors.white, marginTop: 8 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: 8 },
  statsRow: { flexDirection: 'row', gap: spacing.x2, marginTop: spacing.x3, flexWrap: 'wrap' },
  statCard: { flexGrow: 1, flexBasis: 96 },
  statContent: { padding: spacing.x2, alignItems: 'center' },
  statValue: { ...typography.title, color: colors.white },
  statLabel: { ...typography.caption, color: colors.textMuted, marginTop: 2 },
  masonryRow: { flexDirection: 'row', gap: spacing.x2, alignItems: 'flex-start' },
  masonryColumn: { flex: 1, gap: spacing.x2 },
  projectCard: {},
  projectContent: { padding: 10 },
  projectImage: { borderRadius: radii.lg, marginBottom: 12 },
  projectTitle: { ...typography.bodyStrong, color: colors.white },
  projectMeta: { ...typography.caption, color: colors.textMuted, marginTop: 5, textTransform: 'capitalize' },
  emptyState: { alignItems: 'center', padding: spacing.x4 },
  emptyIcon: { fontSize: 42, marginBottom: 12 },
});
