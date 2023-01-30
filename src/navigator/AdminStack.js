import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin, CashWithdrawals, ChangeDate, Summary, Users } from '../Screens';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  const { currentDay } = useSelector((state) => state.movementsOfTheDay);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name='admin' component={Admin} options={{ title: 'Administración' }} />
      <Stack.Screen name='users' component={Users} options={{ title: 'Administración de usuarios' }} />
      <Stack.Screen name='summary' component={Summary} options={{ title: `Resumen del Día ${currentDay}` }} />
      <Stack.Screen name='cashWithdrawals' component={CashWithdrawals} options={{ title: 'Retiro de efectivo' }} />
      <Stack.Screen name='changeDate' component={ChangeDate} options={{ title: 'Cambiar fecha' }} />
    </Stack.Navigator>
  );
};
export default AdminStack;
