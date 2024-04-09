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
}

type NavigatorParams = {
    Bundle: undefined;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, icon }) => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

    return (
        <Pressable style={icon ? styles.buttonIcon : styles.button} onPress={() => navigation.navigate('Bundle')}>
            <Text style={styles.buttonText}>{text}</Text>
            {icon && <MaterialIcons name={icon} size={30} color='#192d32' />}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#80baa8',
        flex: 1,
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
});

export default CustomButton;

