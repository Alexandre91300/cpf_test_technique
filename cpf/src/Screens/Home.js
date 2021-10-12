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

                <Performance/>

            </View>
            <Resistance/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: Colors.whiteBlue
    },
    litleText: {
        marginBottom: 10,
        color: Colors.grey
    },
    iconMail: {
        marginBottom: 10,
    },
    strongText: {
        color: Colors.darkBlue,
        fontWeight: 'bold',
        fontSize: 25
    },
    normalText: {
        color: Colors.darkBlue,
        fontSize: 25
    }
})
export default Home;