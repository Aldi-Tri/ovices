import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPasien from './components/LoginPasien';
import LoginDokter from './components/LoginDokter';
import HomePasien from'./components/HomePasien';
import RegisterPasien from './components/RegisterPasien';
import RegisterDokter from './components/RegisterDokter';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={RegisterDokter}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}