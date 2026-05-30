import { Inter_400Regular, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { queryClient } from '@/lib/queryClient';
import '@/styles/global.css';

export default function RootLayout() {
  const [loaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Poppins_700Bold });
  if (!loaded) return <View className="flex-1 items-center justify-center bg-black"><ActivityIndicator color="#FF4D8D" /></View>;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }} />
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
