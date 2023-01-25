import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Admin, HomeScreens, ListSales, Summary } from '../Screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Sales'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Sales') iconName = 'calculator';
          if (route.name === 'ListSales') iconName = 'list';
          if (route.name === 'Summary') iconName = 'list-alt';
          if (route.name === 'Admin') iconName = 'bars';
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#80cbc4',
        tabBarActiveBackgroundColor: '#eceff1',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name='Sales' component={HomeScreens} options={{ title: 'Ventas' }} />
      <Tab.Screen name='ListSales' component={ListSales} options={{ title: 'Listado de ventas' }} />
      <Tab.Screen name='Summary' component={Summary} options={{ title: 'Resumen' }} />
      <Tab.Screen name='Admin' component={Admin} options={{ title: 'Administración' }} />
    </Tab.Navigator>
  );
};
export default MainTabs;
