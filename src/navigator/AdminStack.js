import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin, CashWithdrawals, ChangeDate, Summary, Users } from '../Screens';
import { CurrentDay } from '../components';
import MonthlySummaryStack from './MonthlySummaryStack';

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
      <Stack.Screen
        name='summary'
        component={Summary}
        options={{ headerTitle: () => <CurrentDay msg={'Resumen del día'} /> }}
      />
      <Stack.Screen name='cashWithdrawals' component={CashWithdrawals} options={{ title: 'Retiro de efectivo' }} />
      <Stack.Screen name='changeDate' component={ChangeDate} options={{ title: 'Cambiar fecha' }} />
      <Stack.Screen
        name='monthlySummaryStack'
        component={MonthlySummaryStack}
        options={{ headerShown: false, title: 'Resumen mensual' }}
      />
    </Stack.Navigator>
  );
};
export default AdminStack;
