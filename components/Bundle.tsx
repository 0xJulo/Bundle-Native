import React from 'react';

// React Native imports
import { View, Text, StyleSheet, Button } from 'react-native';

// Component imports
import TextInputDropdown from './TextInputDropdown';



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
  return (
    <View style={styles.bundle}>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.owner}>Owner: {owner}</Text>
        <Text style={styles.description}>{description}</Text>
        <TextInputDropdown onChangeText={() => {}} onSelectOption={() => {}} options={['Ethereum', 'Bitcoin']} />
    </View>
  );
};

const styles = StyleSheet.create({
    bundle: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    owner: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    }
});

export default Bundle;

