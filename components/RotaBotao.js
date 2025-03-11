import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Corrigido aqui

import home from './home';
import placa_mae from './placa_mae';
import placa_video from './placa_video';

const Stack = createStackNavigator(); // Alterado para createStackNavigator

export default function RotaBotao(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={home} />
        <Stack.Screen name='placa_video' component={placa_video} />
        <Stack.Screen name='placa_mae' component={placa_mae} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
