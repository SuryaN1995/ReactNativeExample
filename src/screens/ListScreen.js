import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    let list = [
        { name: "friend 1" },
        { name: "friend 2" },
        { name: "friend 3" },
        { name: "friend 4" },
        { name: "friend 5" },
        { name: "friend 6" },
        { name: "friend 7" },
        { name: "friend 8" },
        { name: "friend 9" },
        { name: "friend 10" },
        { name: "friend 11" },
        { name: "friend 12" },
        { name: "friend 13" },
        { name: "friend 14" },
        { name: "friend 15" },
        { name: "friend 16" },
        { name: "friend 17" },
        { name: "friend 18" },
        { name: "friend 19" },
        { name: "friend 20" },
    ];
    return (
        <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
            keyExtractor={list => list.name}
            data={list}
            renderItem={({ item }) => {
                return <Text style ={styles.textStyle}>{item.name}</Text>;
            }
            }
        />
    );
};

const styles = StyleSheet.create({
    textStyle :{
        margin : 40
    }
})

export default ListScreen;