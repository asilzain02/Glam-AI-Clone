import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { StatCard } from '@/components/StatCard';
import { colors, gradients } from '@/constants/theme';
import { demoAccount, demoImages } from '@/data/demoContent';

const SETTINGS = [
  { icon: '⚙️', label: 'Settings', desc: 'App preferences, notifications' },
  { icon: '💳', label: 'Subscription', desc: 'Glam Pro · Manage plan' },
  { icon: '📊', label: 'Usage Logs', desc: 'AI credits & generation history' },
  { icon: '🔒', label: 'Privacy', desc: 'Data & permissions' },
  { icon: '❓', label: 'Help & Support', desc: 'FAQ, contact us' },
  { icon: '⭐', label: 'Rate Glam AI', desc: 'App Store review' },
] as const;

export default function Profile() {
  return (
    <GlamScaffold>
      {/* ── Header ── */}
      <Text style={styles.screenTitle}>Profile</Text>

      {/* ── Avatar & Identity ── */}
      <View style={styles.avatarSection}>
        <LinearGradient colors={gradients.glam} style={styles.avatarRing}>
          <Image
            source={{ uri: demoImages[0] }}
            style={styles.avatar}
            contentFit="cover"
          />
        </LinearGradient>
        <View style={styles.identity}>
          <Text style={styles.username}>{demoAccount.username}</Text>
          <Text style={styles.email}>{demoAccount.email}</Text>
          <View style={styles.proBadge}>
            <Text style={styles.proBadgeText}>⭐ {demoAccount.plan}</Text>
          </View>
        </View>
      </View>

      {/* ── Stats Row ── */}
      <View style={styles.statsRow}>
        <StatCard value={String(demoAccount.totalEdits)} label="Edits" highlight />
        <StatCard value={String(demoAccount.totalReels)} label="Reels" />
        <StatCard value={String(demoAccount.credits)} label="Credits" />
      </View>

      {/* ── Pro Subscription Card ── */}
      <LinearGradient
        colors={gradients.glam}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.proCard}
      >
        <View style={styles.proCardRow}>
          <View>
            <Text style={styles.proCardLabel}>CURRENT PLAN</Text>
            <Text style={styles.proCardTitle}>Glam Pro</Text>
            <Text style={styles.proCardSub}>{demoAccount.credits} AI Credits · Renews June 1</Text>
          </View>
          <Text style={styles.proCardIcon}>👑</Text>
        </View>
        <View style={styles.proPerks}>
          {['Unlimited beauty filters', 'AI reel generator', 'Priority processing', '4K export'].map((perk) => (
            <Text key={perk} style={styles.perk}>✓  {perk}</Text>
          ))}
        </View>
      </LinearGradient>

      {/* ── Settings List ── */}
      <View style={styles.settingsSection}>
        <Text style={styles.settingsTitle}>Account</Text>
        <View style={styles.settingsList}>
          {SETTINGS.map((item) => (
            <Pressable
              key={item.label}
              style={({ pressed }) => [styles.settingsItem, pressed && styles.pressed]}
            >
              <Text style={styles.settingsIcon}>{item.icon}</Text>
              <View style={styles.settingsText}>
                <Text style={styles.settingsLabel}>{item.label}</Text>
                <Text style={styles.settingsDesc}>{item.desc}</Text>
              </View>
              <Text style={styles.settingsChevron}>›</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* ── Upgrade CTA ── */}
      <View style={styles.upgradeCTA}>
        <GlamButton title="Upgrade to Enterprise" fullWidth size="lg" />
        <Text style={styles.upgradeNote}>Unlimited credits · Team collaboration · API access</Text>
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    color: '#fff',
    marginBottom: 24,
    paddingTop: 4,
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 24,
  },
  avatarRing: {
    width: 84,
    height: 84,
    borderRadius: 42,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: '#0A0F1E',
  },
  identity: { flex: 1, gap: 4 },
  username: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    color: '#fff',
  },
  email: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.55)',
  },
  proBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,77,141,0.20)',
    borderWidth: 1,
    borderColor: 'rgba(255,77,141,0.45)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 4,
  },
  proBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: colors.glamPink,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  proCard: {
    borderRadius: 28,
    padding: 22,
    marginBottom: 28,
    gap: 16,
  },
  proCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  proCardLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    color: 'rgba(255,255,255,0.70)',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  proCardTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 26,
    color: '#fff',
    lineHeight: 32,
  },
  proCardSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },
  proCardIcon: { fontSize: 36 },
  proPerks: { gap: 6 },
  perk: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.88)',
  },
  settingsSection: { gap: 14 },
  settingsTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#fff',
  },
  settingsList: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  settingsIcon: { fontSize: 20, width: 28, textAlign: 'center' },
  settingsText: { flex: 1, gap: 2 },
  settingsLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#fff',
  },
  settingsDesc: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.45)',
  },
  settingsChevron: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.35)',
    fontFamily: 'Inter_400Regular',
  },
  pressed: { backgroundColor: 'rgba(255,255,255,0.04)' },
  upgradeCTA: { marginTop: 32, gap: 12, alignItems: 'center' },
  upgradeNote: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.40)',
    textAlign: 'center',
  },
});

