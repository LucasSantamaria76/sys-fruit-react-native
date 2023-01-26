import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin, CashWithdrawals, Summary, Users } from '../Screens';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name='admin' component={Admin} options={{ title: 'Administración' }} />
      <Stack.Screen name='users' component={Users} options={{ title: 'Administración de usuarios' }} />
      <Stack.Screen name='summary' component={Summary} options={{ title: 'Resumen del Día' }} />
      <Stack.Screen name='cashWithdrawals' component={CashWithdrawals} options={{ title: 'Retiro de efectivo' }} />
    </Stack.Navigator>
  );
};
export default AdminStack;
