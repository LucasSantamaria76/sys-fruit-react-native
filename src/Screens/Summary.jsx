import { Box, Divider, HStack, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';
import { typeOfSales } from '../constants';

const Summary = () => {
  const { Sales } = useSelector((state) => state.movementsOfTheDay);
  const salesOfTheDay = Object.keys(typeOfSales).reduce((accArray, key) => {
    accArray = [
      ...accArray,
      {
        typeOfSales: typeOfSales[key],
        total: Sales.reduce((acc, val) => {
          if (val.typeOfPayment === typeOfSales[key]) acc += val.amount;
          return acc;
        }, 0),
      },
    ];
    return accArray;
  }, []);
  return (
    <Box safeAreaBottom={10}>
      <VStack>
        <Text fontSize={'2xl'} px={4} py={2} color={'primary.400'}>
          Ventas del Día
        </Text>
        {salesOfTheDay.map((item, index) => (
          <HStack key={index} justifyContent={'space-between'} px={8}>
            <Text fontSize={'xl'}>{item.typeOfSales}</Text>
            <Text fontSize={'xl'} color={'#900'} bold>
              $ {item.total}
            </Text>
          </HStack>
        ))}
        <HStack justifyContent={'space-between'} px={8} py={2}>
          <Text fontSize={'xl'} bold color={'secondary.500'}>
            Total de ventas
          </Text>
          <Text fontSize={'xl'} color={'red.500'} bold>
            $ {salesOfTheDay.reduce((acc, val) => (acc += val.total), 0)}
          </Text>
        </HStack>
        <Divider />
        <Text fontSize={'2xl'} px={4} py={2} color={'primary.400'}>
          Salidas del Día
        </Text>
      </VStack>
    </Box>
  );
};
export default Summary;
