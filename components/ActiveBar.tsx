import React from 'react';
import {Text, View,} from 'react-native';


export interface ActiveBarProps {
    totalAmount: string,
    currentAmount: string

}

//why const and not export default functional component?
const ActiveBar = ({totalAmount, currentAmount}: ActiveBarProps): React.ReactElement => {


    return (
        <View>
            <Text>{totalAmount}</Text>
            <Text>{currentAmount}</Text>
        </View>
    )


};

export { ActiveBar }
