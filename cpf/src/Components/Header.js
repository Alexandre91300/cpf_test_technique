import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from "../Assets/Colors";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.counter}>0:31:23</Text>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>STOP</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

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
})

export default Header;