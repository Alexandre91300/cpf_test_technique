import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Colors from '../Assets/Colors';

const ProgressBar = ({ pourcent }) => {
    return (
        <View style={styles.container}>

            <View style={styles.progressBarContainer}>

                <View style={[styles.progressBar, { width: `${pourcent}%` }]}>
                    <Image
                        source={require('../Assets/Icons/flash.png')}
                    />
                </View>

                <Text style={styles.text}>{pourcent}Wh</Text>

            </View>

            <Image
                source={require('../Assets/Icons/angleUpDuotone.png')}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    progressBarContainer: {
        width: '95%',
        height: 30,
        borderColor: Colors.ligthBlue,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        marginRight: 5
    },
    progressBar: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 5,
        height: '100%',
        backgroundColor: Colors.ligthBlue,
        borderRadius: 5
    },
    text: {
        color: Colors.darkBlue,
        fontWeight: 'bold',
        transform: [
            { translateX: -20 },
            { translateY: -20 }
        ]
    }
});

export default ProgressBar;