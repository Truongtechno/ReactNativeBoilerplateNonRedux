import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Home';
import DetailScreen from '../Detail';


export default StackNavigator({
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
}, {
        headerMode: 'none'
    });
