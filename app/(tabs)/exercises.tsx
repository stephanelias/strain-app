import { StyleSheet, Text, View } from 'react-native';

export default function ExercisesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <Text style={styles.text}>List of all your exercises</Text>
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
