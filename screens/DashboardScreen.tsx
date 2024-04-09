import React from 'react';

// Data
import { useExampleData } from '../ExampleDataStore';

// React Native imports
import { StyleSheet, ScrollView } from 'react-native';

// Component imports
import CreateBundle from '../components/CreateNewBundleButton';
import Tabs from '../components/Tabs';
import SearchBundles from '../components/SearchBundles';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
}

const DashboardScreen: React.FC = () => {
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

export default DashboardScreen;

{/* 
                {items.map((bundle) => (
                    <Bundle 
                        key={bundle.id} 
                        id={bundle.id} 
                        name={bundle.name} 
                        description={bundle.description} 
                        created={bundle.created} 
                        type={bundle.type} 
                        steps={bundle.steps} 
                        owner={bundle.owner} 
                        tags={bundle.tags} />
                ))}
                */}

