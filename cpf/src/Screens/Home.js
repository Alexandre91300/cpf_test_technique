import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Colors from '../Assets/Colors';

import Header from "../Components/Header";
import ProgressBar from '../Components/ProgressBar';
import Performance from '../Components/Performance';
import Resistance from '../Components/Resistance';

const Home = () => {
    return (
        <>
            <Header />
            <View style={styles.container}>

                <Text style={styles.litleText}>challenge #1</Text>

                <Image
                    style={styles.iconMail}
                    source={require('../Assets/Icons/email2.png')}
                />

                <Text style={styles.strongText}>3Wh</Text>

                <Text style={styles.normalText}>Envoyer un email de 1Mo</Text>

                <ProgressBar pourcent={30} />

                <Performance />

            </View>
            <Resistance />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: Colors.whiteBlue
    },
    litleText: {
        color: Colors.grey,
        fontWeight: 'bold',
        marginVertical: 20
    },
    iconMail: {
        marginBottom: 20,
    },
    strongText: {
        color: Colors.darkBlue,
        fontWeight: 'bold',
        fontSize: 30
    },
    normalText: {
        color: Colors.darkBlue,
        fontSize: 30
    }
});

export default Home;