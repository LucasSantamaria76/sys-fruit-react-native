import { useToast, VStack } from 'native-base';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Display, Keyboard, KeyboardExtractions } from '../components';
import { setExtractions } from '../redux/movementsOfTheDaySlice';
import { KeysExtractions } from './../constants';

const MerchandisePayments = () => {
  const [amount, setAmount] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();

  const handlePayment = (id) => {
    const description = KeysExtractions.find((el) => el.id === id).name;
    amount &&
      dispatch(
        setExtractions({
          amount,
          description,
        })
      );

    toast.show({
      title: 'Ventas agregada',
      placement: 'top',

      duration: 800,
    });
    setAmount('');
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
