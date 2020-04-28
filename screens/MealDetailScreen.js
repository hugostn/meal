import React from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = (props) => {
    //const mealId = props.navigation.getParam('mealId');
    //const selecttedMeal = MEALS.filter(meal => meal.id === mealId)

    return (        
        <View style={styles.screen}>            
            <Button title="Go Back to my Categories ss" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View> 
    )
}


MealDetailScreen.navigationOptions = (navigationData) => {
    
    const mealId = navigationData.navigation.getParam('mealId');
    const selecttedMeal = MEALS.filter(meal => meal.id === mealId)
    return {
        headerTitle: selecttedMeal.title
    }
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
});

