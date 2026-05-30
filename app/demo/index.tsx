import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { EffectCard } from '@/components/EffectCard';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { SectionHeader } from '@/components/SectionHeader';
import { demoImages, demoProjects, effects } from '@/data/demoContent';

export default function DemoMode() {
  return <GlamScaffold><Text className="text-5xl font-black text-white">Screenshot Studio</Text><Text className="mt-3 text-lg text-white/70">Premium sample images, videos, and finished edits are preloaded for contest screenshots and Loom recording.</Text><View className="mt-6 flex-row gap-3"><GlamButton title="Open App" onPress={() => router.replace('/(tabs)')} /><GlamButton title="Photo Editor" variant="ghost" onPress={() => router.push('/(tabs)/editor/photo')} /></View><SectionHeader title="Hero Screenshots" /><ScrollView horizontal showsHorizontalScrollIndicator={false}>{demoImages.map((uri, i) => <GlamCard key={uri} className="mr-4 w-72"><Image source={{ uri }} className="h-96 rounded-[30px]" contentFit="cover" /><Text className="mt-3 text-xl font-bold text-white">Finished Edit #{i + 1}</Text><Text className="text-white/60">AI beauty + luxury filter + social export</Text></GlamCard>)}</ScrollView><SectionHeader title="Effects For Screenshots" /><ScrollView horizontal showsHorizontalScrollIndicator={false}>{effects.map((effect) => <EffectCard key={effect.id} effect={effect} />)}</ScrollView><SectionHeader title="Seeded Projects" />{demoProjects.map((project) => <Text key={project.id} className="mb-2 rounded-2xl bg-white/10 p-4 text-white">{project.title} · {project.kind} · {project.status}</Text>)}</GlamScaffold>;
}
