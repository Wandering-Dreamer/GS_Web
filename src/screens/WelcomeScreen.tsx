import React from 'react';
import { NativeBaseProvider, Box, Button, Center } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Certifique-se de importar isso

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
        <Button bgColor={'purple.500'} margin={5} onPress={() => navigation.navigate('Login')}>
            Ir para a tela de Login
          </Button>
          <Button bgColor={'blue.500'} margin={5} onPress={() => navigation.navigate('SignUp')}>
            Ir para a tela de Sign Up
            </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;