import { CreatorScreen } from '@/screens/CreatorScreen';
export default CreatorScreen;
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';

export default function CreatorTools() {
  const tools = [{ title: 'Story Creator', route: '/(tabs)/creator/story', icon: '📱' }, { title: 'Carousel Creator', route: '/(tabs)/creator/carousel', icon: '🖼️' }, { title: 'Reel Creator', route: '/(tabs)/creator/reel', icon: '🎞️' }];
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Creator Tools</Text><View className="mt-6 gap-4">{tools.map((tool) => <GlamCard key={tool.title}><Text className="text-4xl">{tool.icon}</Text><Text className="mt-3 text-2xl font-bold text-white">{tool.title}</Text><Text className="my-3 text-white/65">Auto-compose social-native layouts with premium captions and AI styling.</Text><GlamButton title={`Open ${tool.title}`} onPress={() => router.push(tool.route as never)} /></GlamCard>)}</View></GlamScaffold>;
}
