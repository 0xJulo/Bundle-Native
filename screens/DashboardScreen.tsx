import React from 'react';
import GlobalStyles from '../GlobalStyles';

// React Native imports
import { StyleSheet, ScrollView, Text } from 'react-native';
import { useFonts } from 'expo-font';

// Global Data
import { useExampleData } from '../ExampleDataStore';

// Component imports
import CreateBundle from '../components/buttons/CreateNewBundleButton';
import Tabs from '../components/Tabs';
import SearchBundles from '../components/inputs/SearchBundles';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
}

// Actual component
export default function DashboardScreen() {
    let [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
    });
    const { items } = useExampleData();
    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                {/* 
                {fontsLoaded ? (
                    <Text style={{ ...GlobalStyles.textNormal, fontFamily: 'Inter-Thin' }}>Test text</Text>
                ) : (
                    <Text style={GlobalStyles.textNormal}>Loading...</Text>
                )}
                */}
                <SearchBundles />
                <Tabs items={items} />
            </ScrollView>
            <CreateBundle />
        </>
    );
};

// Component styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        paddingBottom: 60,
    },
    text: {
        color: 'black',
        fontSize: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
});

