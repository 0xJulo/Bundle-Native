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
const exampleBundle = [
    {
        id: 1,
        name: 'Swap ETH to USDC',
        description: 'Take Eth from my wallet and swap it to USDC using Uniswap',
        owner: 'Julo.eth',
        bundleType: 'My Bundle',
    },
    {
        id: 2,
        name: 'Bridge to Gnosis Pay',
        description: 'Bridge assets to Gnosis for real-world payment',
        owner: 'Julo.eth',
        bundleType: 'Pre-defined',
    },
    {
        id: 3,
        name: 'Create Woop Fundeaiser',
        description: 'Fundraise from Woop pay',
        owner: 'Julo.eth',
        bundleType: 'Pre-defined',
    },
    {
        id: 4,
        name: 'Arbtitrum Airdrop',
        description: 'Meet conditions for Arbitrum airdrop',
        owner: 'Julo.eth',
        bundleType: 'Popular',
    },
];

const DashboardScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* <Text style={styles.text}>Dashboard Screen</Text> */}
                {exampleBundle.map((bundle) => (
                    <Bundle key={bundle.id} id={bundle.id} name={bundle.name} description={bundle.description} owner={bundle.owner} bundleType={bundle.bundleType} />
                ))}
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

