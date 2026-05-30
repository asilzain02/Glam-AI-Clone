import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlassCard } from '@/components/GlassCard';
import { GradientButton } from '@/components/GradientButton';
import { PremiumScaffold } from '@/components/PremiumScaffold';
import { colors } from '@/constants/colors';
import { radii, spacing } from '@/constants/spacing';
import { typography } from '@/constants/typography';
import { demoImages } from '@/data/demoContent';
import { generateAIReel } from '@/services/ai';

export default function ReelCreator() {
  const [log, setLog] = useState('Ready to generate beat-synced reel.');
  return <PremiumScaffold><Text style={styles.kicker}>REEL CREATOR</Text><Text style={styles.title}>Beat-synced AI reveal</Text><Text style={styles.subtitle}>Build a polished vertical reel with zoom effects, transitions, captions, and music timing.</Text><GlassCard style={styles.card} contentStyle={styles.content}><Image source={{uri:demoImages[5]}} style={styles.image} contentFit="cover"/><View style={styles.timeline}>{['Intro','Zoom','Glow','Caption','Export'].map((item,index)=><View key={item} style={[styles.segment,{backgroundColor:index%2?colors.purple:colors.pink}]}><Text style={styles.segmentText}>{item}</Text></View>)}</View></GlassCard><View style={styles.actions}><GradientButton title="Generate Reel" onPress={async()=>setLog((await generateAIReel([...demoImages])).logs.join('\n'))} style={styles.button}/><GradientButton title="Export 9:16" variant="ghost" style={styles.button}/></View><GlassCard contentStyle={styles.logCard}><Text style={styles.logTitle}>FFmpeg / AI Plan</Text><Text style={styles.logText}>{log}</Text></GlassCard></PremiumScaffold>;
}
const styles=StyleSheet.create({kicker:{...typography.caption,color:colors.pink,letterSpacing:1.8},title:{...typography.title,color:colors.white,marginTop:8},subtitle:{...typography.body,color:colors.textMuted,marginTop:8},card:{marginTop:spacing.x3},content:{padding:12},image:{height:540,borderRadius:radii.lg},timeline:{flexDirection:'row',gap:8,marginTop:spacing.x2},segment:{flex:1,minHeight:58,borderRadius:radii.md,alignItems:'center',justifyContent:'center'},segmentText:{...typography.caption,color:colors.white,textAlign:'center'},actions:{flexDirection:'row',flexWrap:'wrap',gap:spacing.x2,marginTop:spacing.x3},button:{flexGrow:1,minWidth:150},logCard:{padding:spacing.x3},logTitle:{...typography.section,color:colors.white},logText:{...typography.body,color:colors.textMuted,marginTop:10}});
