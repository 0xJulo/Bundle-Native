import React from 'react';
import GlobalStyles from '../GlobalStyles';

// React Native imports
import { View, Text, StyleSheet } from 'react-native';

// Component imports
import DropdownComponent from '../components/DropdownComponent';

// Actual component
export default function DataComparison() {

    const dataSource = ['Chainlink Oracle', 'Uniswap'];
    return (
        <View>
            <Text style={GlobalStyles.textNormal}>Using:</Text>
            <DropdownComponent options={dataSource} />
        </View>
    );
}

// Component styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
