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
    usagePerUserData.push({userName: "Alexey", usage: 10});
    usagePerUserData.push({userName: "John", usage: 15});
    usagePerUserData.push({userName: "Bill", usage: 10});
    usagePerUserData.push({userName: "Anton", usage: 10});

    return (
        <View style={styles.body}>
            <ProgressBar
                maximumAllowedCapacityAmount={50}
                daysLeft={5}
                isMultipleDevicesExists={false}
                usagePerUserData={usagePerUserData}
                currentUserIndex={0}
                usageLimitWarningLevel={30}
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

