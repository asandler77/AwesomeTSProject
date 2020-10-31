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
    usagePerUserData.push({userName: "Alexey", usage: 5});
    usagePerUserData.push({userName: "John", usage: 10});
    usagePerUserData.push({userName: "Bill", usage: 20});
    usagePerUserData.push({userName: "Anton", usage: 15});

    return (
        <View style={styles.body}>
            <ProgressBar
                maximumAllowedCapacityAmount={50}
                daysLeft={5}
                isMultipleDevicesExists={true}
                usagePerUserData={usagePerUserData}
                currentUserIndex={0}
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

