import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';

// React Native imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen imports
import ConnectionScreen from './screens/ConnectionScreen';
import DashboardScreen from './screens/DashboardScreen';
import NewBundleScreen from './screens/NewBundleScreen';
import WalletConnectionsScreen from './screens/WalletConnectionsScreen';

// Component imports
import Header from './components/Header';

// Create a navigation stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
        <NavigationContainer>
          <Header />
          <Stack.Navigator>
            <Stack.Screen name="Connection" component={ConnectionScreen} options={{ headerShown: false}} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false}} />
            <Stack.Screen name="NewBundle" component={NewBundleScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="WalletConnections" component={WalletConnectionsScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
