import React, { useState } from 'react';

// React Native imports
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Interface props
interface TextInputDropdownProps {
    onChangeText: (text: string) => void;
    onSelectOption: (option: string) => void;
    options: string[];
}

// Actual component
export default function TextInputDropdown({ onChangeText, onSelectOption, options, }: TextInputDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Enter amount"
          placeholderTextColor="#80baa8"
          keyboardType="numeric"
        />
        <Pressable style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownButtonText}>USDC</Text>
        </Pressable>
        {isDropdownOpen && (
          <View style={styles.dropdownContainer}>
            {options.map((option) => (
              <Pressable
                key={option}
                style={styles.dropdownOption}
                onPress={() => {
                  onSelectOption(option);
                  setIsDropdownOpen(false);
                }}
              >
                <Text>{option}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    );
  }

  // Component styles
const styles = StyleSheet.create({
    container: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#80baa8',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      height: 40,
    },
    dropdownButton: {
      width: '25%',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderLeftWidth: 1,
      borderLeftColor: 'gray',
    },
    dropdownButtonText: {
      color: '#80baa8',
      fontWeight: 'bold',
    },
    dropdownContainer: {
      position: 'absolute',
      width: '100%',
      top: '100%',
      right: 0,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      padding: 10,
    },
    dropdownOption: {
      paddingVertical: 5,
    },
});

