import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
}

const ProgressBar = ({maximumAllowedCapacityAmount, daysLeft, isMultipleDevicesExists, usagePerUserData, currentUserIndex}: ActiveBarProps): React.ReactElement => {


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

    const createHeaderPart = () => {
        return (
            <Text>
                <Text style={styles.currentCapacityAmount}>{usagePerUserData[currentUserIndex].usage}GB</Text> used
                by {usagePerUserData[currentUserIndex].userName}
            </Text>
        )
    }

    const personalPercentUsage = (privateUsage: number) => {
        return privateUsage / maximumAllowedCapacityAmount * 100;
    }

    const createSingleDeviceProgressBar = (index: number) => {
        console.log('usagePerUserData', usagePerUserData[index].usage)
        return (
            <View
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
                        {createSingleDeviceProgressBar(0)}
                        {createSingleDeviceProgressBar(1)}
                        {createSingleDeviceProgressBar(2)}
                        {createSingleDeviceProgressBar(3)}
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
        backgroundColor: 'red',
    },
    joinCircleAndAllDevices: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    joinBottomItems: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export {ProgressBar}
