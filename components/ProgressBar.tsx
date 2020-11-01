import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {IMAGES} from '../assets/images';

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


    const usedByAllDevices = () => {
        let totalUsedAmount: number = 0;
        if (usagePerUserData !== null && usagePerUserData.length > 0) {
            for (const x of usagePerUserData) {
                totalUsedAmount += x.usage
            }
        }
        return totalUsedAmount;
    }

    const allDevicesActualCapacityAmount = usedByAllDevices();
    const allDevicesPercentage = allDevicesActualCapacityAmount / maximumAllowedCapacityAmount * 100;

    const showUsageWarning = () => {
            if(allDevicesActualCapacityAmount > usageLimitWarningLevel) {
                return(
                <Image
                    testID={'warning_image_testID'}
                    source={IMAGES.USAGE_WARNING}
                    style={styles.imageStyle}
                />
                )
            }
    }


    const createHeaderPart = () => {
        return (
            <View style={styles.joinBottomItems}>
                <Text>
                    <Text style={styles.currentCapacityAmount}>{usagePerUserData[currentUserIndex].usage}GB</Text> used
                    by {usagePerUserData[currentUserIndex].userName}
                </Text>
                {showUsageWarning()}
            </View>
        )
    }

    const personalPercentUsage = (privateUsage: number) => {
        return privateUsage / maximumAllowedCapacityAmount * 100;
    }

    const createSingleDeviceProgressBar = (index: number) => {
        return (
            <View
                key={index}
                style={[styles.innerBarCurrentDeviceStyle, {width: personalPercentUsage(usagePerUserData[index].usage) + "%"}]}/>
        )
    }

    const createProgressBar = () => {
        if (!isMultipleDevicesExists) {
            return (
                <View style={styles.progressBar}>
                    {createSingleDeviceProgressBar(0)}
                </View>
            )
        } else {
            return (
                <View style={styles.progressBar}>
                    <View style={[styles.innerBarAllDevicesStyle, {width: allDevicesPercentage + "%"}]}>
                        {usagePerUserData.map((item, index) => createSingleDeviceProgressBar(index))}

                    </View>
                </View>
            )
        }
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
                        <Text> All devices {usedByAllDevices()} GB</Text>
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
    currentCapacityAmount: {
        fontWeight: "bold",
        // fontSize: 17,
    },
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
    innerBarCurrentDeviceStyle: {
        height: '100%',
        borderRadius: 5,
        backgroundColor: '#008b02',
    },
    innerBarAllDevicesStyle: {
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
    imageStyle: {
        height: 36,
        width: 27,
    },
});

export {ProgressBar}
