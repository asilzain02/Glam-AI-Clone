import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { EffectCard } from '@/components/EffectCard';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { SectionHeader } from '@/components/SectionHeader';
import { demoImages, effects } from '@/data/demoContent';
import { applyAIFilter, enhanceBeauty, removeBackground, removeObject } from '@/services/ai';

export default function PhotoEditor() {
  const [asset, setAsset] = useState(demoImages[0]);
  const [logs, setLogs] = useState<string[]>([]);
  async function pick() { const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 1 }); if (!result.canceled) setAsset(result.assets[0].uri); }
  async function run(kind: string) { const request = { imageUri: asset, effectId: kind, prompt: `${kind} luxury beauty edit` }; const result = kind === 'Beauty' ? await enhanceBeauty(request) : kind === 'Background Replace' ? await removeBackground(request) : kind === 'Object Removal' ? await removeObject(request) : await applyAIFilter(request); setAsset(result.outputUrl); setLogs(result.logs); }
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Photo Editor</Text><Image source={{ uri: asset }} className="mt-5 h-[440px] rounded-[36px]" contentFit="cover" /><View className="mt-4 flex-row gap-3"><GlamButton title="Upload" onPress={pick} /><GlamButton title="Export" variant="ghost" /></View><SectionHeader title="Beauty Tools" /><ScrollView horizontal showsHorizontalScrollIndicator={false}>{effects.filter(e => e.category !== 'video').map((effect) => <EffectCard key={effect.id} effect={effect} />)}</ScrollView>{['Beauty','Face Retouch','Skin Smooth','Teeth Whitening','Background Replace','Object Removal'].map((tool) => <GlamCard key={tool} className="mt-3" onPress={() => run(tool)}><Text className="text-lg font-bold text-white">{tool}</Text></GlamCard>)}<SectionHeader title="AI Logs" />{logs.map((log) => <Text key={log} className="text-white/70">• {log}</Text>)}</GlamScaffold>;
}
