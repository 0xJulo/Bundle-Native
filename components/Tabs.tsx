import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Bundle, { BundleProps } from './BundleComponent';

import { useExampleData } from '../ExampleDataStore';

interface TabsProps {
    items: BundleProps[];
};

const Tabs: React.FC = () => {
    const { items } = useExampleData();
    const [activeTab, setActiveTab] = useState('all');
    const activeBundles = items.filter(item => 
        activeTab.toLowerCase() === 'all' || item.type.toLowerCase() === activeTab.toLowerCase()
    );

    const activeTabContent = () => {
        switch (activeTab) {
            case 'All':
                return (
                    <View>
                        <Text>Favourites Widget 01</Text>
                        <Text>Favourites Widget 02</Text>
                        <Text>Favourites Widget 03</Text>
                    </View>
                );
            case 'watching':
                return (
                    <View>
                        <Text>Watching Widget 01</Text>
                        <Text>Watching Widget 02</Text>
                        <Text>Watching Widget 03</Text>
                    </View>
                );
            case 'popular':
                return (
                    <View>
                        <Text>Popular Widget 01</Text>
                        <Text>Popular Widget 02</Text>
                        <Text>Popular Widget 03</Text>
                    </View>
                );
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'all' && styles.activeTab]}
                    onPress={() => setActiveTab('all')}
                >
                    <Text style={[styles.text, activeTab === 'all' && styles.activeText]}>All Bundles</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Saved' && styles.activeTab]}
                    onPress={() => setActiveTab('Saved')}
                >
                    <Text style={[styles.text, activeTab === 'Saved' && styles.activeText]}>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'My Bundles' && styles.activeTab]}
                    onPress={() => setActiveTab('My Bundles')}
                >
                    <Text style={[styles.text, activeTab === 'My Bundles' && styles.activeText]}>My Bundles</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Popular' && styles.activeTab]}
                    onPress={() => setActiveTab('Popular')}
                >
                    <Text style={[styles.text, activeTab === 'Popular' && styles.activeText]}>Popular</Text>
                </TouchableOpacity>
                </View>
                <View>
                {activeBundles.map((bundle, index) => (
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
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 15,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        width: '100%',
        marginBottom: 15,
    },
    tab: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#192d32',
        borderColor: '#80baa8',
        //borderBottomWidth: 1,
    },
    activeTab: {
        backgroundColor: '#80baa8',
    },
    text: {
        color: '#80baa8',
        textDecorationLine: 'underline',
    },
    activeText: {
        color: '#192d32',
        textDecorationLine: 'none',
    },
    content: {
        padding: 20,
        // Add more styles for your content container if needed
    },
});

export default Tabs;

/*
            <View style={styles.content}>
                {activeTabContent()}
            </View>
*/
