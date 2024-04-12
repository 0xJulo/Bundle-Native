import React from 'react';

// React Native imports§
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Component imports
import RunBundleButton from '../components/RunBundleButton';
import ForkBundleButton from '../components/ForkBundleButton';
import TextInputDropdown from '../components/TextInputDropdown';

// Typescript props for navigation
type NavigatorParams = {
    Dashboard: undefined;
    Bundle: {
        id: number;
        name: string;
        description: string;
        created: string;
        owner: string;
        type: string;
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
    };
}

type BundleScreenRouteProp = RouteProp<NavigatorParams, 'Bundle'>;

// Actual component
export default function BundleScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();
    const route = useRoute<BundleScreenRouteProp>();
    const { id, name, description, created, owner, type, steps } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Button title="Back" onPress={() => navigation.goBack()} />
                <View>
                    <Text style={{...styles.text, fontSize: 12, marginTop: 20, marginBottom: 5}}>Created by: {created}</Text> 
                    <Text style={styles.heading}>{name}</Text>
                </View>
                <Text style={styles.text}>{description}</Text>
                
                <View style={styles.bundle}>
                <View style={styles.bundleTop}>
                    <View>
                        <Text style={styles.bundleType}>Step 01</Text>
                        <Text style={styles.bundleHeading}>Create Woop Payment Link</Text>
                    </View>
                    <View>
                        <MaterialIcons
                                name='check-circle'
                                size={30}
                                color='#80baa8'
                        />
                    </View>
                </View>
                
                <TextInputDropdown
                    onChangeText={(text) => console.log(text)}
                    onSelectOption={(option) => console.log(option)}
                    options={[]}
                />
            </View>
                
            </View>
            
            <View>
                    <RunBundleButton />
                    <ForkBundleButton />
                </View>
        </SafeAreaView>
    );
};

// Component styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#192d32',
        marginHorizontal: 20,
    },
    text: {
        color: '#80baa8',
        fontSize: 18,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#192d32',
    },
    heading: {
        fontSize: 32,
        color: '#80baa8',
        marginBottom: 20,
    },
    bundle: {
        backgroundColor: '#20393f',
        borderColor: '#80baa8',
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        margin: 10,
    },
    bundleTop: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bundleType: {
        fontSize: 12,
        marginBottom: 5,
        color: '#80baa8',
    },
    bundleHeading: {
        fontSize: 20,
        marginBottom: 2,
        color: '#80baa8',
    },
});

