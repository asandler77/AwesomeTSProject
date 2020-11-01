import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {UsagePerUser} from "./ProgressBar";
import {IMAGES} from "../assets/images";
import {calculateDataUsedByAllDevices} from "./utils";

interface HeaderPartProps {
    usagePerUserData: UsagePerUser[],
    currentUserIndex: number,
    usageLimitWarningLevel: number,
}

const HeaderPart = ({usagePerUserData, currentUserIndex, usageLimitWarningLevel}: HeaderPartProps) => {

    const allDevicesActualCapacityAmount = calculateDataUsedByAllDevices(usagePerUserData);
    const showUsageWarning = () => {
        if (allDevicesActualCapacityAmount > usageLimitWarningLevel) {
            return (
                <Image
                    testID={'warning_image_testID'}
                    source={IMAGES.USAGE_WARNING}
                    style={styles.image}
                />
            )
        }
    }

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
const styles = StyleSheet.create({
    image: {
        height: 24,
        width: 27,
    },
    joinBottomItems: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    currentCapacityAmount: {
        fontWeight: "bold",
        // fontSize: 17,
    },
});

export {HeaderPart}
