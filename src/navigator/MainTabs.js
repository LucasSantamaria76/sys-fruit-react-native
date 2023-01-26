import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreens, ListSales, MerchandisePayments, Summary } from '../Screens';
import { FontAwesome } from '@expo/vector-icons';
import AdminStack from './AdminStack';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Sales'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'sales') iconName = 'calculator';
          if (route.name === 'listSales') iconName = 'list';
          if (route.name === 'extractions') iconName = 'share-square-o';
          if (route.name === 'adminStack') iconName = 'ellipsis-h';
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#80cbc4',
        tabBarActiveBackgroundColor: '#eceff1',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name='sales' component={HomeScreens} options={{ title: 'Ventas' }} />
      <Tab.Screen name='listSales' component={ListSales} options={{ title: 'Listado de ventas' }} />
      <Tab.Screen name='extractions' component={MerchandisePayments} options={{ title: 'Pagos' }} />
      <Tab.Screen name='adminStack' component={AdminStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
export default MainTabs;
