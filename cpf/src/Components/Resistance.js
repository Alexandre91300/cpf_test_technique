import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import Colors from "../Assets/Colors";

const Resistance = () => {

    // 30 barres

    // 18
    return (
        <View style={styles.container}>
            <Text style={styles.title}>RESISTANCE</Text>
            <View style={styles.progressContainer}>

                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />

                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                <View style={styles.barColored} />
                
                <View style={styles.thisBar}>
                    <View style={[styles.barColored, { height: 50 }]} />
                    <Text style={styles.text}>6.3</Text>
                </View>

                <View style={styles.bar} />
                <View style={styles.bar} />

                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
                <View style={styles.bar} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },
    title: {
        color: Colors.grey,
        marginBottom: 20
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    bar: {
        width: 8,
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors.ligthGrey
    },
    barColored: {
        width: 8,
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors.red
    },
    thisBar:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        position: 'absolute',
        width: 30,
        textAlign: 'center',
        transform:[
            {translateY: 40}
        ],
        color: Colors.red,
        fontWeight: 'bold'
    }
})

export default Resistance;