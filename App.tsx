/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {ActiveBar} from './components/ActiveBar';


export default function App() {
    return(
        <View style={styles.body}>
          <Text>Header</Text>
            <ActiveBar
                currentAmount={'10'}
                totalAmount={'20'}/>
        </View>
    );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#CCFFE5',
    height: '100%',
    margin: 0,
  }
});

