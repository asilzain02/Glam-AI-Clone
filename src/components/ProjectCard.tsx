import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { GlamCard } from '@/components/GlamCard';
import { GlamProject } from '@/types';

export function ProjectCard({ project }: { project: GlamProject }) {
  return (
    <GlamCard className="mb-4">
      <View className="flex-row gap-4">
        <Image source={{ uri: project.coverUrl }} className="h-24 w-20 rounded-3xl" contentFit="cover" />
        <View className="flex-1 justify-center">
          <Text className="text-lg font-bold text-white">{project.title}</Text>
          <Text className="mt-1 text-sm capitalize text-white/60">{project.kind} · {project.format} · {project.updatedAt}</Text>
          <Text className="mt-3 self-start rounded-full bg-white/15 px-3 py-1 text-xs uppercase text-white">{project.status}</Text>
        </View>
      </View>
    </GlamCard>
  );
}
