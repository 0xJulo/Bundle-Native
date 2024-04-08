import React from 'react';

// React Native imports
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
}

const ForkBundleButton: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

  return (
    <TouchableOpacity style={styles.fixedButton} onPress={() => navigation.navigate('NewBundle')}>
        <MaterialIcons name='fork-right' size={50} color='#192d32' />
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    fixedButton: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        width: 80, 
        height: 80,
        borderRadius: 50, 
        backgroundColor: '#80baa8',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8, 
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default ForkBundleButton;

