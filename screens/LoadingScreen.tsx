import React from 'react';

// React Native import
import { View, Text, StyleSheet } from 'react-native';

// Actual component
export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}

// Component styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192d32',
    },
    text: {
        color: "#80baa8",
        fontSize: 20,
    }
})

