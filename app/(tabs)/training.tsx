import { Text, View } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';

export default function TrainingScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Training</Text>
      <Text style={commonStyles.text}>Vos séances d'entraînement</Text>
    </View>
  );
}
