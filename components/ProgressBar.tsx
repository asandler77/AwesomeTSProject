import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {IMAGES} from '../assets/images';
import {HeaderPart} from "./HeaderPart";
import {calculateDataUsedByAllDevices} from "./utils";

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


    // const usedByAllDevices = () => {
    //     let totalUsedAmount: number = 0;
    //     if (usagePerUserData !== null && usagePerUserData.length > 0) {
    //         for (const x of usagePerUserData) {
    //             totalUsedAmount += x.usage
    //         }
    //     }
    //     return totalUsedAmount;
    // }

    const allDevicesActualCapacityAmount = calculateDataUsedByAllDevices(usagePerUserData);
    const allDevicesPercentage = allDevicesActualCapacityAmount / maximumAllowedCapacityAmount * 100;

    // const showUsageWarning = () => {
    //     if (allDevicesActualCapacityAmount > usageLimitWarningLevel) {
    //         return (
    //             <Image
    //                 testID={'warning_image_testID'}
    //                 source={IMAGES.USAGE_WARNING}
    //                 style={styles.image}
    //             />
    //         )
    //     }
    // }


    const createHeaderPart = () => {
        return(
            <HeaderPart usagePerUserData={usagePerUserData} currentUserIndex={currentUserIndex} usageLimitWarningLevel={usageLimitWarningLevel} />
        )
    //     return (
    //         <View style={styles.joinBottomItems}>
    //             <Text>
    //                 <Text style={styles.currentCapacityAmount}>{usagePerUserData[currentUserIndex].usage}GB</Text> used
    //                 by {usagePerUserData[currentUserIndex].userName}
    //             </Text>
    //             {showUsageWarning()}
    //         </View>
    //     )
    }
    // <HeaderPart

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
        if (!isMultipleDevicesExists) {
            return (
                <Text style={styles.totalInternetCapacityAmount}>{maximumAllowedCapacityAmount}GB</Text>
            )
        } else {
            return (
                <View style={styles.joinBottomItems}>
                    <View>
                        <Text> All devices {calculateDataUsedByAllDevices(usagePerUserData)} GB</Text>
                        <Text>({daysLeft} days left)</Text>
                    </View>
                    <Text style={styles.totalInternetCapacityAmount}>{maximumAllowedCapacityAmount}GB</Text>
                </View>
            )
        }
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
    totalInternetCapacityAmount: {
        textAlign: "right",
        // fontSize: 17,
    },
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
    joinBottomItems: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    // image: {
    //     height: 24,
    //     width: 27,
    // },
});

export {ProgressBar}
