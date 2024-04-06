import React from 'react';

// React Native imports§
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Component imports
import CreateBundle from '../components/CreateNewBundleButton';
import Bundle from '../components/Bundle';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
}

// Example data
const exampleBundle = {
    id: 1,
    name: 'Swap ETH to USDC',
    description: 'Take Eth from my wallet and swap it to USDC using Uniswap',
    owner: 'Julo.eth',
    trigger: {
        type: 'ETH',
        amount: 100,
    },
    actions: {
        type: 'WETH',
        amount: 100,
    },
    notify: 'prompt',
};

const DashboardScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Dashboard Screen</Text>
                <Bundle id={exampleBundle.id} name={exampleBundle.name} description={exampleBundle.description} owner={exampleBundle.owner} />
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

