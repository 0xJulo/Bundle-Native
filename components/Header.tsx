import React from 'react';

// React Native imports
import { View, Text, StyleSheet } from 'react-native';

// Component imports
import WalletConnection from './WalletButton';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.text}>bundle</Text>
            </View>
            <View>
                <WalletConnection />
            </View>
        </View>
        
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
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#80baa8',
    },
})

export default Header;

