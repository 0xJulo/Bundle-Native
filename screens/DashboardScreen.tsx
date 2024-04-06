import React from 'react';

// React Native imports§
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Component imports
import CreateBundle from '../components/CreateNewBundleButton';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
}

const DashboardScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Dashboard Screen</Text>
                <CreateBundle />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    text: {
        color: 'black',
        fontSize: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
});

export default DashboardScreen;

