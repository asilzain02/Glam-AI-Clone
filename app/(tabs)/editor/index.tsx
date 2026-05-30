import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';

export default function EditorHub() {
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Editor</Text><View className="mt-6 gap-4"><GlamCard><Text className="text-3xl">📸</Text><Text className="mt-3 text-2xl font-bold text-white">Photo Editor</Text><Text className="my-3 text-white/65">Upload, beauty filters, face retouch, skin smooth, teeth whitening, background replace, object removal.</Text><GlamButton title="Edit photo" onPress={() => router.push('/(tabs)/editor/photo')} /></GlamCard><GlamCard><Text className="text-3xl">🎬</Text><Text className="mt-3 text-2xl font-bold text-white">Video Editor</Text><Text className="my-3 text-white/65">Trim, split, layer effects, filters, music, captions, export.</Text><GlamButton title="Edit video" onPress={() => router.push('/(tabs)/editor/video')} /></GlamCard></View></GlamScaffold>;
}
