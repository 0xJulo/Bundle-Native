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
};
const exampleBundle2 = {
    id: 1,
    name: 'Fundraise to Gnosis Pay',
    description: 'Fundraise from Woop pay and bridge to Gnosis for real-world payment',
    owner: 'Julo.eth',
};

const DashboardScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* <Text style={styles.text}>Dashboard Screen</Text> */}
                <Bundle id={exampleBundle.id} name={exampleBundle.name} description={exampleBundle.description} owner={exampleBundle.owner} />
                <Bundle id={exampleBundle2.id} name={exampleBundle2.name} description={exampleBundle2.description} owner={exampleBundle2.owner} />
                <CreateBundle />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#192d32',
    },
    text: {
        color: 'black',
        fontSize: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#192d32',
    },
});

export default DashboardScreen;

