export { colors, gradients } from './colors';
export { radii, spacing } from './spacing';
export { fontFamilies, typography } from './typography';
export { shadows } from './shadows';
export const colors = {
  obsidian: '#000000',
  midnight: '#0F172A',
  pearl: '#FFFFFF',
  glamPink: '#FF4D8D',
  royalViolet: '#8B5CF6',
  champagne: '#F9E7C8',
  mint: '#6EE7B7',
  glass: 'rgba(255,255,255,0.12)',
  glassBorder: 'rgba(255,255,255,0.22)'
} as const;

export const gradients = {
  hero: [colors.obsidian, colors.midnight, colors.royalViolet] as const,
  glam: [colors.glamPink, colors.royalViolet] as const,
  gold: ['#FFF7AD', '#FFA9F9', '#8B5CF6'] as const,
  darkGlass: ['rgba(255,255,255,0.16)', 'rgba(255,255,255,0.04)'] as const
} as const;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 } as const;
export const radii = { sm: 12, md: 20, lg: 28, xl: 36, pill: 999 } as const;
export const typography = {
  hero: { fontFamily: 'Poppins_700Bold', fontSize: 44, lineHeight: 50 },
  title: { fontFamily: 'Poppins_700Bold', fontSize: 28, lineHeight: 34 },
  subtitle: { fontFamily: 'Inter_600SemiBold', fontSize: 18, lineHeight: 24 },
  body: { fontFamily: 'Inter_400Regular', fontSize: 15, lineHeight: 22 },
  caption: { fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 16 }
} as const;
