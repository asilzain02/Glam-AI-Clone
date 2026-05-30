import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { GlamButton } from '@/components/GlamButton';
import { GlamCard } from '@/components/GlamCard';
import { GlamScaffold } from '@/components/GlamScaffold';
import { colors } from '@/constants/theme';
import { demoAccount } from '@/data/demoContent';

export default function Login() {
  return (
    <GlamScaffold showBack>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to access your creator studio.</Text>
      </View>

      <GlamCard style={styles.formCard}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput 
              defaultValue={demoAccount.email} 
              placeholder="name@example.com" 
              placeholderTextColor="rgba(255,255,255,0.3)" 
              style={styles.input} 
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
              defaultValue={demoAccount.password} 
              secureTextEntry 
              placeholder="••••••••" 
              placeholderTextColor="rgba(255,255,255,0.3)" 
              style={styles.input} 
            />
          </View>

          <Pressable style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot password?</Text>
          </Pressable>

          <GlamButton 
            title="Sign In" 
            fullWidth 
            size="lg"
            onPress={() => router.replace('/(tabs)')} 
          />
        </View>
      </GlamCard>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Pressable onPress={() => router.push('/(auth)/signup')}>
          <Text style={styles.footerLink}>Create one</Text>
        </Pressable>
      </View>
    </GlamScaffold>
  );
}

const styles = StyleSheet.create({
  header: { gap: 8, marginVertical: 32 },
  title: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  formCard: { padding: 24 },
  form: { gap: 20 },
  inputGroup: { gap: 8 },
  label: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 4,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
  },
  forgotPass: { alignSelf: 'flex-end' },
  forgotPassText: {
    color: colors.glamPink,
    fontSize: 13,
    fontFamily: 'Inter_600SemiBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  footerLink: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
});

