import { Image } from 'expo-image';
import { ScrollView, Text } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamScaffold } from '@/components/GlamScaffold';
import { demoImages } from '@/data/demoContent';
export default function CarouselCreator() { return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Carousel Creator</Text><ScrollView horizontal className="mt-5" showsHorizontalScrollIndicator={false}>{demoImages.map((uri, i) => <Image key={uri} source={{ uri }} className="mr-4 h-[420px] w-80 rounded-[36px]" contentFit="cover" />)}</ScrollView><Text className="my-5 text-white/70">4:5 launch pack with cover, tips, before/after, and CTA slides.</Text><GlamButton title="Export Carousel" /></GlamScaffold>; }
