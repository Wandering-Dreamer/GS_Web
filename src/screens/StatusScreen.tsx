import React from 'react';
import { NativeBaseProvider, Box, Button, Input, Center, Select, CheckIcon } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type ScheduleConsultationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Status'
>;

type Props = {
  navigation: ScheduleConsultationScreenNavigationProp;
};

const StatusScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <Select placeholder="Selecione o médico" mb={4}>
            <Select.Item label="Dr. João" value="joao" />
            <Select.Item label="Dra. Maria" value="maria" />
          </Select>
          <Input placeholder="Selecione a data" mb={4} />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default StatusScreen;