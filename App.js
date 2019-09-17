import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageDetail from './src/ReusableComponents/ImageDetail';
import ImageDisplay from './src/screens/ImageDisplay';

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Component: ComponentScreen,
        List : ListScreen,
        ImageDisplay : ImageDisplay,
        ImageDetail : ImageDetail  
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App'
        }
    }
);

export default createAppContainer(navigator);
