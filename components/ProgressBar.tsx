import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export interface ActiveBarProps {
    usedInternetCapacityAmount: number,
    totalInternetCapacityAmount: number,
    daysLeft: number,

}

const ProgressBar = ({totalInternetCapacityAmount, usedInternetCapacityAmount, daysLeft}: ActiveBarProps): React.ReactElement => {

    const currentPercentage = usedInternetCapacityAmount / totalInternetCapacityAmount * 100;
    return (
        <View style={styles.container}>
            <Text style={styles.commonText}>
                <Text style={styles.currentCapacityAmount}>{usedInternetCapacityAmount}GB</Text> used ({daysLeft} days left)
            </Text>
            <View style={styles.progressBar}>
                <View style={[styles.innerBarStyle, {width: currentPercentage + "%"}]}/>
            </View>
            <Text style={styles.totalInternetCapacityAmount}>{totalInternetCapacityAmount}GB</Text>
        </View>
    )


};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F6F6',
        height: '12%',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
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
    innerBarStyle: {
        height:'100%',
        borderRadius: 5,
        backgroundColor: 'green',
    },
});

export { ProgressBar }
