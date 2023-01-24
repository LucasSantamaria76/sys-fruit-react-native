import { Avatar, Box, Heading, HStack, VStack, Text, Spacer, Center } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Alert, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import mercadoPago from '../../assets/mercadopago.png';
import cuentaDNI from '../../assets/Cuenta_dni.png';
import creditCard from '../../assets/CreditCard.png';
import cash from '../../assets/cash.png';

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
  const { Sales } = useSelector((state) => state.movementsOfTheDay);

  return (
    <Box>
      <FlatList
        data={Sales}
        renderItem={({ item }) => (
          <Box borderBottomWidth='.5' borderColor='muted.800' pl={['0', '4']} pr={['0', '5']} py='2'>
            <HStack space={[2, 3]} justifyContent='space-evenly'>
              <Avatar size='48px' source={typeOfPayment(item.typeOfPayment)} bg='transparent' />
              <Center>
                <Text color='coolGray.800'>{`$ ${item.amount}.00`}</Text>
              </Center>
              <Icon.Button
                name='trash'
                backgroundColor='transparent'
                color='#900'
                size={32}
                onPress={() => Alert.alert('press' + item.hour)}
              />
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.hour}
      />
    </Box>
  );
};
export default ListSales;
