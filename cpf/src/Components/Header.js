import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Assets/Colors';

const Header = ({ timer, timerOn, callBack }) => {



    const minute = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
    const seconde = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
    const milliSeconde = ("0" + ((timer/ 10) % 100)).slice(-2)
    return (
        <View style={styles.header}>

            <Text style={styles.counter}>
                {minute}
                :
                {seconde}
                :
                {milliSeconde}
                </Text>

            <TouchableOpacity
                onPress={() => { 
                    callBack()
                }}
            >
                {timerOn ?
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>STOP</Text>
                    </View>
                    :
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>START</Text>
                    </View>
                }
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: Colors.darkBlue,
    },
    counter: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.whiteBlue,
    },
    button: {
        backgroundColor: Colors.green,
        width: 100,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: Colors.darkBlue,
        fontWeight: 'bold'

    }
});

export default Header;