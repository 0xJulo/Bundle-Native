import React from 'react';

// React Native imports
import { Pressable, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Interface props
interface CustomButtonProps {
    text: string,
    icon?: string,
    onPress?: () => void,
}

type NavigatorParams = {
    Bundle: undefined;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, icon, onPress }) => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

    return (
        <Pressable style={({ pressed })=> [icon ? styles.buttonIcon : styles.button, pressed && styles.buttonPressed]} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
            {icon && <MaterialIcons name={icon} size={30} color='#192d32' />}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#80baa8',
        // flex: 1,
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        backgroundColor: '#80baa8',
        flex: 1,
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#192d32',
    },
    buttonPressed: {
        opacity: 0.8,
        borderWidth: 1,
        borderColor: '#80baa8',
    }
});

export default CustomButton;

{/* <Pressable style={icon ? styles.buttonIcon : styles.button} onPress={() => navigation.navigate('Bundle')}> */}