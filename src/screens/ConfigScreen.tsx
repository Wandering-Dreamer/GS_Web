import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Button, Center, FlatList, Text, TextArea, Select, CheckIcon, View } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ConfigNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Config'>;

type Props = {
  navigation: ConfigNavigationProp;
};

const ConfigScreen= ({ navigation }: Props) => {
    const [chargerType, setChargerType] = useState('AC');
    const [selectedTime, setSelectedTime] = useState('00:00 - 06:00');
  
    const chargerOptions = [
      'AC',
      'DC',
      'Outro'
    ];
  
    const times = [
      '00:00 - 06:00',
      '06:00 - 12:00',
      '12:00 - 18:00',
      '18:00 - 24:00'
    ];
  
    const handleSavePreferences = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/preferences/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: 1, // ID do usuário para o exemplo
              chargerType: chargerType,
              preferredTime: selectedTime,
            }),
          });
          const result = await response.json();
          console.log('Preferências salvas:', result);
        } catch (error) {
          console.error('Erro ao salvar preferências:', error);
        }
      };
    
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Preferências de Carregamento</Text>
  
        {/* Seleção do tipo de carregador */}
        <View style={styles.preferenceContainer}>
          <Text>Tipo de Carregador</Text>
          <Picker
            selectedValue={chargerType}
            onValueChange={(itemValue) => setChargerType(itemValue)}
            style={styles.picker}
          >
            {chargerOptions.map((type, index) => (
              <Picker.Item key={index} label={type} value={type} />
            ))}
          </Picker>
        </View>
  
        {/* Seleção de horário de menor demanda */}
        <View style={styles.preferenceContainer}>
          <Text>Horário de Carregamento Preferido</Text>
          <Picker
            selectedValue={selectedTime}
            onValueChange={(itemValue) => setSelectedTime(itemValue)}
            style={styles.picker}
          >
            {times.map((time, index) => (
              <Picker.Item key={index} label={time} value={time} />
            ))}
          </Picker>
        </View>
  
        {/* Botão de salvar */}
        <Button bgColor={"emerald.500"} margin={5} onPress={handleSavePreferences}>
        Salvar preferências
        </Button>

        <Button bgColor={"purple.500"} margin={5} onPress={() => navigation.navigate('Status')}>
        Tela de Status
        </Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4f4f8',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    preferenceContainer: {
      marginBottom: 20,
    },
    picker: {
      height: 50,
      width: '100%',
    },
  });
  
  export default ConfigScreen;