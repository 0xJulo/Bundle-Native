import React, { useState } from 'react';

// React Native imports
import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Component imports
import TextInputDropdown from './TextInputDropdown';

// Typescript props for navigation
type NavigatorParams = {
    Bundle: undefined;
    WoopBundle: undefined;
}

// Interface props
interface BundleProps {
    id: number,
    name: string,
    description: string,
    owner: string,
    bundleType: string,
    //trigger: object,
    //actions: object,
    //notify: string,
}

// Component Code
const Bundle: React.FC<BundleProps> = ({ id, name, description, owner, bundleType }) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  }

  return (
    <View style={styles.bundle}>
        <View style={styles.bundleTop}>
            <View>
                <Text style={styles.bundleType}>{bundleType}</Text>
                <Text style={styles.heading}>{name}</Text>
            </View>
            <View>
            <TouchableOpacity onPress={handlePress}>
            {isOpen ? <MaterialIcons name='expand-less' size={30} color='#80baa8' />
            : <MaterialIcons name='expand-more' size={30} color='#80baa8' />}
             </TouchableOpacity>
            </View>
        </View>
        {isOpen && <View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.owner}>Created by: {owner}</Text>
        </View>}
    </View>
  );
};

// Component Styles
const styles = StyleSheet.create({
    bundle: {
        backgroundColor: '#20393f',
        width: '90%',
        borderColor: 'rgba(128, 186, 168, 0.2)',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        margin: 10,
    },
    bundleTop:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#80baa8',
    },
    owner: {
        fontSize: 12,
        marginBottom: 10,
        color: '#80baa8',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#80baa8',
    },
    bundleType: {
        fontSize: 12,
        marginBottom: 5,
        color: '#80baa8',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#80baa8',
        alignItems: 'center',
        justifyContent: 'center'
    },
});



export default Bundle;


// <TextInputDropdown onChangeText={() => {}} onSelectOption={() => {}} options={['Ethereum', 'Bitcoin']} />

/*
<Pressable style={({ pressed }) => [styles.bundle, 
        {
            backgroundColor: pressed ? '#80baa8' : '#20393f',
            borderColor: pressed ? '#9ddbc7' : '#80baa8',
          },
    ]} onPress={() => navigation.navigate('WoopBundle')}>
*/

