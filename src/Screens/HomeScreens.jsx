import { VStack, useToast, Box, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { Display, Keyboard, ModalConfirm, NavbarTypeOfSales } from '../components';
import { db, saveAmount, signIn } from '../firebase/firebase-utils';
import { doc, onSnapshot } from 'firebase/firestore';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { getMovementsOfTheDay, setSale } from '../redux/movementsOfTheDaySlice';

export const HomeScreens = () => {
  const toast = useToast();
  const [amount, setAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [typeOfPayment, setTypeOfPayment] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    signIn('zufruta.tandil@gmail.com', 'claudia').then((user) => {
      console.log('signIn');
    });
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'movements of the day', dayjs().format('DD-MM-YYYY')), (doc) => {
      dispatch(getMovementsOfTheDay(doc.data()));
    });

    return () => unsub();
  }, []);

  const onModalClose = (modal) => {
    setTypeOfPayment(null);
    setModalVisible(false);
    setAmount('');
  };

  const handleSaveAmount = () => {
    amount && dispatch(setSale({ hour: dayjs().format('HH:mm:ss:SSS'), amount: +amount, typeOfPayment }));

    toast.show({
      placement: 'top',
      duration: 1000,
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
              Ventas agregada
            </Text>
          </Box>
        );
      },
    });
    onModalClose();
  };

  const onPaymentClick = (payment) => {
    setTypeOfPayment(payment);
    amount && setModalVisible(true);
  };

  return (
    <VStack flex={1} space='4' p={4}>
      <Display amount={amount} />
      <Keyboard setAmount={setAmount} limit={8} />
      <NavbarTypeOfSales onPress={onPaymentClick} />
      <ModalConfirm
        acceptModal={handleSaveAmount}
        modalVisible={modalVisible}
        onModalClose={onModalClose}
        msg={`Agregar venta de $${amount}.00 con ${typeOfPayment}`}
      />
    </VStack>
  );
};
