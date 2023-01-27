import { HStack, Text } from 'native-base';
import { typeOfSales } from '../constants';

const SummaryCashWithdrawals = ({ cashWithdrawals }) => {
  return (
    <>
      <Text fontSize={'2xl'} px={4} py={2} color={'primary.400'}>
        Retiros de efectivo
      </Text>
      {cashWithdrawals.map((item, index) => (
        <HStack key={index} justifyContent={'space-between'} px={8}>
          <Text fontSize={'xl'}>{item.description}</Text>
          <Text fontSize={'xl'} color={'#900'} bold>
            $ {item.amount}
          </Text>
        </HStack>
      ))}
      <HStack justifyContent={'space-between'} px={8} py={2}>
        <Text fontSize={'xl'} bold color={'secondary.500'}>
          Total de retiros
        </Text>
        <Text fontSize={'xl'} color={'red.500'} bold>
          $ {cashWithdrawals.reduce((acc, val) => (acc += val.amount), 0)}
        </Text>
      </HStack>
    </>
  );
};
export default SummaryCashWithdrawals;
