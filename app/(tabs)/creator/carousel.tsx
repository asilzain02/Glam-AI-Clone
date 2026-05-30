import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { colors } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { demoImages } from '@/data/demoContent';

export default function CarouselCreator() {
  return <PremiumScaffold><Text style={styles.kicker}>CAROUSEL CREATOR</Text><Text style={styles.title}>Editorial 4:5 launch pack</Text><Text style={styles.subtitle}>Generate cover, transformation, tips, social proof, and CTA slides in one polished carousel.</Text><ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.slideRow}>{demoImages.slice(0,5).map((uri,index)=><GlassCard key={uri} style={styles.slideCard} contentStyle={styles.slideContent}><Image source={{uri}} style={styles.image} contentFit="cover"/><Text style={styles.slideNumber}>Slide {index+1}</Text><Text style={styles.slideTitle}>{['Cover','Before / After','Glow Tips','Template','CTA'][index]}</Text></GlassCard>)}</ScrollView><View style={styles.actions}><GradientButton title="Export Carousel" style={styles.button}/><GradientButton title="Regenerate Copy" variant="ghost" style={styles.button}/></View></PremiumScaffold>;
}
const styles=StyleSheet.create({kicker:{...typography.caption,color:colors.pink,letterSpacing:1.8},title:{...typography.title,color:colors.white,marginTop:8},subtitle:{...typography.body,color:colors.textMuted,marginTop:8},slideRow:{gap:spacing.x2,paddingTop:spacing.x3,paddingRight:spacing.x3},slideCard:{width:300},slideContent:{padding:10},image:{height:390,borderRadius:radii.lg,marginBottom:12},slideNumber:{...typography.caption,color:colors.pink,letterSpacing:1.2},slideTitle:{...typography.section,color:colors.white,marginTop:4},actions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.x2,marginTop:spacing.x3},button:{flexGrow:1,minWidth:150}});
