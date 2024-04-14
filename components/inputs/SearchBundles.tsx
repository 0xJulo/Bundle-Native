import React, { useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
            <MaterialIcons name='search' size={30} color='#80baa8' style={styles.searchIcon} />
        </View>
    );
}

// Component styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 50,
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderRadius: 40,
        borderColor: '#80baa8',
        backgroundColor: 'white',
        color: '#80baa8'
    },
    searchIcon: {
        position: 'absolute',
        right: 25, // Adjust based on your padding and icon size
        top: '57%',
        transform: [{ translateY: -10 }],
    }
})