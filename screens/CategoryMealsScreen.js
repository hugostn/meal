import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}                
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => onSelectMeal(itemData.item.id)}
            />
        );
    }

    const onSelectMeal = (id) => {
        props.navigation.navigate('MealDetail',{
            mealId: id
        })
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem} 
                style={{width:'100%'}}/>

        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id == categoryId);

    return {
        headerTitle: selectedCategory.title
    }
};



export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding:10
    }
});

