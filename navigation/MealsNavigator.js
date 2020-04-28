import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Plataform } from 'react-native'
import Colors from '../constants/colors'

const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},
{
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'ios' ? 'white' : Colors.primary
    }
}
);

export default createAppContainer(MealNavigator);