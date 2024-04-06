import React from 'react';

// React Native imports§
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Typescript props for navigation
type NavigatorParams = {
    Dashboard: undefined;
}

const NewBundleScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigatorParams>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Wallet Connections</Text>
                <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    text: {
        color: 'black',
        fontSize: 24,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
});

export default NewBundleScreen;

