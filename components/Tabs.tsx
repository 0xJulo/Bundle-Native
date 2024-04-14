import React, { useState } from 'react';

// React Native imports
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Component imports
import Bundle, { BundleProps } from './BundleComponent';


interface TabsProps {
    items: BundleProps[];
};

// Actual component
export default function Tabs({ items }: TabsProps) {
    const [activeTab, setActiveTab] = useState('all');
    const activeBundles = items.filter(item => 
        activeTab.toLowerCase() === 'all' || item.type.toLowerCase() === activeTab.toLowerCase()
    );

    return (
        <>
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabLeft, activeTab === 'all' && styles.activeTabLeft]}
                    onPress={() => setActiveTab('all')}
                >
                    <Text style={[styles.text, activeTab === 'all' && styles.activeText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'My Bundles' && styles.activeTab]}
                    onPress={() => setActiveTab('My Bundles')}
                >
                    <Text style={[styles.text, activeTab === 'My Bundles' && styles.activeText]}>My Bundles</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Saved' && styles.activeTab]}
                    onPress={() => setActiveTab('Saved')}
                >
                    <Text style={[styles.text, activeTab === 'Saved' && styles.activeText]}>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabRight, activeTab === 'Popular' && styles.activeTabRight]}
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

// Component styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 15,
        // backgroundColor: '#192d32',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
    },
    tab: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        borderColor: '#80baa8',
        borderWidth: 1,
    },
    tabLeft: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        borderColor: '#80baa8',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    tabRight: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        borderColor: '#80baa8',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    activeTab: {
        backgroundColor: '#80baa8',
    },
    activeTabLeft: {
        backgroundColor: '#80baa8',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    activeTabRight: {
        backgroundColor: '#80baa8',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        color: '#80baa8',
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

/*
            <View style={styles.content}>
                {activeTabContent()}
            </View>
*/
