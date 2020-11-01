import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {IMAGES} from '../assets/images';
import {HeaderPart} from "./HeaderPart";
import {calculateDataUsedByAllDevices} from "./utils";
import {BottomPart} from "./BottomPart";

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


    const allDevicesActualCapacityAmount = calculateDataUsedByAllDevices(usagePerUserData);
    const allDevicesPercentage = allDevicesActualCapacityAmount / maximumAllowedCapacityAmount * 100;

    const createHeaderPart = () => {
        return (
            <HeaderPart usagePerUserData={usagePerUserData} currentUserIndex={currentUserIndex}
                        usageLimitWarningLevel={usageLimitWarningLevel}/>
        );
    }

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

    const createProgressBar = () => {
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

    const createBottomPart = () => {
        return(
            <BottomPart isMultipleDevicesExists={isMultipleDevicesExists}
                        daysLeft={daysLeft}
                        maximumAllowedCapacityAmount={maximumAllowedCapacityAmount}
                        usagePerUserData={usagePerUserData} />
        )
    }

    return (
        <View style={styles.container}>
            {createHeaderPart()}
            {createProgressBar()}
            {createBottomPart()}
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
    // currentCapacityAmount: {
    //     fontWeight: "bold",
    //     // fontSize: 17,
    // },
    // totalInternetCapacityAmount: {
    //     textAlign: "right",
    //     // fontSize: 17,
    // },
    progressBar: {
        height: 12,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    innerBarCurrentDevice: {
        height: '100%',
        borderRadius: 5,
        backgroundColor: '#008b02',
    },
    innerBarAllDevices: {
        flexDirection: "row",
        height: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    joinCircleAndAllDevices: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    // joinBottomItems: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    // },
    // image: {
    //     height: 24,
    //     width: 27,
    // },
});

export {ProgressBar}
