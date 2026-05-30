import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

type TabIconProps = {
  icon: string;
  label: string;
  focused: boolean;
};

function TabIcon({ icon, label, focused }: TabIconProps) {
  return (
    <View style={[styles.tabItem, focused && styles.tabItemActive]}>
      <Text style={styles.tabIcon}>{icon}</Text>
      <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>{label}</Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FF4D8D',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.45)',
        tabBarShowLabel: false,
        tabBarBackground: () => <View style={styles.tabBarBg} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="✦" label="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="editor"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="✏" label="Editor" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="creator"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.createBtn}>
              <Text style={styles.createIcon}>＋</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="◫" label="Gallery" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="◉" label="Profile" focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(10,8,20,0.92)',
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 12,
    paddingBottom: 0,
  },
  tabBarBg: {
    position: 'absolute',
    inset: 0,
    borderRadius: 36,
    backgroundColor: 'rgba(10,8,20,0.90)',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 2,
    minWidth: 52,
  },
  tabItemActive: {
    backgroundColor: 'rgba(255,77,141,0.15)',
  },
  tabIcon: { fontSize: 18, color: 'rgba(255,255,255,0.55)' },
  tabLabel: {
    fontSize: 9,
    fontFamily: 'Inter_400Regular',
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: 0.3,
  },
  tabLabelActive: {
    color: '#FF4D8D',
    fontFamily: 'Inter_600SemiBold',
  },
  createBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF4D8D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF4D8D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 4,
  },
  createIcon: { fontSize: 24, color: '#fff', lineHeight: 28 },
});

