import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfigScreen from '../screens/ConfigScreen';
import StatusScreen from '../screens/StatusScreen';

// Definindo o RootStackParamList com todas as telas do projeto
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Config: undefined;
  Status: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Tela Inicial' }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Acesse sua conta' }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Cadastrar' }} />
      <Stack.Screen name="Config" component={ConfigScreen} options={{ title: 'Preferências' }} />
      <Stack.Screen name="Status" component={StatusScreen} options={{ title: 'Status de Carregamento' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;