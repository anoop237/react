/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Name from './Name';
export default class App extends Component < {} > {
    render() {
        return (
            <View style = {styles.container}>
                <View style = { styles.imagecontainer}>
                    <Name />
                    <Text style = {styles.welcome}>
                    Anoop Kumar
                    </Text>
                    <Text style = { styles.welcome } >
                    Software Engineer at Provab Technosoft Pvt.Ltd.
                    </Text>
                </View>
                <Text style = {styles.info}>
                Email: anoop237kumar1993 @gmail.com
                </Text>
                <Text style ={styles.info}>
                Contact: 8604303962
                </Text>
                <Text style = {styles.info}>
                Qualification: B.Tech
                </Text>
                <Text style = {styles.info}>
                College: Rajkiya Engineering College, Banda
                </Text>
                <Text style = {styles.info}>
                Experience: 1 + years
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    imagecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    info: {
        color: '#000',
        fontSize: 14,
        textAlign: 'left',
        backgroundColor: '#eee',
        marginTop: 10,
        padding: 10
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#38e0b3',
    },
});