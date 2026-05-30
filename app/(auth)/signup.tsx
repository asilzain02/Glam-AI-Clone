import { router } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';

export default function Signup() {
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Claim your creator pass</Text><GlamCard className="mt-8"><View className="gap-4"><TextInput placeholder="Name" placeholderTextColor="#ffffff80" className="rounded-2xl bg-white/10 px-4 py-4 text-white" /><TextInput placeholder="Email" placeholderTextColor="#ffffff80" className="rounded-2xl bg-white/10 px-4 py-4 text-white" /><TextInput secureTextEntry placeholder="Password" placeholderTextColor="#ffffff80" className="rounded-2xl bg-white/10 px-4 py-4 text-white" /><GlamButton title="Create studio" onPress={() => router.replace('/(tabs)')} /></View></GlamCard></GlamScaffold>;
}
