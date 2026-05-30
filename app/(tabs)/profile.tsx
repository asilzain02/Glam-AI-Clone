import { ProfileScreen } from '@/screens/ProfileScreen';
export default ProfileScreen;
import { Text, View } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { demoAccount } from '@/data/demoContent';

export default function Profile() {
  return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Profile</Text><GlamCard className="mt-6"><Text className="text-2xl font-bold text-white">Demo Creator</Text><Text className="mt-1 text-white/60">{demoAccount.email}</Text><Text className="mt-5 rounded-full bg-pink-500/25 px-4 py-2 text-center font-bold text-pink-100">Glam Pro · 500 AI credits</Text></GlamCard><View className="mt-5 gap-3">{['Settings','Subscription','Usage Logs','Privacy','Help'].map((item) => <GlamCard key={item}><Text className="text-lg font-bold text-white">{item}</Text></GlamCard>)}</View><View className="mt-6"><GlamButton title="Upgrade Subscription" /></View></GlamScaffold>;
}
