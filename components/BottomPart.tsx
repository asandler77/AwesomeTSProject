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
