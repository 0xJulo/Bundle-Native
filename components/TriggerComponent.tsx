import React, { useState } from 'react';

// React Native imports
import { View, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Component Structure
type TriggerProps = {
    children: React.ReactNode;
};

// Actual component
export default function Trigger({children}: TriggerProps) {
  return (
    <>
      <View style={styles.actionHeading}>
        <MaterialIcons name='start' size={25} color='#192d32' style={{marginRight: 5}} />
        <Text>Start</Text>
      </View>
      <View style={styles.bundle}>
          {children}
      </View>
    </>
  );
};

// Component Styles
const styles = StyleSheet.create({
    bundle: {
        width: '90%',
        backgroundColor: '#EEECEC',
        borderColor: '#D3D3D3',
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: 15,
    },
    actionHeading: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderTopEndRadius: 12,
      borderTopStartRadius: 12,
      backgroundColor: '#80BAA8',
      paddingLeft: 15,
      paddingTop: 8,
      paddingBottom: 8,
    }
});
