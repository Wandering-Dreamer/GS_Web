import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Button, Center, Text, Progress } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type StatusScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Status'>;

type Props = {
  navigation: StatusScreenNavigationProp;
};

const StatusScreen = ({ navigation }: Props) => {
  const [chargeLevel, setChargeLevel] = useState(50); // Estado inicial da carga (ex: 50%)
  const [chargerType, setChargerType] = useState(''); // Tipo de carregador do backend
  const [preferredTime, setPreferredTime] = useState(''); // Horário preferido do backend

  // Simulação de progresso de recarga
  useEffect(() => {
    const interval = setInterval(() => {
      setChargeLevel(prev => (prev < 100 ? prev + 5 : 100)); // Incrementa até 100%
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Busca as preferências do usuário no backend
  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/preferences/1'); // Substitua "1" pelo userId real
        if (!response.ok) {
          throw new Error('Erro ao buscar preferências do usuário');
        }
        const data = await response.json();
        setChargerType(data.chargerType || 'Indefinido');
        setPreferredTime(data.preferredTime || 'Indefinido');
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPreferences();
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white" p={4}>
        <Box borderBottomWidth="1" mb={4} p={2}>
          <Text fontSize="lg" fontWeight="bold">Status de Recarga:</Text>
          <Progress value={chargeLevel} max={100} mt={2} colorScheme="green" />
          <Text mt={2}>{chargeLevel}%</Text>
        </Box>

        <Box borderBottomWidth="1" mb={4} p={2}>
          <Text fontSize="lg" fontWeight="bold">Tipo de Carregador:</Text>
          <Text>{chargerType}</Text>
        </Box>

        <Box borderBottomWidth="1" mb={4} p={2}>
          <Text fontSize="lg" fontWeight="bold">Horário de Carregamento Preferido:</Text>
          <Text>{preferredTime}</Text>
        </Box>

        <Button bgColor={"red.500"} mt={5} onPress={() => navigation.navigate('Welcome')}>
          Tela Inicial
        </Button>
        <Button bgColor={"pink.500"} mt={2} onPress={() => navigation.navigate('Config')}>
          Configurações de Preferência
        </Button>
      </Center>
    </NativeBaseProvider>
  );
};

export default StatusScreen;