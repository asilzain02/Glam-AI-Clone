import { HomeScreen } from '@/screens/HomeScreen';
export default HomeScreen;
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { EffectCard } from '@/components/EffectCard';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { SectionHeader } from '@/components/SectionHeader';
import { demoImages, effects } from '@/data/demoContent';

export default function Dashboard() {
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Create a viral glow-up</Text><Text className="mt-2 text-white/65">AI photo, video, carousel, and reel tools for social-first creators.</Text><GlamCard className="mt-6"><View className="flex-row gap-4"><Image source={{ uri: demoImages[0] }} className="h-44 w-32 rounded-[28px]" contentFit="cover" /><View className="flex-1 justify-center"><Text className="text-2xl font-bold text-white">Contest screenshot mode ready</Text><Text className="my-4 text-white/65">Open premium sample edits instantly.</Text><GlamButton title="Open /demo" onPress={() => router.push('/demo')} /></View></View></GlamCard><SectionHeader title="Trending AI Effects" action="See all" /><ScrollView horizontal showsHorizontalScrollIndicator={false}>{effects.map((effect) => <EffectCard key={effect.id} effect={effect} />)}</ScrollView><SectionHeader title="Featured Filters" /><View className="flex-row flex-wrap gap-3">{['Anime','Barbie','Cinematic','Fashion','Luxury','Magazine Cover'].map((x) => <Text key={x} className="rounded-full bg-white/10 px-4 py-3 font-semibold text-white">{x}</Text>)}</View></GlamScaffold>;
}
