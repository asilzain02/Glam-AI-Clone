import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export function useResponsive() {
  const { width, height } = useWindowDimensions();
  return useMemo(() => {
    const isTiny = width < 360;
    const isPhone = width < 768;
    const isTablet = width >= 768;
    const isDesktop = width >= 1024;
    const contentWidth = Math.min(width, isDesktop ? 1120 : isTablet ? 900 : width);
    const horizontalPadding = isTiny ? 16 : isPhone ? 24 : 32;
    const columns = isDesktop ? 4 : isTablet ? 3 : width >= 390 ? 2 : 1;
    return { width, height, isTiny, isPhone, isTablet, isDesktop, contentWidth, horizontalPadding, columns };
  }, [height, width]);
}
