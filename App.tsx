import React, { useState, useEffect } from 'react';

// Example data
import { ExampleDataProvider } from './ExampleDataStore';

// React Native imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useExampleData } from './ExampleDataStore';

// Screen imports
import ConnectionScreen from './screens/ConnectionScreen';
import DashboardScreen from './screens/DashboardScreen';
import NewBundleScreen from './screens/NewBundleScreen';
import WalletConnectionsScreen from './screens/WalletConnectionsScreen';
import BundleScreen from './screens/BundleScreen';
import WoopBundleScreen from './screens/WoopBundleScreen';
import LoadingScreen from './screens/LoadingScreen';

// Component imports
import Header from './components/Header';

// Create a navigation stack
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { connectionStatus } = useExampleData();

  if (connectionStatus.isLoading) {
    return <LoadingScreen />
  }

  return (
    !connectionStatus.isConnected ? (
      <ConnectionScreen />
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
            <Stack.Screen 
              name="Loading" 
              component={LoadingScreen} 
              options={{ headerShown: false, 
              animation: 'slide_from_right' }} 
            />
          </Stack.Navigator>
        </>
    )
  );
};

export default function App() {
  return (
    <ExampleDataProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ExampleDataProvider>
  );
};
