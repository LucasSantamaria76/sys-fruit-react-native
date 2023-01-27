import { useNavigation } from '@react-navigation/native';
import { Box, Text, useToast, VStack } from 'native-base';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Display, Keyboard, KeyboardExtractions } from '../components';
import { setExtractions } from '../redux/movementsOfTheDaySlice';
import { KeysExtractions } from './../constants';

const MerchandisePayments = () => {
  const [amount, setAmount] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePayment = (id) => {
    const description = KeysExtractions.find((el) => el.id === id).name;
    amount &&
      dispatch(
        setExtractions({
          amount: +amount,
          description,
        })
      );

    toast.show({
      placement: 'top',
      duration: 1500,
      render: () => {
        return (
          <Box
            bg='success.100'
            px={10}
            py={4}
            rounded='sm'
            mb={5}
            borderColor='black'
            borderWidth={1}
            borderRadius={10}
          >
            <Text fontSize='xl' fontWeight='bold'>
              Pago agregado
            </Text>
          </Box>
        );
      },
    });
    setAmount('');
    setTimeout(() => {
      navigation.navigate('sales');
    }, 2000);
  };

  return (
    <VStack flex={1} space='2' p={4}>
      <Display amount={amount} />
      <Keyboard setAmount={setAmount} />
      <KeyboardExtractions onPress={handlePayment} />
    </VStack>
  );
};
export default MerchandisePayments;
