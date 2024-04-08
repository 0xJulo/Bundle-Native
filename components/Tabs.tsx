import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('favourites');

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
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('all')}
                >
                    <Text>All Bundles</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('saved')}
                >
                    <Text>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('myBundles')}
                >
                    <Text>My Bundles</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('popular')}
                >
                    <Text>Popular</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'gray',
        width: '100%',
        marginBottom: 15,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
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
