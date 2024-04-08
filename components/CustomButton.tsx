import React from 'react';

// React Native imports
import { Pressable, Text, StyleSheet } from 'react-native';

// Interface props
interface CustomButtonProps {
    text: string,
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#80baa8',
        width: '100%',
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#192d32',
    },
});

export default CustomButton;

