import { Text, View } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';

export default function ProfileScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Profil</Text>
      <Text style={commonStyles.text}>Votre profil et paramètres</Text>
    </View>
  );
}
