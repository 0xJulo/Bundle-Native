import React from 'react';

// React Native imports
import { View, Text, StyleSheet, Button, SafeAreaView  } from 'react-native';

// Typescript props for navigation
type ConnectionScreenProps = {
    setConnected: () => void;
}

const ConnectionScreen: React.FC<ConnectionScreenProps> = ({ setConnected }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Connection Screen</Text>
                <Button title="Connect" onPress={() => setConnected()} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192d32',
    },
    text: {
        color: '#80baa8',
        fontSize: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#192d32',
    },
});

export default ConnectionScreen;