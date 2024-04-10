import React, { useState } from 'react';

// React Native imports
import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Component imports
import CustomButton from './CustomButton';

// Typescript props for navigation
type NavigatorParams = {
    Bundle: undefined;
    WoopBundle: undefined;
}

// Interface props
export interface BundleProps {
    id: number;
    name: string;
    type: string;
    created: string;
    owner: string;
    description: string;
    tags?: string[];
    steps: {
        step: number;
        subheading: string;
        title: string;
        description: string;
        components?: {
            type: string;
            text: string;
        }[];
    }[];
}

// Actual component
export default function BundleComponent({ id, name, description, created, type, steps }: BundleProps) {
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  }

  return (
    <View style={styles.bundle}>
        <View style={styles.bundleTop}>
            <View>
                <Text style={styles.bundleType}>{type}</Text>
                <Text style={styles.heading}>{name}</Text>
            </View>
            <View>
            <TouchableOpacity onPress={handlePress}>
            {isOpen ? <MaterialIcons name='expand-less' size={30} color='#80baa8' />
            : <MaterialIcons name='expand-more' size={30} color='#80baa8' />}
             </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.description}>{description}</Text>

        {/* Steps section of component */}
        {isOpen && 
            <>
            <Text style={styles.owner}>Created by: {created}</Text>
            <View style={styles.step}>
                
                {steps.map((step) => (
                    <View key={step.step} >
                        <Text style={styles.owner}>{step.subheading}</Text>
                        <Text style={styles.heading}>{step.title}</Text>
                        <Text style={styles.description}>{step.description}</Text>
                    </View>
                ))}

                
                
            </View>
        </>
        }
        {/* Run Bundle button */}
        <View style={styles.buttons}>
            <CustomButton text='Run Bundle' icon='terminal' onPress={() => navigation.navigate('Bundle')}  />
            <TouchableOpacity style={{marginLeft: 10, marginTop: 10}}>
                <MaterialIcons name={type === 'Saved' ? 'star' : 'star-outline'} size={30} color='#80baa8'  />
            </TouchableOpacity>
        </View>
    </View>
  );
};

// Component Styles
const styles = StyleSheet.create({
    bundle: {
        backgroundColor: '#20393f',
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
    step: {
        borderTopColor: 'rgba(128, 186, 168, 0.2)',
        borderTopWidth: 1,
        paddingTop: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


// <TextInputDropdown onChangeText={() => {}} onSelectOption={() => {}} options={['Ethereum', 'Bitcoin']} />

/*
<Pressable style={({ pressed }) => [styles.bundle, 
        {
            backgroundColor: pressed ? '#80baa8' : '#20393f',
            borderColor: pressed ? '#9ddbc7' : '#80baa8',
          },
    ]} onPress={() => navigation.navigate('WoopBundle')}>
*/

