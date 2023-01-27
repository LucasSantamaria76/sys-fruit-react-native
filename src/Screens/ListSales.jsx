import { Box, Heading, HStack, VStack, Text, Spacer, Center, Pressable, Image } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSale } from '../redux/movementsOfTheDaySlice';
import mercadoPago from '../../assets/MP.png';
import cuentaDNI from '../../assets/CDNI.png';
import creditCard from '../../assets/CARD.png';
import cash from '../../assets/CASH.png';
import { useState } from 'react';
import { ModalConfirm } from '../components';
import { typeOfSales } from '../constants';

const typeOfPayment = (type) => {
  switch (type) {
    case 'Cuenta DNI':
      return cuentaDNI;

    case 'Mercado Pago':
      return mercadoPago;

    case 'Tarjeta':
      return creditCard;

    default:
      return cash;
  }
};

const ListSales = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [saleToDelete, setSaleToDelete] = useState(null);
  const { sales } = useSelector((state) => state.movementsOfTheDay);
  const dispatch = useDispatch();

  const handleDeleteSale = (sale) => {
    setSaleToDelete(sale);
    setModalVisible(true);
  };

  const deleteConfirmed = () => {
    dispatch(deleteSale(saleToDelete.hour));
    setModalVisible(false);
    setSaleToDelete(null);
  };

  const onModalClose = (modal) => {
    setSaleToDelete(null);
    setModalVisible(false);
  };

  return (
    <Box safeAreaBottom={10}>
      <Box borderBottomWidth='1' borderColor='black' pl={['0', '4']} pr={['0', '5']} py='2'>
        <HStack space={[2, 3]} justifyContent='space-around'>
          <Center>
            <Text color='coolGray.800'>T. Operación</Text>
          </Center>
          <Center>
            <Text color='coolGray.800'>Importe</Text>
          </Center>
          <Center>
            <Text color='coolGray.800'>Hora</Text>
          </Center>
          <Center>
            <Text color='coolGray.800'>Eliminar</Text>
          </Center>
        </HStack>
      </Box>
      <FlatList
        data={sales}
        renderItem={({ item }) => (
          <Box borderBottomWidth='.5' borderColor='muted.800' py='1'>
            <HStack space={[2, 3]} justifyContent='space-around'>
              <Image size='xs' resizeMode='contain' source={typeOfPayment(item.typeOfPayment)} alt='typeOfPayment' />
              <Center>
                <Text fontSize='md' color='coolGray.800'>{`$ ${item.amount}`}</Text>
              </Center>
              <Center>
                <Text color='coolGray.800'>{`${item.hour.slice(0, 5)}`}</Text>
              </Center>
              <Center>
                <Pressable onPress={() => handleDeleteSale(item)}>
                  {({ isPressed }) => {
                    return (
                      <Center
                        py={1}
                        borderWidth='1'
                        borderColor='coolGray.300'
                        shadow='3'
                        bg={isPressed ? 'coolGray.200' : 'coolGray.100'}
                        rounded='8'
                        style={{
                          transform: [
                            {
                              scale: isPressed ? 0.95 : 1,
                            },
                          ],
                        }}
                      >
                        <EvilIcons name='trash' size={30} color='#900' />
                      </Center>
                    );
                  }}
                </Pressable>
              </Center>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.hour}
      />
      <ModalConfirm
        acceptModal={deleteConfirmed}
        modalVisible={modalVisible}
        onModalClose={onModalClose}
        msg={`Eliminar venta de $${saleToDelete && saleToDelete.amount} con ${
          saleToDelete && saleToDelete.typeOfPayment
        }`}
      />
    </Box>
  );
};
export default ListSales;
