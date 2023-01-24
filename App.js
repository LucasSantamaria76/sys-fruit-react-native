import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { MainTabs } from './src/navigator';
import { store } from './src/redux/store';
import { theme } from './src/theme/index';

const App = () => (
  <Provider store={store}>
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  </Provider>
);

export default App;
