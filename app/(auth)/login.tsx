import { router } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { demoAccount } from '@/data/demoContent';

export default function Login() {
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Welcome back</Text><GlamCard className="mt-8"><View className="gap-4"><TextInput defaultValue={demoAccount.email} placeholder="Email" placeholderTextColor="#ffffff80" className="rounded-2xl bg-white/10 px-4 py-4 text-white" /><TextInput defaultValue={demoAccount.password} secureTextEntry placeholder="Password" placeholderTextColor="#ffffff80" className="rounded-2xl bg-white/10 px-4 py-4 text-white" /><GlamButton title="Login to studio" onPress={() => router.replace('/(tabs)')} /></View></GlamCard></GlamScaffold>;
}
