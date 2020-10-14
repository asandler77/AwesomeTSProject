import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ColoredCircle} from "./ColoredCircle";

export interface ActiveBarProps {
    currentDeviceUsageInternetCapacityAmount: number,
    allDevicesUsageInternetCapacityAmount: number,
    totalInternetCapacityAmount: number,
    daysLeft: number,
    isMultipleDevicesExists: boolean,
}

const ProgressBar = ({totalInternetCapacityAmount, currentDeviceUsageInternetCapacityAmount, daysLeft, allDevicesUsageInternetCapacityAmount, isMultipleDevicesExists}: ActiveBarProps): React.ReactElement => {
    const currentDevicePercentage = currentDeviceUsageInternetCapacityAmount / totalInternetCapacityAmount * 100;
    const allDevicesPercentage = allDevicesUsageInternetCapacityAmount / totalInternetCapacityAmount * 100;

    const createHeaderPart = () => {
return (
    <Text style={styles.commonText}>
        <Text style={styles.currentCapacityAmount}>{currentDeviceUsageInternetCapacityAmount}GB</Text> used
        ({daysLeft} days left)
    </Text>
)
    }

    const createSingleDeviceProgressBar = () => {
        return (
            <View style={[styles.innerBarCurrentDeviceStyle, {width: currentDevicePercentage + "%"}]}/>
        )
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
                        {createSingleDeviceProgressBar()}
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
                    <View style={styles.joinCircleAndAllDevices}>
                        <ColoredCircle
                            innerBackGroundColor={'#c1e1c5'}
                            outerBackGroundColor={'white'}
                        />
                        <Text> All devices</Text>
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
        fontSize: 17,
    },
    totalInternetCapacityAmount: {
        textAlign: "right",
        fontSize: 17,
    },
    commonText: {
        fontSize: 17,
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
