import React, { useState } from 'react';

// React Native imports
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Component import
import TextInputDropdown from '../components/TextInputDropdown';
import CustomButton from '../components/CustomButton';
import DropdownComponent from '../components/DropdownComponent';
import Widget from '../components/WidgetConstructor';
import SelectNetwork from '../patterns/SelectNetworkAssetAmountPattern';
import DataComparison from '../patterns/DataComparisonPattern';


// Actual component
export default function WoopBundleScreen() {
    const [selectedValue, setSelectedValue] = useState('-- select chain --');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Arbitrum', 'Gnosis Chain'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option: string) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            {/* Step Two Bundle */}
            <Widget>
                <Text style={styles.heading}>Network, Asset and Amount pattern</Text>
                <SelectNetwork />
            </Widget>
            <Widget>
                <Text style={styles.heading}>Data Comparison pattern</Text>
                <DataComparison />
            </Widget>
        </View>
    );
};

// Component styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#192d32',
    },
    bundle: {
        backgroundColor: '#20393f',
        width: '90%',
        borderColor: '#80baa8',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        margin: 10,
    },
    bundleTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        marginBottom: 10,
        color: '#80baa8',
    },
    bundleType: {
        fontSize: 12,
        marginBottom: 5,
        color: '#80baa8',
    },
    picker: {
        color: 'white',
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#80baa8',
        borderRadius: 5,
        marginTop: 10,
    },
    dropdownText: {
        color: '#80baa8',
        fontSize: 16,
    },
    dropdownOptions: {
        backgroundColor: '#20393f',
        borderWidth: 1,
        borderColor: '#80baa8',
        borderRadius: 0,
    },
    dropdownOption: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    dropdownOptionText: {
        color: '#80baa8',
        fontSize: 16,
    },
});