import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export interface ActiveBarProps {
    currentDeviceUsageInternetCapacityAmount: number,
    allDevicesUsageInternetCapacityAmount: number,
    totalInternetCapacityAmount: number,
    daysLeft: number,

}

const ProgressBar = ({totalInternetCapacityAmount, currentDeviceUsageInternetCapacityAmount, daysLeft, allDevicesUsageInternetCapacityAmount}: ActiveBarProps): React.ReactElement => {

    const currentDevicePercentage = currentDeviceUsageInternetCapacityAmount / totalInternetCapacityAmount * 100;
    const allDevicesPercentage = allDevicesUsageInternetCapacityAmount / totalInternetCapacityAmount *100;
    return (
        <View style={styles.container}>
            <Text style={styles.commonText}>
                <Text style={styles.currentCapacityAmount}>{currentDeviceUsageInternetCapacityAmount}GB</Text> used ({daysLeft} days left)
            </Text>
            <View style={styles.progressBar}>
                <View style={[styles.innerBarAllDevicesStyle, {width: allDevicesPercentage + "%"}]}>
                    <View style={[styles.innerBarCurrentDeviceStyle, {width: currentDevicePercentage + "%"}]}></View>
                </View>
            </View>
            <View style={styles.joinBottomItems}>
                <View style={styles.joinCircleAndAllDevices}>
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}/>
                    </View>
                    <Text> All devices</Text>
                </View>
                <Text style={styles.totalInternetCapacityAmount}>{totalInternetCapacityAmount}GB</Text>
            </View>
        </View>
    )


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
        // backgroundColor: 'green',
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
        height:'100%',
        borderRadius: 5,
        backgroundColor: '#008b02',
    },
    innerBarAllDevicesStyle: {
        height:'100%',
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
    outerCircle: {
        borderRadius: 8,
        width: 16,
        height: 16,
        backgroundColor: 'white',
        padding: 3,
    },
    innerCircle: {
        borderRadius: 4,
        width: 10,
        height: 10,
        backgroundColor: '#c1e1c5'
    },

});

export { ProgressBar }
