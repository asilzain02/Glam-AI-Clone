import { GalleryScreen } from '@/screens/GalleryScreen';
export default GalleryScreen;
import { Text } from 'react-native';
import { GlamScaffold } from '@/components/GlamScaffold';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { demoProjects } from '@/data/demoContent';

export default function Gallery() {
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Gallery</Text><SectionHeader title="History" />{demoProjects.map((project) => <ProjectCard key={project.id} project={project} />)}<SectionHeader title="Saved Projects" /><Text className="text-white/70">Synced to Supabase projects and storage buckets.</Text><SectionHeader title="Exports" /><Text className="text-white/70">Latest 9:16 reels, 4:5 carousels, and edited photos.</Text></GlamScaffold>;
}
