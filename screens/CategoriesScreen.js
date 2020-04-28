import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle'

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {        
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategoryMeals', {
                        categoryId: itemData.item.id
                    })
                }}
            />
        )
    }

    return (        
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={renderGridItem}
            numColumns={2} />
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }    
});

