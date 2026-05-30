import { Image } from 'expo-image';
import { Text } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamScaffold } from '@/components/GlamScaffold';
import { demoImages } from '@/data/demoContent';
export default function StoryCreator() { return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Story Creator</Text><Image source={{ uri: demoImages[2] }} className="mt-5 h-[560px] rounded-[40px]" contentFit="cover" /><Text className="-mt-28 px-8 text-5xl font-black text-white">NEW GLOW ERA</Text><GlamButton title="Export 9:16 Story" /></GlamScaffold>; }
