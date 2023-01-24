import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreens, ListSales } from '../Screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Ventas'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Ventas') iconName = 'calculator-outline';
          if (route.name === 'ListSales') iconName = 'list';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarActiveBackgroundColor: '#ccc5cc',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name='Ventas' component={HomeScreens} />
      <Tab.Screen name='ListSales' component={ListSales} options={{ title: 'Listado de ventas' }} />
    </Tab.Navigator>
  );
};
export default MainTabs;
