import React from 'react';

// React Native imports
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    Dashboard: undefined;
}

const ConnectionScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Connection Screen</Text>
            <Button title="Connect" onPress={() => navigation.navigate('Dashboard')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
});

export default ConnectionScreen;