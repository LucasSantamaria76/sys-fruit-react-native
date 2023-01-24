import { Center, HStack, Image, Pressable } from 'native-base';
import mercadoPago from '../../assets/mercadopago.png';
import cuentaDNI from '../../assets/Cuenta_dni.png';
import creditCard from '../../assets/CreditCard.png';
import cash from '../../assets/cash.png';
import { typeOfSales } from '../constants';

const NavbarTypeOfSales = ({ onPress }) => {
  const { CARD, CASH, CDNI, MP } = typeOfSales;
  return (
    <HStack h={['12%', '15%']} space={1}>
      <Pressable flex={1} onPress={() => onPress(MP)}>
        {({ isPressed }) => {
          return (
            <Center
              h={'100%'}
              w={'100%'}
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
              <Image source={mercadoPago} h={'100%'} w={'100%'} alt='Mercado pago'></Image>
            </Center>
          );
        }}
      </Pressable>
      <Pressable flex={1} onPress={() => onPress(CDNI)}>
        {({ isPressed }) => {
          return (
            <Center
              h={'100%'}
              W={'100%'}
              p={1}
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
              <Image source={cuentaDNI} h={'100%'} w={'100%'} alt='Cuenta DNI'></Image>
            </Center>
          );
        }}
      </Pressable>
      <Pressable flex={1} onPress={() => onPress(CARD)}>
        {({ isPressed }) => {
          return (
            <Center
              h={'100%'}
              w={'100%'}
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
              <Image source={creditCard} h={'100%'} w={'100%'} alt='Tarjeta de crédito'></Image>
            </Center>
          );
        }}
      </Pressable>
      <Pressable flex={1} onPress={() => onPress(CASH)}>
        {({ isPressed }) => {
          return (
            <Center
              h={'100%'}
              w={'100%'}
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
              <Image source={cash} h={'100%'} w={'100%'} alt='Efectivo'></Image>
            </Center>
          );
        }}
      </Pressable>
    </HStack>
  );
};
export default NavbarTypeOfSales;