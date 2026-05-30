export const fontFamilies = {
  interRegular: 'Inter_400Regular',
  interSemiBold: 'Inter_600SemiBold',
  poppinsBold: 'Poppins_700Bold',
} as const;

export const typography = {
  display: { fontFamily: fontFamilies.poppinsBold, fontSize: 48, lineHeight: 54 },
  hero: { fontFamily: fontFamilies.poppinsBold, fontSize: 40, lineHeight: 46 },
  title: { fontFamily: fontFamilies.poppinsBold, fontSize: 30, lineHeight: 36 },
  section: { fontFamily: fontFamilies.poppinsBold, fontSize: 22, lineHeight: 28 },
  bodyStrong: { fontFamily: fontFamilies.interSemiBold, fontSize: 16, lineHeight: 24 },
  body: { fontFamily: fontFamilies.interRegular, fontSize: 15, lineHeight: 23 },
  caption: { fontFamily: fontFamilies.interRegular, fontSize: 12, lineHeight: 16 },
} as const;
