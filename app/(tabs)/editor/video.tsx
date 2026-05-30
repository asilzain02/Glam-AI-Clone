import Slider from '@react-native-community/slider';
import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { SectionHeader } from '@/components/SectionHeader';
import { demoImages } from '@/data/demoContent';
import { buildFfmpegCommand, splitClip, TimelineClip } from '@/services/video';

export default function VideoEditor() {
  const [trim, setTrim] = useState(7);
  const clips: TimelineClip[] = useMemo(() => [{ id: 'clip1', uri: 'demo-reel.mp4', start: 0, end: trim, layer: 0 }], [trim]);
  const command = buildFfmpegCommand(clips, 'reel');
  const split = splitClip(clips[0], Math.max(1, trim / 2));
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Video Editor</Text><Image source={{ uri: demoImages[1] }} className="mt-5 h-[420px] rounded-[36px]" contentFit="cover" /><SectionHeader title="Timeline" /><GlamCard><View className="h-16 flex-row items-center gap-2">{split.map((clip) => <View key={clip.id} className="h-10 flex-1 rounded-2xl bg-pink-400/70" />)}</View><Text className="text-white/70">Trim: {trim.toFixed(1)}s · 9:16 Reel</Text><Slider minimumValue={3} maximumValue={15} value={trim} onValueChange={setTrim} minimumTrackTintColor="#FF4D8D" /></GlamCard><View className="mt-4 flex-row flex-wrap gap-3">{['Trim','Split','Layer Effects','Filters','Music','Captions','Export'].map((tool) => <Text key={tool} className="rounded-full bg-white/10 px-4 py-3 text-white">{tool}</Text>)}</View><SectionHeader title="FFmpeg Export Plan" /><Text className="rounded-3xl bg-black/35 p-4 text-xs text-white/70">{command}</Text><View className="mt-5"><GlamButton title="Export Reel" /></View></GlamScaffold>;
}
