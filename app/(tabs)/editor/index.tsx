import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { colors } from '@/constants/theme';

export default function EditorHub() {
  return (
    <GlamScaffold>
      <View style={styles.header}>
        <Text style={styles.title}>Creator Studio</Text>
        <Text style={styles.subtitle}>Select a toolkit to start your next masterpiece.</Text>
      </View>

      <View style={styles.grid}>
        <GlamCard style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📸</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>POPULAR</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Photo Editor</Text>
          <Text style={styles.cardDesc}>
            AI Beauty, Retouching, BG removal, and Object erasing tools.
          </Text>
          <GlamButton 
            title="Open Photo Studio" 
            fullWidth 
            onPress={() => router.push('/(tabs)/editor/photo')} 
          />
        </GlamCard>

        <GlamCard style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(139,92,246,0.1)' }]}>
              <Text style={styles.icon}>🎬</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Video Editor</Text>
          <Text style={styles.cardDesc}>
            Trim, split, filter, and export high-quality 9:16 reels.
          </Text>
          <GlamButton 
            title="Open Video Studio" 
            fullWidth 
            variant="ghost" 
            onPress={() => router.push('/(tabs)/editor/video')} 
          />
        </GlamCard>

        <GlamCard style={[styles.card, styles.disabledCard]}>
          <View style={styles.cardHeader}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(110,231,183,0.1)' }]}>
              <Text style={styles.icon}>🎨</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: 'rgba(110,231,183,0.2)', borderColor: 'rgba(110,231,183,0.4)' }]}>
              <Text style={[styles.badgeText, { color: '#6EE7B7' }]}>SOON</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Style Transfer</Text>
          <Text style={styles.cardDesc}>
            Neural style transfer to turn images into artistic masterpieces.
          </Text>
        </GlamCard>
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  header: { gap: 8, marginTop: 12, marginBottom: 32 },
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  grid: { gap: 20 },
  card: { padding: 20, gap: 16 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: 'rgba(255,77,141,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  icon: { fontSize: 32 },
  badge: {
    backgroundColor: 'rgba(255,77,141,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,77,141,0.4)',
  },
  badgeText: {
    color: colors.glamPink,
    fontSize: 10,
    fontFamily: 'Inter_600SemiBold',
    letterSpacing: 1,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
  },
  cardDesc: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    lineHeight: 20,
  },
  disabledCard: { opacity: 0.6 },
});

