import React from 'react';

// React Native imports
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Component imports
import WalletConnection from './WalletButton';

const Header: React.FC = () => {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.text}>bundle</Text>
                </View>
                <View>
                    <WalletConnection />
                </View>
            </View>
        </SafeAreaView>
        
     );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#192d32',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //borderBottomWidth: 1,
        //borderBottomColor: '#ddd',
        paddingLeft: 20,
        paddingRight: 20,
    },
    background: {
        backgroundColor: '#192d32',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#80baa8',
    },
})

export default Header;

