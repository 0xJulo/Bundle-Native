import React from 'react';

// React Native imports
import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Component imports
import TextInputDropdown from './TextInputDropdown';

// Typescript props for navigation
type NavigatorParams = {
    Bundle: undefined;
}

// Interface props
interface BundleProps {
    id: number,
    name: string,
    description: string,
    owner: string,
    //trigger: object,
    //actions: object,
    //notify: string,
}

const Bundle: React.FC<BundleProps> = ({ id, name, description, owner }) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

  return (
    <Pressable style={({ pressed }) => [styles.bundle, 
        {
            backgroundColor: pressed ? '#579380' : '#80baa8',
            borderColor: pressed ? '#9ddbc7' : '#80baa8',
          },
    ]} onPress={() => navigation.navigate('Bundle')}>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.owner}>Owner: {owner}</Text>
        <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    bundle: {
        backgroundColor: '#80baa8',
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        margin: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#192d32',
    },
    owner: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#192d32',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#192d32',
    }
});

// <TextInputDropdown onChangeText={() => {}} onSelectOption={() => {}} options={['Ethereum', 'Bitcoin']} />

export default Bundle;

