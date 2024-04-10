import React from 'react';

// React Native imports
import { StyleSheet, ScrollView } from 'react-native';

// Global Data
import { useExampleData } from '../ExampleDataStore';

// Component imports
import CreateBundle from '../components/CreateNewBundleButton';
import Tabs from '../components/Tabs';
import SearchBundles from '../components/SearchBundles';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
}

// Actual component
export default function DashboardScreen() {
    const { items } = useExampleData();
    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#192d32',
        paddingBottom: 60,
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

