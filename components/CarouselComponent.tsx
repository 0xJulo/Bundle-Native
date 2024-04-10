import React, { useRef } from 'react';

// React Native imports
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

// Component imports
import CustomButton from './CustomButton';

const { width } = Dimensions.get('window');

const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
];

// Actual component
export default function Carousel() {
    const flatListRef = useRef<FlatList>(null);

    const handleSnapToItem = (index: number) => {
        flatListRef.current?.scrollToIndex({ index, animated: true });
    };

    const renderItem = ({ item }: { item: (typeof data)[0] }) => (
        <View style={{ width, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );

    return (
        <>
            <View>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={({ nativeEvent }) => {
                        const index = Math.round(nativeEvent.contentOffset.x / width);
                        handleSnapToItem(index);
                      }}
                />
            </View>
        </>
    );
};

// Component styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#80baa8',
    }
});
