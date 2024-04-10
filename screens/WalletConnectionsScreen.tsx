import React from 'react';

// React Native imports§
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Global data
import { useExampleData } from '../ExampleDataStore';

// Component import
import CustomButton from '../components/CustomButton';

// Typescript props for navigation
type WalletConnectionsScreenProps = {
    Dashboard: undefined;
}

// Actual component
export default function WalletConnectionsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<WalletConnectionsScreenProps>>();
    const { connectionStatus } = useExampleData();

    const handleLogout = () => {
        connectionStatus.setLoadingStatus(true);
        setTimeout(() => {
            connectionStatus.setConnectionStatus(false);
            connectionStatus.setLoadingStatus(false);
        }, 2000);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Wallet Connections</Text>
                <Button 
                    title="Back"
                    onPress={() => {
                        connectionStatus.setConnectionStatus(false); // Use setConnectionStatus to change the connection state
                    }} 
                    />
                <CustomButton 
                    text="Logout" 
                    onPress={handleLogout}
                />
            </View>
        </SafeAreaView>
    );
};

// Component styles
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


{/* <Button title="Back" onPress={() => navigation.goBack()} /> */}

