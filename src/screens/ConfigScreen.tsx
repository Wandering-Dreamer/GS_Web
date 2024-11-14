import React from 'react';
import { NativeBaseProvider, Box, Button, Center, FlatList, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type ConsultationsListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Config'
>;

type Props = {
  navigation: ConsultationsListScreenNavigationProp;
};

const mockConsultations = [
  { id: '1', doctor: 'Dr. João', date: '10/10/2024', status: 'Confirmada' },
  { id: '2', doctor: 'Dra. Maria', date: '12/10/2024', status: 'Pendente' },
];

const ConfigScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <FlatList
            data={mockConsultations}
            renderItem={({ item }) => (
              <Box borderBottomWidth="1" mb={4} p={2}>
                <Text>Consulta com {item.doctor}</Text>
                <Text>Data: {item.date}</Text>
                <Text>Status: {item.status}</Text>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ConfigScreen;