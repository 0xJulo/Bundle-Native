import React from 'react';

// React Native imports
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

type TextInputComponentProps = {
    placeholder: string;
}

// Actual component
export default function TextInputComponent({ placeholder }: TextInputComponentProps) {
    return (
        <TextInput 
            style={styles.input} 
            placeholder={placeholder}
            placeholderTextColor="#507469"
        />
    );
}

// Component styles
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#80baa8',
        borderRadius: 5,
        marginTop: 10,
    }
})