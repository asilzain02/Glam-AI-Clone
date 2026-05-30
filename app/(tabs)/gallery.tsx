import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GlamScaffold } from '@/components/GlamScaffold';
import { ProjectCard } from '@/components/ProjectCard';
import { colors } from '@/constants/theme';
import { demoImages, demoProjects } from '@/data/demoContent';

const FILTER_TABS = ['All', 'Photos', 'Reels', 'Favorites'] as const;
type FilterTab = typeof FILTER_TABS[number];

function GridItem({ uri, index }: { uri: string; index: number }) {
  const isLarge = index % 5 === 0;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.gridItem,
        isLarge && styles.gridItemLarge,
        pressed && { opacity: 0.85 },
      ]}
    >
      <Image source={{ uri }} style={styles.gridImage} contentFit="cover" />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.65)']}
        style={styles.gridOverlay}
      >
        <Text style={styles.gridLabel}>{isLarge ? '⭐ Featured' : `Edit #${index + 1}`}</Text>
      </LinearGradient>
    </Pressable>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const switchTab = useCallback((tab: FilterTab) => setActiveTab(tab), []);

  const filteredProjects = demoProjects.filter((p) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Photos') return p.kind === 'photo';
    if (activeTab === 'Reels') return p.kind === 'reel';
    return false;
  });

  return (
    <GlamScaffold>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gallery</Text>
        <View style={styles.headerStats}>
          <Text style={styles.statText}>{demoProjects.length} projects</Text>
        </View>
      </View>

      {/* Filter Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsRow}
        style={styles.tabsScroll}
      >
        {FILTER_TABS.map((tab) => (
          <Pressable
            key={tab}
            onPress={() => switchTab(tab)}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Photo Grid */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Edits</Text>
        <View style={styles.photoGrid}>
          {demoImages.map((uri, i) => (
            <GridItem key={uri + i} uri={uri} index={i} />
          ))}
        </View>
      </View>

      {/* Projects List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {activeTab === 'All' ? 'All Projects' : activeTab}
        </Text>
        {filteredProjects.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🎨</Text>
            <Text style={styles.emptyTitle}>No {activeTab} yet</Text>
            <Text style={styles.emptyText}>Create your first edit to see it here.</Text>
          </View>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </View>

      {/* Exports Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exports</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.exportsRow}>
          {['9:16 Reel', '4:5 Post', '1:1 Grid', 'Story'].map((fmt) => (
            <View key={fmt} style={styles.exportChip}>
              <Text style={styles.exportText}>{fmt}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 4,
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    color: '#fff',
  },
  headerStats: {
    backgroundColor: colors.surface,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  statText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.60)',
  },
  tabsScroll: { marginBottom: 4 },
  tabsRow: { gap: 8, paddingRight: 20 },
  tab: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  tabActive: {
    backgroundColor: 'rgba(255,77,141,0.20)',
    borderColor: 'rgba(255,77,141,0.45)',
  },
  tabText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: 'rgba(255,255,255,0.55)',
  },
  tabTextActive: { color: colors.glamPink },

  section: { marginTop: 28, gap: 16 },
  sectionTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#fff',
  },

  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  gridItem: {
    width: '47.8%',
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
  },
  gridItemLarge: {
    width: '100%',
    height: 220,
  },
  gridImage: { width: '100%', height: '100%' },
  gridOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    justifyContent: 'flex-end',
    padding: 12,
  },
  gridLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#fff',
  },

  emptyState: { alignItems: 'center', paddingVertical: 40, gap: 8 },
  emptyIcon: { fontSize: 48 },
  emptyTitle: { fontFamily: 'Poppins_700Bold', fontSize: 18, color: '#fff' },
  emptyText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: 'rgba(255,255,255,0.50)',
    textAlign: 'center',
  },

  exportsRow: { gap: 10, paddingRight: 20 },
  exportChip: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  exportText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#fff',
  },
});

