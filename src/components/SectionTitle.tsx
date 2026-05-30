import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

function SectionTitleComponent({ title, action, eyebrow }: { title: string; action?: string; eyebrow?: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.copy}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {action ? <Text style={styles.action}>{action}</Text> : null}
    </View>
  );
}

export const SectionTitle = memo(SectionTitleComponent);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginTop: 32, marginBottom: 16 },
  copy: { flex: 1 },
  eyebrow: { ...typography.caption, color: colors.pink, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 },
  title: { ...typography.section, color: colors.white },
  action: { ...typography.bodyStrong, color: colors.pink },
});
