import React, { useState } from 'react';

// React Native imports
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Hooks
import useWallet from '../utils/hooks/useWallet';
import useTrigger from '../utils/hooks/useTrigger';

// Component import
import TextInputDropdown from '../components/TextInputDropdown';
import CustomButton from '../components/CustomButton';
import DropdownComponent from '../components/DropdownComponent';
import Widget from '../components/WidgetConstructor';
import SelectNetwork from '../patterns/SelectNetworkAssetAmountPattern';
import DataComparison from '../patterns/DataComparisonPattern';
import CreateNFT from '../patterns/CreateNFTPattern';


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

    const { transactions } = useWallet('0xfe123');
    const { trigger } = useTrigger(1);

    return (
        <ScrollView>
        <View style={styles.container}>

            {/* useTrigger */}
                {trigger && (
                    <View style={{marginBottom: 20,}}>
                        <Text style={styles.heading}>useTrigger function from store</Text>
                        <Text style={{ color: '#80baa8' }}>{trigger.type}</Text>
                        {trigger.input === 'wallet' && (
                            <Text style={{ color: '#80baa8' }}>{trigger.input}</Text>
                        )}
                    </View>
                )}

            {/* useWallet */}
            <View>
                <Text style={styles.heading}>Transactions</Text>
                {transactions.map((transaction, index) => (
                    <Text 
                        key={index}
                        style={{color: '#80baa8'}}
                    >{`ID: ${transaction.id}, Amount: ${transaction.amount}, Currency: ${transaction.currency}`}</Text>
                ))}
            </View>


            {/* Step One Bundle */}
            <View style={styles.bundle}>
                <View style={styles.bundleTop}>
                    <View>
                        <Text style={styles.bundleType}>Step 01</Text>
                        <Text style={styles.heading}>Create Woop Payment Link</Text>
                    </View>
                    <View>
                        <MaterialIcons
                                name='check-circle'
                                size={30}
                                color='#80baa8'
                        />
                    </View>
                </View>
                
                <TextInputDropdown
                    onChangeText={(text) => console.log(text)}
                    onSelectOption={(option) => console.log(option)}
                    options={[]}
                />

                {/* Dropdown component */}
                <TouchableOpacity
                    style={styles.dropdown}
                    onPress={toggleDropdown}
                >
                    <Text style={styles.dropdownText}>{selectedValue}</Text>
                    <MaterialIcons
                        name='expand-more'
                        size={30}
                        color='#80baa8'
                    />
                </TouchableOpacity>
                {isOpen && (
                    <View style={styles.dropdownOptions}>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={styles.dropdownOption}
                                onPress={() => selectOption(option)}
                            >
                                <Text style={styles.dropdownOptionText}>
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                <CustomButton text='Create Woop Payment Link' />
            </View>

            {/* Step Two Bundle */}
            <Widget>
                <Text style={styles.heading}>Network, Asset and Amount pattern</Text>
                <SelectNetwork />
            </Widget>
            <Widget>
                <Text style={styles.heading}>Data Comparison pattern</Text>
                <DataComparison />
            </Widget>
                <Text style={styles.heading}>Create NFT pattern</Text>
                <CreateNFT />
        </View>
        </ScrollView>
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