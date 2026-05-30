import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ReactNode } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, gradients } from '@/constants/theme';

type GlamScaffoldProps = {
  children: ReactNode;
  scroll?: boolean;
  title?: string;
  showBack?: boolean;
  headerRight?: ReactNode;
  noPadding?: boolean;
};

export function GlamScaffold({
  children,
  scroll = true,
  title,
  showBack = false,
  headerRight,
  noPadding = false,
}: GlamScaffoldProps) {
  const content = (
    <View style={[styles.content, noPadding && styles.contentNoPadding]}>
      {children}
    </View>
  );

  return (
    <LinearGradient colors={gradients.hero} style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        {(title || showBack || headerRight) && (
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              {showBack && (
                <Pressable
                  onPress={() => router.back()}
                  style={styles.backButton}
                  hitSlop={12}
                >
                  <Text style={styles.backIcon}>←</Text>
                </Pressable>
              )}
              {title && <Text style={styles.headerTitle}>{title}</Text>}
            </View>
            {headerRight && <View>{headerRight}</View>}
          </View>
        )}
        {scroll ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {content}
          </ScrollView>
        ) : (
          content
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  backIcon: { color: '#fff', fontSize: 20, fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto' },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 12,
  },
  contentNoPadding: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

