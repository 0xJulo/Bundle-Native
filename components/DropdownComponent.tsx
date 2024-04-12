import React, { useState } from 'react';

// React Native imports
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Component structure
type DropdownProps = {
    options: string[];
    onOptionSelected?: (option: string) => void;
}

// Actual compoenent
export default function DropdownComponent({ options, onOptionSelected }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('-- Choose option --');

    //const options = ['Ethereum', 'Arbitrum', 'Gnosis Chain'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: string) => {
        if (onOptionSelected) {
            onOptionSelected(option);
        }
    };

    const selectedOpen = (option: string) => {
        setSelectedValue(option);
        setIsOpen(false);
        handleSelect(option);
    };

    return (
        <>
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
                            onPress={() => selectedOpen(option)}
                        >
                            <Text style={styles.dropdownOptionText}>
                                {option}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </>
    );
};

// Component styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
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
        width: '100%',
        borderWidth: 1,
        borderTopWidth: 0,
        marginTop: -4,
        borderColor: '#80baa8',
        borderRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
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

