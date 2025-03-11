import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function placa_mae() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitulo}>Placa Mãe</Text>

      <Text style={styles.conteudo}> A placa-mãe é a espinha dorsal que une os componentes do computador em um ponto e permite que eles conversem entre si. Sem ela, nenhuma das peças do computador, como a CPU, a GPU ou o disco rígido, poderia interagir. </Text>

    
    <View>
        <Image source={require('../assets/placa.jpg')} style={styles.img}></Image>
    </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subTitulo: {
    fontSize: 20,
    margin: 10
  },

  conteudo:{
    fontSize: 16,
    color: '#333333', // Cor de texto padrão
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#F0F8FF', // Cor de fundo suave
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },

  img: {
    width: 300,
    height: 300
  }
});