import { Platform, ViewStyle } from 'react-native';

const webShadow = (boxShadow: string) => ({ boxShadow } as ViewStyle);

export const shadows = {
  glowPink: Platform.select<ViewStyle>({
    web: webShadow('0 24px 70px rgba(255,77,141,0.28)'),
    default: { shadowColor: '#FF4D8D', shadowOpacity: 0.35, shadowRadius: 24, shadowOffset: { width: 0, height: 16 }, elevation: 14 },
  }),
  glowPurple: Platform.select<ViewStyle>({
    web: webShadow('0 28px 80px rgba(139,92,246,0.28)'),
    default: { shadowColor: '#8B5CF6', shadowOpacity: 0.32, shadowRadius: 28, shadowOffset: { width: 0, height: 18 }, elevation: 16 },
  }),
  card: Platform.select<ViewStyle>({
    web: webShadow('0 20px 60px rgba(0,0,0,0.42)'),
    default: { shadowColor: '#000000', shadowOpacity: 0.36, shadowRadius: 22, shadowOffset: { width: 0, height: 14 }, elevation: 10 },
  }),
} as const;
