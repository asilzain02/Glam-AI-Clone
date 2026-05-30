import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { colors, gradients } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';
import { typography } from '@/constants/typography';
import { demoAccount, demoImages } from '@/data/demoContent';

export function ProfileScreen() {
  return (
    <PremiumScaffold>
      <LinearGradient colors={gradients.hero} style={[styles.profileHero, shadows.glowPurple]}>
        <Image source={{ uri: demoImages[3] }} style={styles.avatar} contentFit="cover" />
        <View style={styles.profileCopy}>
          <Text style={styles.kicker}>CREATOR PROFILE</Text>
          <Text style={styles.name}>Demo Creator</Text>
          <Text style={styles.email}>{demoAccount.email}</Text>
        </View>
      </LinearGradient>

      <View style={styles.usageRow}>
        {[
          ['AI Credits', String(demoAccount.credits)],
          ['Exports', '38'],
          ['Storage', '8.4GB'],
        ].map(([label, value]) => <GlassCard key={label} style={styles.usageCard} contentStyle={styles.usageContent}><Text style={styles.usageValue}>{value}</Text><Text style={styles.usageLabel}>{label}</Text></GlassCard>)}
      </View>

      <GlassCard style={styles.subscription} contentStyle={styles.subscriptionContent}>
        <View style={styles.subCopy}><Text style={styles.subTitle}>{demoAccount.plan}</Text><Text style={styles.email}>Unlimited mock generations, premium templates, and export presets.</Text></View>
        <GradientButton title="Manage" style={styles.manageButton} />
      </GlassCard>

      <View style={styles.settingsList}>
        {['Settings', 'Subscription', 'AI Usage Logs', 'About Glam AI', 'Help & Support'].map((item) => (
          <GlassCard key={item} contentStyle={styles.settingRow}>
            <Text style={styles.settingText}>{item}</Text><Text style={styles.chevron}>›</Text>
          </GlassCard>
        ))}
      </View>
    </PremiumScaffold>
  );
}

const styles = StyleSheet.create({
  profileHero: { minHeight: 230, borderRadius: radii.xl, padding: spacing.x3, flexDirection: 'row', alignItems: 'flex-end', gap: spacing.x2, borderWidth: 1, borderColor: colors.glassBorder, overflow: 'hidden' },
  avatar: { width: 96, height: 96, borderRadius: 48, borderWidth: 2, borderColor: colors.white },
  profileCopy: { flex: 1 },
  kicker: { ...typography.caption, color: colors.pink, letterSpacing: 1.8 },
  name: { ...typography.title, color: colors.white, marginTop: 8 },
  email: { ...typography.body, color: colors.textMuted, marginTop: 6 },
  usageRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.x2, marginTop: spacing.x3 },
  usageCard: { flexGrow: 1, flexBasis: 110 },
  usageContent: { padding: spacing.x2, alignItems: 'center' },
  usageValue: { ...typography.section, color: colors.white },
  usageLabel: { ...typography.caption, color: colors.textMuted, marginTop: 4 },
  subscription: { marginTop: spacing.x3 },
  subscriptionContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.x2, padding: spacing.x3 },
  subCopy: { flex: 1 },
  subTitle: { ...typography.section, color: colors.white },
  manageButton: { minWidth: 116 },
  settingsList: { gap: spacing.x2, marginTop: spacing.x3 },
  settingRow: { padding: spacing.x2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  settingText: { ...typography.bodyStrong, color: colors.white },
  chevron: { ...typography.section, color: colors.textMuted },
});
