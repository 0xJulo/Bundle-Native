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
    WoopBundle: undefined;
}

// Interface props
interface BundleProps {
    id: number,
    name: string,
    description: string,
    owner: string,
    bundleType: string,
    //trigger: object,
    //actions: object,
    //notify: string,
}

const Bundle: React.FC<BundleProps> = ({ id, name, description, owner, bundleType }) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

  return (
    <Pressable style={({ pressed }) => [styles.bundle, 
        {
            backgroundColor: pressed ? '#80baa8' : '#20393f',
            borderColor: pressed ? '#9ddbc7' : '#80baa8',
          },
    ]} onPress={() => navigation.navigate('WoopBundle')}>
        <Text style={styles.bundleType}>{bundleType}</Text>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.owner}>Owner: {owner}</Text>
        <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    bundle: {
        backgroundColor: '#20393f',
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        margin: 10,
    },
    heading: {
        fontSize: 20,
        marginBottom: 2,
        color: '#80baa8',
    },
    owner: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#80baa8',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#80baa8',
    },
    bundleType: {
        fontSize: 12,
        marginBottom: 5,
        color: '#80baa8',
    },
});

// <TextInputDropdown onChangeText={() => {}} onSelectOption={() => {}} options={['Ethereum', 'Bitcoin']} />

export default Bundle;

