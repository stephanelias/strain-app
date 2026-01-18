import { Text, View } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';

export default function AddScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Ajouter un workout</Text>
      <Text style={commonStyles.text}>Démarrer une nouvelle séance</Text>
    </View>
  );
}
