import {StyleSheet, Text, View} from "react-native";
import {calculateDataUsedByAllDevices} from "./utils";
import React from "react";
import {UsagePerUser} from "./ProgressBar";

interface BottomPartProps {
    isMultipleDevicesExists: boolean,
    daysLeft: number,
    maximumAllowedCapacityAmount: number,
    usagePerUserData: UsagePerUser[],
}

const BottomPart = ({isMultipleDevicesExists, daysLeft, maximumAllowedCapacityAmount, usagePerUserData}: BottomPartProps) => {
    if (!isMultipleDevicesExists) {
        return (
            <View>
                <Text testID={'singleDeviceMaximumCapacityAllowed'}
                      style={styles.totalInternetCapacityAmount}>{maximumAllowedCapacityAmount}GB</Text>
                <Text testID={'daysLeft'}>({daysLeft} days left)</Text>
            </View>
        )
    }
    return (
        <View style={styles.joinBottomItems}>
            <View>
                <Text testID={'calculateDataUsedByAllDevices'}> All
                    devices {calculateDataUsedByAllDevices(usagePerUserData)} GB</Text>
                <Text testID={'daysLeft'}>({daysLeft} days left)</Text>
            </View>
            <Text testID={'multipleDeviceMaximumCapacityAllowed'}
                  style={styles.totalInternetCapacityAmount}>{maximumAllowedCapacityAmount}GB</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    totalInternetCapacityAmount: {
        textAlign: "right",
        // fontSize: 17,
    },
    joinBottomItems: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

});
export {BottomPart}
