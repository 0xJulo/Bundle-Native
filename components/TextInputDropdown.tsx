import React, { useState } from 'react';

// React Native imports
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

// Interface props
interface TextInputDropdownProps {
    onChangeText: (text: string) => void;
    onSelectOption: (option: string) => void;
    options: string[];
}

const TextInputDropdown: React.FC<TextInputDropdownProps> = ({
    onChangeText,
    onSelectOption,
    options,
  }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Enter text"
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
  };

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      height: 40,
    },
    dropdownButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderLeftWidth: 1,
      borderLeftColor: 'gray',
    },
    dropdownButtonText: {
      fontWeight: 'bold',
    },
    dropdownContainer: {
      position: 'absolute',
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

export default TextInputDropdown;

