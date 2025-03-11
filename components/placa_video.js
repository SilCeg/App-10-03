import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function placa_video() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitulo}>Placa de Video</Text>

<Text style={styles.conteudo}> As placas de vídeo são os componentes que dão vida às imagens em seu computador. Elas desempenham um papel crucial na qualidade visual e desempenho dos aplicativos. </Text>


<View>
  <Image source={require('../assets/video.jpg')} style={styles.img}></Image>
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
    margin: 10
  },

  img: {
    width: 300,
    height: 300
  }

  
});