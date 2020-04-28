import React from 'react';
import {View, StyleSheet} from 'react-native';

const FavoritiesScreen = (props) =>{
    return (
        <View style={styles.screen}>
            <Text>The Categories</Text>
        </View>
    )
}

export default FavoritiesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
});

