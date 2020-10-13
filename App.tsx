/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {Capacity} from './components/Capacity';


export default function App() {
    return (
        <View style={styles.body}>
            <Text>Header</Text>
            <Capacity
                currentAmount={10}
                totalAmount={50}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
    }
});

