import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { GlamCard } from '@/components/GlamCard';
import { colors } from '@/constants/theme';
import { GlamProject } from '@/types';

const STATUS_COLORS: Record<string, string> = {
  completed: colors.success,
  processing: colors.amber,
  queued: colors.textMuted,
  failed: colors.error,
};

export function ProjectCard({ project }: { project: GlamProject }) {
  return (
    <GlamCard style={styles.wrapper}>
      <View style={styles.row}>
        <Image
          source={{ uri: project.coverUrl }}
          style={styles.thumb}
          contentFit="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={2}>{project.title}</Text>
          <Text style={styles.meta}>{project.kind.toUpperCase()} · {project.format}</Text>
          <Text style={styles.date}>{project.updatedAt}</Text>
          <View style={[styles.badge, { backgroundColor: STATUS_COLORS[project.status] + '33' }]}>
            <View style={[styles.dot, { backgroundColor: STATUS_COLORS[project.status] }]} />
            <Text style={[styles.badgeText, { color: STATUS_COLORS[project.status] }]}>
              {project.status}
            </Text>
          </View>
        </View>
      </View>
    </GlamCard>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 12 },
  row: { flexDirection: 'row', gap: 14, alignItems: 'center' },
  thumb: {
    width: 88,
    height: 100,
    borderRadius: 18,
  },
  info: { flex: 1, gap: 4, justifyContent: 'center' },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    lineHeight: 20,
  },
  meta: {
    fontSize: 11,
    fontFamily: 'Inter_600SemiBold',
    color: 'rgba(255,255,255,0.50)',
    letterSpacing: 0.5,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: 'rgba(255,255,255,0.45)',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    gap: 5,
    marginTop: 4,
  },
  dot: { width: 6, height: 6, borderRadius: 3 },
  badgeText: {
    fontSize: 11,
    fontFamily: 'Inter_600SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
});

