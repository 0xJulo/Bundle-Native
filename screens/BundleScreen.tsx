import React from 'react';

// React Native imports§
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';

// Component imports
import RunBundleButton from '../components/RunBundleButton';
import ForkBundleButton from '../components/ForkBundleButton';

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
                    <Text style={styles.heading}>{name}</Text>
                    <Text style={{...styles.text, fontSize: 12, marginBottom: 20}}>Created by: {created}</Text>
                </View>
                <Text style={styles.text}>{description}</Text>
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
    },
});

