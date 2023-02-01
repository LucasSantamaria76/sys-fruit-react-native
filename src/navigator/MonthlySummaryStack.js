import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MonthlySummaryDetails } from '../components';
import { MonthlySummary } from '../Screens';

const Stack = createNativeStackNavigator();

const MonthlySummaryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name='monthlySummary' component={MonthlySummary} options={{ title: 'Seleccionar mes' }} />
      <Stack.Screen
        name='monthlySummaryDetails'
        component={MonthlySummaryDetails}
        options={{ title: 'Resumen mensual' }}
      />
    </Stack.Navigator>
  );
};
export default MonthlySummaryStack;
