import React, { useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// Actual component
export default function SearchBundles() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={handleSearchChange}
                value={searchQuery}
                placeholder='Search Bundles'
                placeholderTextColor='#80baa8'
            />
        </View>
    );
}

// Component styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderRadius: 40,
        borderColor: '#80baa8',
        backgroundColor: '#20393f',
        color: '#80baa8'
    }
})