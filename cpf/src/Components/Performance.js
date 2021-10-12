import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import Colors from "../Assets/Colors";

const Performance = () => {
    return (
        <View style={styles.container} >

            <View style={styles.card}>
                <Text style={styles.textBold}>7W</Text>
            </View>

            <View style={[styles.card, { marginHorizontal: 10 }]}>
                <Text style={styles.textBold}>
                    12<Text style={styles.textLittle}>km/h</Text>
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.textBold}>
                    83<Text style={styles.textLittle}>RPM</Text>
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    card: {
        backgroundColor: Colors.green,
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5
    },
    textBold: {
        color: Colors.darkBlue,
        fontWeight: 'bold',
        fontSize: 25
    },
    textLittle:{
        fontSize: 12
    }
})

export default Performance;