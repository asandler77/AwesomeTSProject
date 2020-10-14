/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View,} from 'react-native';
import {ProgressBar, UsagePerUser} from './components/ProgressBar';


export default function App() {
    const usagePerUserData: UsagePerUser[] = [];
    usagePerUserData.push({userName: "Alexey", usage: 9});
    usagePerUserData.push({userName: "John", usage: 4});
    usagePerUserData.push({userName: "Bill", usage: 2});
    usagePerUserData.push({userName: "Anton", usage: 3.5});

    return (
        <View style={styles.body}>
            <ProgressBar
                currentDeviceUsageInternetCapacityAmount={10}
                allDevicesUsageInternetCapacityAmount={40}
                totalInternetCapacityAmount={50}
                daysLeft={5}
                isMultipleDevicesExists={true}
                usagePerUserData={usagePerUserData}
                currentUserIndex={1}
            />
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

