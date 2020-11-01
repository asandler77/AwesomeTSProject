import {StyleSheet, View} from "react-native";
import React from "react";
import {UsagePerUser} from "./ProgressBar";
import {calculateDataUsedByAllDevices} from "./utils";

interface ProgressBarPartProps {
    isMultipleDevicesExists: boolean,
    usagePerUserData: UsagePerUser[],
    maximumAllowedCapacityAmount: number,
}

const ProgressBarPart = ({isMultipleDevicesExists, usagePerUserData, maximumAllowedCapacityAmount}: ProgressBarPartProps) => {

    const allDevicesActualCapacityAmount = calculateDataUsedByAllDevices(usagePerUserData);
    const allDevicesPercentage = allDevicesActualCapacityAmount / maximumAllowedCapacityAmount * 100;

    const personalPercentUsage = (privateUsage: number) => {
        return privateUsage / maximumAllowedCapacityAmount * 100;
    }

    const createSingleDeviceProgressBar = (index: number) => {
        return (
            <View
                key={index}
                style={[styles.innerBarCurrentDevice, {width: personalPercentUsage(usagePerUserData[index].usage) + "%"}]}/>
        )
    }

    if (!isMultipleDevicesExists) {
        return (
            <View style={styles.progressBar}>
                {createSingleDeviceProgressBar(0)}
            </View>
        )
    }
    return (
        <View style={styles.progressBar}>
            <View style={[styles.innerBarAllDevices, {width: allDevicesPercentage + "%"}]}>
                {usagePerUserData.map((item, index) => createSingleDeviceProgressBar(index))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        height: 12,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    innerBarAllDevices: {
        flexDirection: "row",
        height: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    innerBarCurrentDevice: {
        height: '100%',
        borderRadius: 5,
        backgroundColor: '#008b02',
    },
});


export {ProgressBarPart}
