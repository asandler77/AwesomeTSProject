import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';


export interface ActiveBarProps {
    totalAmount: number,
    currentAmount: number

}

//why const and not export default functional component?  ReactElement or ReactNode
const Capacity = ({totalAmount, currentAmount}: ActiveBarProps): React.ReactElement => {

    const currentPercentage = currentAmount / totalAmount * 100;
    return (
        <View style={styles.container}>
            <Text>
                <Text style={styles.currentAmount}>{currentAmount}GB</Text> used (3 days left)
            </Text>
            <View style={styles.progressBar}>
                <Animated.View style={[styles.innerBarStyle, {width: currentPercentage + "%"}]}/>
            </View>
            <Text style={styles.totalAmountContainer}>{totalAmount}GB</Text>
        </View>
    )


};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F6F6',
        height: '15%',
        width: '90%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    currentAmount: {
        fontWeight: "bold",
    },
    totalAmountContainer: {
        backgroundColor: 'green',
        textAlign: "right",
    },
    progressBar: {
        height: 15,
        width: '85%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
    },
    innerBarStyle: {
        height:'100%',
        borderRadius: 5,
        backgroundColor: 'green',
    },
});

export { Capacity }
