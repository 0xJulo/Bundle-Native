import React from 'react';
import GlobalStyles from '../GlobalStyles';

// React Native imports
import { View, Text, StyleSheet, TextInput } from 'react-native';

// Component imports
import DropdownComponent from '../components/DropdownComponent';
import TextInputComponent from '../components/TextInputComponent';

// Actual component
export default function CreateNFT() {
    return (
        <View style={styles.container}>
            <View style={styles.internalContainer}>
                <Text style={GlobalStyles.textNormal}>Select Network</Text>
                <DropdownComponent options={['1', '2', '3']} />
            </View>
            <View style={styles.internalContainer}>
                <Text style={GlobalStyles.textNormal}>Name of NFT</Text>
                <TextInputComponent placeholder='Enter name of your NFT' />
            </View>
            <View style={styles.internalContainer}>
                <Text style={GlobalStyles.textNormal}>NFT Description</Text>
                <TextInputComponent placeholder='Describe your NFT' />
            </View>
            <View style={styles.internalContainer}>
                <Text style={GlobalStyles.textNormal}>NFT Image</Text>
                <TextInputComponent placeholder='Upload your image (image picker)' />
            </View>
        </View>
    );
}

// Component styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // marginHorizontal: 20,
    },
    internalContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
});
