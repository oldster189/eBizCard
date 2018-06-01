import { createTabNavigator } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
 
import * as Pages from '../pages';

export const TabPage = createTabNavigator({
    Main: {
        screen: Pages.Main,
        navigationOptions: {
            tabBarLabel: 'Main',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcon name='home' size={30} color={tintColor} />
            )
        }
    },
    Storage: {
        screen: Pages.Storage,
        navigationOptions: {
            tabBarLabel: 'Storage',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcon name='home' size={30} color={tintColor} />
            )
        }
    }
})