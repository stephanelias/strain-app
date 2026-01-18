import { Text, View } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';

export default function ExercisesScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Exercices</Text>
      <Text style={commonStyles.text}>Liste de tous vos exercices</Text>
    </View>
  );
}
