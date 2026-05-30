import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';

const slides = ['Beauty retouch powered by OpenAI + Replicate', 'Remove backgrounds and objects in seconds', 'Turn photos into viral 9:16 reels'];
export default function Onboarding() {
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Your AI creator studio</Text>{slides.map((slide, index) => <GlamCard key={slide} className="mt-5"><Text className="text-5xl">{['💄','🪄','🎞️'][index]}</Text><Text className="mt-4 text-xl font-bold text-white">{slide}</Text></GlamCard>)}<View className="mt-8 gap-3"><GlamButton title="Create account" onPress={() => router.push('/(auth)/signup')} /><GlamButton title="I already have an account" variant="ghost" onPress={() => router.push('/(auth)/login')} /></View></GlamScaffold>;
}
