import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface UsagePerUser {
    userName: string,
    usage: number,
}

export interface ActiveBarProps {
    currentDeviceUsageInternetCapacityAmount: number,
    allDevicesUsageInternetCapacityAmount: number,
    totalInternetCapacityAmount: number,
    daysLeft: number,
    isMultipleDevicesExists: boolean,
    usagePerUserData: UsagePerUser[],
    currentUserIndex: number,
}

const ProgressBar = ({totalInternetCapacityAmount, currentDeviceUsageInternetCapacityAmount, daysLeft, allDevicesUsageInternetCapacityAmount, isMultipleDevicesExists, usagePerUserData, currentUserIndex}: ActiveBarProps): React.ReactElement => {
    const currentDevicePercentage = currentDeviceUsageInternetCapacityAmount / totalInternetCapacityAmount * 100;
    const allDevicesPercentage = allDevicesUsageInternetCapacityAmount / totalInternetCapacityAmount * 100;

    // maybe to get this value calculated via pops ???
    const usedByAllDevices = () => {
        let totalUsedAmount: number = 0;
        if (usagePerUserData !== null && usagePerUserData.length > 0) {
            for (const x of usagePerUserData) {
                totalUsedAmount += x.usage
            }
            return totalUsedAmount;
        }
    }

    const createHeaderPart = () => {
return (
    <Text style={styles.commonText}>
        <Text style={styles.currentCapacityAmount}>{currentDeviceUsageInternetCapacityAmount}GB</Text> used by {usagePerUserData[currentUserIndex].userName}
    </Text>
)
    }

    const createSingleDeviceProgressBar = () => {
        return (
            <View style={[styles.innerBarCurrentDeviceStyle, {width: currentDevicePercentage + "%"}]}/>
        )
    }

    const createMultipleUserUsageBar = () => {
        return createSingleDeviceProgressBar();
    }

    const createProgressBar = () => {
        if (!isMultipleDevicesExists) {
            return (
                <View style={styles.progressBar}>
                    {createSingleDeviceProgressBar()}
                </View>
            )
        } else {
            return (
                <View style={styles.progressBar}>
                    <View style={[styles.innerBarAllDevicesStyle, {width: allDevicesPercentage + "%"}]}>
                        {/*{createSingleDeviceProgressBar()}*/}
                        {/*{createSingleDeviceProgressBar()}*/}
                        {createMultipleUserUsageBar()}
                    </View>
                </View>
            )
        }
    }



    const createBottomPart = () => {
        if (!isMultipleDevicesExists) {
            return (
                <Text style={styles.totalInternetCapacityAmount}>{totalInternetCapacityAmount}GB</Text>
            )
        } else {
            return (
                <View style={styles.joinBottomItems}>
                    <View>
                        <Text> All devices {usedByAllDevices()} GB</Text>
                        <Text>({daysLeft} days left)</Text>
                    </View>
                    <Text style={styles.totalInternetCapacityAmount}>{totalInternetCapacityAmount}GB</Text>
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
    commonText: {
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
        backgroundColor: '#C1E1C5',
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
