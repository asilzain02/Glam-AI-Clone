import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gradients } from '@/constants/colors';
import { useResponsive } from '@/hooks/useResponsive';

export function PremiumScaffold({ children, scroll = true }: { children: ReactNode; scroll?: boolean }) {
  const { contentWidth, horizontalPadding } = useResponsive();
  const inner = (
    <View style={[styles.content, { maxWidth: contentWidth, paddingHorizontal: horizontalPadding }]}>
      {children}
    </View>
  );

  return (
    <LinearGradient colors={gradients.app} style={styles.root}>
      <View style={styles.orbPink} />
      <View style={styles.orbPurple} />
      <SafeAreaView style={styles.safe}>
        {scroll ? (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {inner}
          </ScrollView>
        ) : inner}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  content: { alignSelf: 'center', width: '100%', paddingTop: 16, paddingBottom: 112 },
  scrollContent: { flexGrow: 1 },
  orbPink: { position: 'absolute', top: -120, right: -80, width: 260, height: 260, borderRadius: 130, backgroundColor: 'rgba(255,77,141,0.28)' },
  orbPurple: { position: 'absolute', top: 180, left: -110, width: 230, height: 230, borderRadius: 115, backgroundColor: 'rgba(139,92,246,0.20)' },
});
