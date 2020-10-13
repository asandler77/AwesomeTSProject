/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {ProgressBar} from './components/ProgressBar';


export default function App() {
    return (
        <View style={styles.body}>
            <ProgressBar
                currentDeviceUsageInternetCapacityAmount={10}
                allDevicesUsageInternetCapacityAmount={40}
                totalInternetCapacityAmount={50}
                daysLeft={5}/>
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

