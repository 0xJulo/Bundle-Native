import React, { useState } from 'react';

// React Native imports
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

// Component import
import TextInputDropdown from '../components/TextInputDropdown';
import CustomButton from '../components/CustomButton';

const WoopBundleScreen: React.FC = () => {
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
            <View style={styles.bundle}>
                <Text style={styles.bundleType}>Step 02 - Condition</Text>
                <Text style={styles.heading}>When incoming amount has reach desired limit</Text>
            </View>

            {/* Step Three Bundle */}
            <View style={styles.bundle}>
                <View style={styles.bundleTop}>
                    <Text style={styles.bundleType}>Step 03 - Action</Text>
                    <MaterialIcons
                            name='check-circle'
                            size={30}
                            color='#80baa8'
                    />
                </View>
                
                <Text style={styles.heading}>Swap to Ethereum using Uniswap</Text>
            </View>

            {/* Step Four Bundle */}
            <View style={styles.bundle}>
                <Text style={styles.bundleType}>Step 04 - Action</Text>
                <Text style={styles.heading}>Bridge to Gnosis Chain</Text>
            </View>

            {/* Step Four Bundle */}
            <View style={styles.bundle}>
                <Text style={styles.bundleType}>Step 05 - Action</Text>
                <Text style={styles.heading}>Send to Gnosis Safe address</Text>
            </View>
        </View>
    );
};

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
        marginBottom: 2,
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

export default WoopBundleScreen;

/*
<Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue: string, itemIndex: number) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Arbitrum" value="arbitrum" />
                    <Picker.Item label="Gnosis Chain" value="gnosis" />
                </Picker>
*/
