import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { colors } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { demoImages } from '@/data/demoContent';

export default function StoryCreator() {
  return <PremiumScaffold><Text style={styles.kicker}>STORY CREATOR</Text><Text style={styles.title}>New glow era story</Text><Text style={styles.subtitle}>Compose a high-contrast 9:16 reveal with cinematic typography and social-safe framing.</Text><GlassCard style={styles.card} contentStyle={styles.content}><Image source={{ uri: demoImages[2] }} style={styles.image} contentFit="cover" /><LinearGradient colors={['transparent','rgba(0,0,0,0.78)']} style={styles.overlay}><Text style={styles.poster}>NEW{`\n`}GLOW{`\n`}ERA</Text></LinearGradient></GlassCard><View style={styles.actions}><GradientButton title="Export 9:16 Story" style={styles.button} /><GradientButton title="Add Caption" variant="ghost" style={styles.button} /></View></PremiumScaffold>;
}
const styles = StyleSheet.create({ kicker:{...typography.caption,color:colors.pink,letterSpacing:1.8}, title:{...typography.title,color:colors.white,marginTop:8}, subtitle:{...typography.body,color:colors.textMuted,marginTop:8}, card:{marginTop:spacing.x3}, content:{padding:12}, image:{height:600,borderRadius:radii.lg}, overlay:{position:'absolute',left:12,right:12,bottom:12,minHeight:260,justifyContent:'flex-end',padding:spacing.x3,borderBottomLeftRadius:radii.lg,borderBottomRightRadius:radii.lg}, poster:{...typography.display,color:colors.white,letterSpacing:-1}, actions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.x2,marginTop:spacing.x3}, button:{flexGrow:1,minWidth:150} });
import { Text } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamScaffold } from '@/components/GlamScaffold';
import { demoImages } from '@/data/demoContent';
export default function StoryCreator() { return <GlamScaffold><Text className="text-4xl font-extrabold text-white">Story Creator</Text><Image source={{ uri: demoImages[2] }} className="mt-5 h-[560px] rounded-[40px]" contentFit="cover" /><Text className="-mt-28 px-8 text-5xl font-black text-white">NEW GLOW ERA</Text><GlamButton title="Export 9:16 Story" /></GlamScaffold>; }
