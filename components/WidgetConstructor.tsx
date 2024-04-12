import React, { useState } from 'react';

// React Native imports
import { View, StyleSheet } from 'react-native';

// Component Structure
type WidgetProps = {
    children: React.ReactNode;
};

// Actual component
export default function Widget({children}: WidgetProps) {
  return (
    <View style={styles.bundle}>
        {children}
    </View>
  );
};

// Component Styles
const styles = StyleSheet.create({
    bundle: {
        backgroundColor: '#20393f',
        borderColor: 'rgba(128, 186, 168, 0.2)',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        margin: 10,
    },
});
