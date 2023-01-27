import { Center, Divider, HStack, ScrollView, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';
import { SummaryCashWithdrawals, SummaryExtractions, SummarySales } from '../components';

const Summary = () => {
  const { cashAvailable, cashChange, cashWithdrawals, extractions, sales } = useSelector(
    (state) => state.movementsOfTheDay
  );

  return (
    <ScrollView safeAreaBottom={10}>
      <VStack>
        <HStack justifyContent={'space-between'} mr={8}>
          <Text fontSize={'2xl'} px={4} py={2} color={'primary.400'}>
            Cambio en caja
          </Text>
          <Center>
            <Text fontSize={'2xl'} color={'red.500'} bold>
              $ {cashChange}
            </Text>
          </Center>
        </HStack>
        <Divider />
        <SummarySales sales={sales} />
        <Divider />
        <SummaryExtractions extractions={extractions} />
      </VStack>
      <Divider />
      <SummaryCashWithdrawals cashWithdrawals={cashWithdrawals} />
      <Divider />
      <HStack justifyContent={'space-between'} mr={8}>
        <Text fontSize={'2xl'} px={4} py={2} color={'primary.400'}>
          Efectivo en caja
        </Text>
        <Center>
          <Text fontSize={'2xl'} color={'red.500'} bold>
            $ {cashAvailable}
          </Text>
        </Center>
      </HStack>
      <Divider />
    </ScrollView>
  );
};
export default Summary;
