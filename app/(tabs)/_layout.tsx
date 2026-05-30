import { Tabs } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { radii } from '@/constants/spacing';
import { shadows } from '@/constants/shadows';

const icons: Record<string, string> = { index: '✦', editor: '✧', creator: '◈', gallery: '▣', profile: '◉' };

function TabIcon({ routeName, focused }: { routeName: string; focused: boolean }) {
  return (
    <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
      <Text style={[styles.icon, focused && styles.iconActive]}>{icons[routeName] ?? '•'}</Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.48)',
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
        tabBarIcon: ({ focused }) => <TabIcon routeName={route.name} focused={focused} />,
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="editor" options={{ title: 'Editor' }} />
      <Tabs.Screen name="creator" options={{ title: 'Create' }} />
      <Tabs.Screen name="gallery" options={{ title: 'Gallery' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: Platform.select({ ios: 18, default: 14 }),
    height: 76,
    paddingTop: 10,
    paddingBottom: Platform.select({ ios: 14, default: 10 }),
    borderRadius: radii.xl,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    backgroundColor: 'rgba(9,9,14,0.86)',
    ...(shadows.card ?? {}),
  },
  tabItem: { paddingVertical: 4 },
  label: { fontSize: 11, fontFamily: 'Inter_600SemiBold', marginTop: 2 },
  iconWrap: { width: 34, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  iconWrapActive: { backgroundColor: 'rgba(255,77,141,0.24)' },
  icon: { color: 'rgba(255,255,255,0.56)', fontSize: 16 },
  iconActive: { color: colors.white },
});
