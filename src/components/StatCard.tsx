import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/theme';

type StatCardProps = {
  value: string;
  label: string;
  icon?: string;
  highlight?: boolean;
};

export function StatCard({ value, label, icon, highlight = false }: StatCardProps) {
  return (
    <View style={[styles.card, highlight && styles.highlight]}>
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text style={[styles.value, highlight && styles.valueHighlight]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    paddingVertical: 20,
    paddingHorizontal: 14,
    alignItems: 'center',
    gap: 4,
  },
  highlight: {
    backgroundColor: 'rgba(255,77,141,0.12)',
    borderColor: 'rgba(255,77,141,0.35)',
  },
  icon: { fontSize: 22 },
  value: {
    fontSize: 26,
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    lineHeight: 32,
  },
  valueHighlight: { color: colors.glamPink },
  label: {
    fontSize: 11,
    fontFamily: 'Inter_400Regular',
    color: 'rgba(255,255,255,0.50)',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
