import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Title from '/SRC/COMPONENTS/Title';
import Title2 from '/SRC/COMPONENTS/Title2';
import Title3 from '/SRC/COMPONENTS/Title3';
import Title4 from '/SRC/COMPONENTS/Title4';
import Title5 from '/SRC/COMPONENTS/Title5';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Title2/>
      <Title3/>
      <Title4/>
      <Title5/>
    
      <Button
  title="Enviar"
  color="purple"
  onPress={() => Alert.alert('Button with adjusted color pressed')}
/>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f194ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 

});
