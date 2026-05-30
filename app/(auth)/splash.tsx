import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamScaffold } from '@/components/GlamScaffold';

export default function Splash() {
  return <GlamScaffold scroll={false}><View className="flex-1 justify-between py-8"><View><Text className="text-6xl font-black text-white">Glam AI</Text><Text className="mt-4 text-xl text-white/70">Photo & video edits that look like a luxury campaign.</Text></View><View className="gap-3"><GlamButton title="Start creating" onPress={() => router.push('/(auth)/onboarding')} /><GlamButton title="Open demo mode" variant="ghost" onPress={() => router.replace('/demo')} /></View></View></GlamScaffold>;
}
