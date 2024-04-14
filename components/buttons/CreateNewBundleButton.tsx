import React from 'react';

// React Native imports
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
    WoopBundle: undefined;
}

// Actual component
export default function CreateBundle() {
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

  return (
    <TouchableOpacity style={styles.fixedButton} onPress={() => navigation.navigate('WoopBundle')}>
        <MaterialIcons name='add' size={50} color='white' />
     </TouchableOpacity>
  );
};

// Component styles
const styles = StyleSheet.create({
    fixedButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 80, 
        height: 80,
        borderRadius: 50, 
        backgroundColor: '#192d32',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8, 
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
