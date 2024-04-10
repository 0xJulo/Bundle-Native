import React from 'react';

// React Native imports
import { View, StyleSheet, SafeAreaView  } from 'react-native';

// Global Data
import { useExampleData } from '../ExampleDataStore';

// Component imports
import Carousel from '../components/CarouselComponent';
import CustomButton from '../components/CustomButton';

// Actual component
export default function ConnectionScreen() {
    const { connectionStatus } = useExampleData();

    const handleConnect = () => {
        connectionStatus.setLoadingStatus(true);
        setTimeout(() => {
            connectionStatus.setConnectionStatus(true);
            connectionStatus.setLoadingStatus(false);
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topContainer}>
                <Carousel />   
            </View>
            <View style={styles.bottomContainer}>
                <CustomButton text="Connect" onPress={handleConnect}/>
            </View>
        </SafeAreaView>
    );
};

// Componet styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192d32',
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer:{
        height: 60,
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    text: {
        color: '#80baa8',
        fontSize: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#192d32',
    },
    customButton: {
        backgroundColor: '#80baa8',
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});