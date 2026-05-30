// ─── Color System ───────────────────────────────────────────────────────────
export const colors = {
  // Base
  obsidian: '#000000',
  midnight: '#0F172A',
  navy: '#0A0F1E',
  pearl: '#FFFFFF',

  // Brand
  glamPink: '#FF4D8D',
  glamPinkDark: '#D63875',
  glamPinkLight: '#FF80B0',
  royalViolet: '#8B5CF6',
  royalVioletDark: '#6D28D9',

  // Accent
  champagne: '#F9E7C8',
  mint: '#6EE7B7',
  amber: '#FBBF24',

  // Glass / Surface
  glass: 'rgba(255,255,255,0.10)',
  glassBorder: 'rgba(255,255,255,0.18)',
  glassDark: 'rgba(0,0,0,0.40)',
  surface: 'rgba(255,255,255,0.06)',
  surfaceHigh: 'rgba(255,255,255,0.12)',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255,255,255,0.65)',
  textMuted: 'rgba(255,255,255,0.40)',

  // Status
  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
} as const;

// ─── Gradients ───────────────────────────────────────────────────────────────
export const gradients = {
  hero: ['#000000', '#0A0F1E', '#1A0A2E'] as const,
  heroCard: ['#0F172A', '#1E1040'] as const,
  glam: ['#FF4D8D', '#8B5CF6'] as const,
  glamReverse: ['#8B5CF6', '#FF4D8D'] as const,
  gold: ['#FFF7AD', '#FFA9F9', '#8B5CF6'] as const,
  darkGlass: ['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.04)'] as const,
  pinkFire: ['#FF4D8D', '#D63875'] as const,
  violetNight: ['#8B5CF6', '#4C1D95'] as const,
  animeRose: ['#FF9A9E', '#FAD0C4'] as const,
  cyber: ['#6EE7B7', '#8B5CF6'] as const,
  champagneGold: ['#F9E7C8', '#FBBF24'] as const,
  filmNoir: ['#F9E7C8', '#8B5CF6'] as const,
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

// ─── Border Radii ────────────────────────────────────────────────────────────
export const radii = {
  sm: 12,
  md: 20,
  lg: 28,
  xl: 36,
  xxl: 44,
  pill: 999,
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────
export const typography = {
  display: { fontFamily: 'Poppins_700Bold', fontSize: 52, lineHeight: 58 },
  hero: { fontFamily: 'Poppins_700Bold', fontSize: 40, lineHeight: 46 },
  title: { fontFamily: 'Poppins_700Bold', fontSize: 28, lineHeight: 34 },
  heading: { fontFamily: 'Poppins_700Bold', fontSize: 22, lineHeight: 28 },
  subtitle: { fontFamily: 'Inter_600SemiBold', fontSize: 17, lineHeight: 24 },
  body: { fontFamily: 'Inter_400Regular', fontSize: 15, lineHeight: 22 },
  small: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 18 },
  caption: { fontFamily: 'Inter_400Regular', fontSize: 11, lineHeight: 15 },
  label: { fontFamily: 'Inter_600SemiBold', fontSize: 12, lineHeight: 16 },
} as const;

// ─── Shadows ─────────────────────────────────────────────────────────────────
export const shadows = {
  pink: {
    shadowColor: colors.glamPink,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10,
  },
  violet: {
    shadowColor: colors.royalViolet,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  glow: {
    shadowColor: colors.glamPink,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 12,
  },
} as const;

