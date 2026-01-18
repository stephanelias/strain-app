import { Text, View } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';

export default function HistoryScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Historique</Text>
      <Text style={commonStyles.text}>Votre progression et statistiques</Text>
    </View>
  );
}
