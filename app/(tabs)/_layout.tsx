import { Tabs } from 'expo-router';
export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#050507', borderTopColor: 'rgba(255,255,255,0.12)' }, tabBarActiveTintColor: '#FF4D8D', tabBarInactiveTintColor: '#FFFFFF80' }}>
    <Tabs.Screen name="index" options={{ title: 'Home' }} />
    <Tabs.Screen name="editor" options={{ title: 'Editor' }} />
    <Tabs.Screen name="creator" options={{ title: 'Create' }} />
    <Tabs.Screen name="gallery" options={{ title: 'Gallery' }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
  </Tabs>;
}
