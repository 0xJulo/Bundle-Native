import React from 'react';

// React Native imports
import { View, Text, StyleSheet, Button, SafeAreaView  } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    Dashboard: undefined;
}

const ConnectionScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Connection Screen</Text>
                <Button title="Connect" onPress={() => navigation.navigate('Dashboard')} />
            </View>
        </SafeAreaView>
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
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default ConnectionScreen;