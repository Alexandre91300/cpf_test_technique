import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

import Colors from '../Assets/Colors';

const Challenge = () => {
    
    return (
        <>
                <Image
                    style={styles.icon}
                    source={require('../Assets/Icons/email2.png')}
                />
                <Text style={styles.strongText}>3Wh</Text>
                <Text style={styles.normalText}>Envoyer un email de 1Mo</Text>
        </>
    );
};

const styles = StyleSheet.create({
    icon: {
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

export default Challenge;