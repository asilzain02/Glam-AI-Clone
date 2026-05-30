import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gradients } from '@/constants/theme';

export function GlamScaffold({ children, scroll = true }: { children: ReactNode; scroll?: boolean }) {
  const content = <View className="px-5 pb-10 pt-4">{children}</View>;
  return (
    <LinearGradient colors={gradients.hero} className="flex-1">
      <SafeAreaView className="flex-1">
        {scroll ? <ScrollView showsVerticalScrollIndicator={false}>{content}</ScrollView> : content}
      </SafeAreaView>
    </LinearGradient>
  );
}
