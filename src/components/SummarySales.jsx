import { HStack, Text } from 'native-base';
import { typeOfSales } from '../constants';

const SummarySales = ({ sales }) => {
  const salesOfTheDay = Object.keys(typeOfSales).reduce((accArray, key) => {
    accArray = [
      ...accArray,
      {
        typeOfSales: typeOfSales[key],
        total: sales.reduce((acc, val) => {
          if (val.typeOfPayment === typeOfSales[key]) acc += val.amount;
          return acc;
        }, 0),
      },
    ];
    return accArray;
  }, []);

  return (
    <>
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
    </>
  );
};
export default SummarySales;
