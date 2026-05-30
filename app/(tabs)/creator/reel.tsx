import { Image } from 'expo-image';
import { useState } from 'react';
import { Text } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamScaffold } from '@/components/GlamScaffold';
import { demoImages } from '@/data/demoContent';
import { generateAIReel } from '@/services/ai';
export default function ReelCreator() { const [log, setLog] = useState('Ready to generate beat-synced reel.'); return <GlamScaffold><Text className="text-4xl font-extrabold text-white">AI Reel Generator</Text><Image source={{ uri: demoImages[3] }} className="mt-5 h-[520px] rounded-[40px]" contentFit="cover" /><Text className="my-4 text-white/70">Transitions · Zoom effects · Music · Captions</Text><GlamButton title="Generate Reel" onPress={async () => setLog((await generateAIReel(demoImages)).logs.join('\n'))} /><Text className="mt-5 rounded-3xl bg-black/30 p-4 text-white/70">{log}</Text></GlamScaffold>; }
