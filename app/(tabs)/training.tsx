import { StyleSheet, Text, View } from 'react-native';

export default function TrainingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training</Text>
      <Text style={styles.text}>Your training sessions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 10,
    color: '#000',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
});
