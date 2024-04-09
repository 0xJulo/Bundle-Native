import React, { useState} from 'react';

// Example data
import { ExampleDataProvider } from './ExampleDataStore';

// React Native imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen imports
import ConnectionScreen from './screens/ConnectionScreen';
import DashboardScreen from './screens/DashboardScreen';
import NewBundleScreen from './screens/NewBundleScreen';
import WalletConnectionsScreen from './screens/WalletConnectionsScreen';
import BundleScreen from './screens/BundleScreen';
import WoopBundleScreen from './screens/WoopBundleScreen';

// Component imports
import Header from './components/Header';

// Create a navigation stack
const Stack = createNativeStackNavigator();

export default function App() {
  const [isConnected, setIsConnected] = useState(true);

  const setConnected = () => {
    setIsConnected(!isConnected);
  }
  return (
    <ExampleDataProvider>
      <NavigationContainer>
        {isConnected ? (
          <ConnectionScreen setConnected={setConnected} />
        ) : (
          <>
            <Header />
              <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#80baa8' } }}>
                <Stack.Screen 
                  name="Dashboard" 
                  component={DashboardScreen} 
                  options={{ headerShown: false}} 
                />
                <Stack.Screen 
                  name="NewBundle" 
                  component={NewBundleScreen} 
                  options={{ headerShown: false, animation: 'slide_from_right' }} 
                />
                <Stack.Screen 
                  name="WalletConnections" 
                  component={WalletConnectionsScreen} 
                  options={{ headerShown: false, animation: 'slide_from_right' }} 
                />
                <Stack.Screen 
                  name="Bundle" 
                  component={BundleScreen} 
                  options={{ headerShown: false, 
                  animation: 'slide_from_right' }} 
                />
                <Stack.Screen 
                  name="WoopBundle" 
                  component={WoopBundleScreen} 
                  options={{ headerShown: false, 
                  animation: 'slide_from_right' }} 
                />
              </Stack.Navigator>
            </>
        )}
        </NavigationContainer>
      </ExampleDataProvider>
  );
};
