import React from 'react';

// React Native imports
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

// Actual component
export default function AmountInput() {
    return (
        <TextInput 
            style={styles.input} 
            placeholder="Input amount"
            placeholderTextColor="#507469"
            keyboardType="numeric"
        />
    );
}

// Component styles
const styles = StyleSheet.create({
    input: {
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