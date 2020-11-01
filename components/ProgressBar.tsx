import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderPart} from "./HeaderPart";
import {BottomPart} from "./BottomPart";
import {ProgressBarPart} from "./ProgressBarPart";

export interface UsagePerUser {
    userName: string,
    usage: number,
}

export interface ActiveBarProps {
    maximumAllowedCapacityAmount: number,
    daysLeft: number,
    isMultipleDevicesExists: boolean,
    usagePerUserData: UsagePerUser[],
    currentUserIndex: number,
    usageLimitWarningLevel: number,
}

const ProgressBar = ({maximumAllowedCapacityAmount, daysLeft, isMultipleDevicesExists, usagePerUserData, currentUserIndex, usageLimitWarningLevel}: ActiveBarProps): React.ReactElement => {

    return (
        <View style={styles.container}>
            <HeaderPart usagePerUserData={usagePerUserData}
                        currentUserIndex={currentUserIndex}
                        usageLimitWarningLevel={usageLimitWarningLevel}/>
            <ProgressBarPart isMultipleDevicesExists={isMultipleDevicesExists}
                             usagePerUserData={usagePerUserData}
                             maximumAllowedCapacityAmount={maximumAllowedCapacityAmount}/>
            <BottomPart isMultipleDevicesExists={isMultipleDevicesExists}
                        daysLeft={daysLeft}
                        maximumAllowedCapacityAmount={maximumAllowedCapacityAmount}
                        usagePerUserData={usagePerUserData}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F6F0',
        height: 110,
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingBottom: 10,
        fontSize: 50,
    },
    joinCircleAndAllDevices: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
});

export {ProgressBar}
