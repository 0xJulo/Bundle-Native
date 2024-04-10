import React from 'react';

// React Native imports
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    Dashboard: undefined;
}

// Component imports
import WalletConnection from './WalletButton';

// Actual component
export default function Header() {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.text}>bundle</Text>
                </TouchableOpacity>
                <View>
                    <WalletConnection />
                </View>
            </View>
        </SafeAreaView>
        
     );
};

// Component styles
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#192d32',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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

