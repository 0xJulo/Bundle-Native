import React from 'react';

// React Native imports
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    NewBundle: undefined;
}

const CreateBundle: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();
  
  return (
    <TouchableOpacity style={styles.fixedButton} onPress={() => navigation.navigate('NewBundle')}>
        <MaterialIcons name='add' size={50} color='white' />
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    fixedButton: {
        position: 'absolute',
        bottom: 30, // Adjust as needed
        right: 20, // Adjust as needed
        width: 80, // Your desired width
        height: 80, // Your desired height
        borderRadius: 50, // Half of the width/height to make it round
        backgroundColor: '#007AFF', // iOS system blue
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8, // for Android shadow
        shadowColor: '#000000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default CreateBundle;