import React, { useState } from 'react';

// React Native imports
import { View, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Component Structure
type ConditionProps = {
    children: React.ReactNode;
};

// Actual component
export default function Condition({children}: ConditionProps) {
  return (
    <>
      <View style={styles.actionHeading}>
        <Text>Action</Text>
        <MaterialIcons name='send' size={25} color='#192d32' />
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
        width: '100%',
        backgroundColor: '#EEECEC',
        borderColor: '#D3D3D3',
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: 15,
        marginBottom: 10,
    },
    actionHeading: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopEndRadius: 12,
      borderTopStartRadius: 12,
      backgroundColor: '#80BAA8',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 8,
      paddingBottom: 8,
      marginTop: 10,
    }
});
