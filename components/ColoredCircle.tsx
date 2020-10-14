import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Colores {
    innerBackGroundColor: string,
    outerBackGroundColor: string,
}

const ColoredCircle = ({innerBackGroundColor, outerBackGroundColor}: Colores): React.ReactElement => {

    return(
        <View style={[styles.outerCircle, {backgroundColor: outerBackGroundColor}]}>
            <View style={[styles.innerCircle, {backgroundColor: innerBackGroundColor}]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    outerCircle: {
        borderRadius: 8,
        width: 16,
        height: 16,
        // backgroundColor: 'white',
        padding: 3,
    },
    innerCircle: {
        borderRadius: 4,
        width: 10,
        height: 10,
        // backgroundColor: '#c1e1c5'
    },
})

export { ColoredCircle };
