import dayjs from 'dayjs';
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  VStack,
  Button,
  useToast,
  Text,
} from 'native-base';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setCashWithdrawals } from '../redux/movementsOfTheDaySlice';
import { useNavigation } from '@react-navigation/native';

const CashWithdrawals = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const amountRef = useRef();
  const descriptionRef = useRef();
  const toast = useToast();
  const navigation = useNavigation();

  const validate = () => {
    if (!formData.amount) {
      setErrors({ amount: 'El importe es requerido' });
      return false;
    } else if (!formData.description) {
      setErrors({ description: 'La descripción es requerida' });
      return false;
    }
    return true;
  };

  const addCashWithdrawals = () => {
    const { amount, description } = formData;
    dispatch(setCashWithdrawals({ amount: +amount, description, hour: dayjs().format('HH:mm:ss:SSS') }));
    setFormData({});
    toast.show({
      duration: 1500,
      placement: 'top',
      render: () => {
        return (
          <Box
            bg='success.100'
            px={12}
            py={4}
            rounded='sm'
            mb={5}
            borderColor='black'
            borderWidth={1}
            borderRadius={10}
          >
            <Text fontSize='xl' fontWeight='bold'>
              Retiro agregado
            </Text>
          </Box>
        );
      },
    });
    setTimeout(() => {
      navigation.goBack();
      navigation.navigate('sales');
    }, 1500);
  };

  const onSubmit = () => {
    validate() ? addCashWithdrawals() : amountRef.current.focus();
  };

  return (
    <KeyboardAwareScrollView>
      <VStack mt='10'>
        <FormControl isRequired isInvalid={'amount' in errors}>
          <Stack mx='4'>
            <FormControl.Label>Importe</FormControl.Label>
            <Input
              name='amount'
              ref={amountRef}
              autoFocus={true}
              placeholder='Ingrese importe'
              keyboardType='numeric'
              value={formData.amount}
              bgColor='#fff'
              onChangeText={(value) => setFormData({ ...formData, amount: value })}
              returnKeyType='next'
              onSubmitEditing={() => descriptionRef.current.focus()}
            />
            {'amount' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
                {errors.amount}
              </FormControl.ErrorMessage>
            )}
          </Stack>
        </FormControl>
        <FormControl isRequired isInvalid={'description' in errors}>
          <Stack mx='4'>
            <FormControl.Label>Descripción</FormControl.Label>
            <Input
              name='description'
              ref={descriptionRef}
              value={formData.description}
              placeholder='Ingrese descripción'
              bgColor='#fff'
              onChangeText={(value) => setFormData({ ...formData, description: value })}
              onSubmitEditing={onSubmit}
            />

            {'description' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
                {errors.description}
              </FormControl.ErrorMessage>
            )}
          </Stack>
        </FormControl>
        <Button onPress={onSubmit} m='4' mt='8' variant='subtle'>
          Agregar
        </Button>
      </VStack>
    </KeyboardAwareScrollView>
  );
};
export default CashWithdrawals;
