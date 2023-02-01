import { HStack, Text } from 'native-base';

const DetailsSalesOfMonth = ({ sales }) => {
  return (
    <>
      <Text fontSize={'2xl'} px={4} py={2} color={'primary.400'}>
        Ventas del mes
      </Text>
      {Object.keys(sales).map((key) => (
        <HStack key={key} justifyContent={'space-between'} px={8}>
          <Text fontSize={'xl'}>{key}</Text>
          <Text fontSize={'xl'} color={'#900'} bold>
            $ {sales[key]}
          </Text>
        </HStack>
      ))}
      <HStack justifyContent={'space-between'} px={8} py={2}>
        <Text fontSize={'xl'} bold color={'secondary.500'}>
          Total de ventas
        </Text>
        <Text fontSize={'xl'} color={'red.500'} bold>
          $ {Object.values(sales).reduce((acc, val) => (acc += val), 0)}
        </Text>
      </HStack>
    </>
  );
};
export default DetailsSalesOfMonth;
