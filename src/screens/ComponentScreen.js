import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    let name = "SURYA"
    return (
        <View>
            <Text style={styles.textStyle}>Component Screen</Text>
            <Text style={styles.subHeader}>{name}</Text>
        </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 12
    }
});

export default ComponentScreen;