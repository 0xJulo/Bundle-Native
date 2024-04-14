import React from 'react';

// React Native imports
import { StyleSheet, TextInput } from 'react-native';

interface NumberInputProps {
    inputText: string;
}

// Actual component
export default function NumberInput({inputText}: NumberInputProps) {
    return (
        <TextInput 
            style={styles.input} 
            placeholder={inputText}
            placeholderTextColor="#507469"
            keyboardType="numeric"
        />
    );
}

// Component styles
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#80baa8',
        borderRadius: 5,
        marginTop: 10,
    }
})