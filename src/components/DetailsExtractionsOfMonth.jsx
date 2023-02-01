import { HStack, Text } from 'native-base';

const DetailsExtractionsOfMonth = ({ extractions }) => {
  return (
    <>
      <Text fontSize={'2xl'} px={4} py={2} color={'primary.400'}>
        Salidas del mes
      </Text>
      {Object.keys(extractions).map((key) => (
        <HStack key={key} justifyContent={'space-between'} px={8}>
          <Text fontSize={'xl'}>{key}</Text>
          <Text fontSize={'xl'} color={'#900'} bold>
            $ {extractions[key]}
          </Text>
        </HStack>
      ))}
      <HStack justifyContent={'space-between'} px={8} py={2}>
        <Text fontSize={'xl'} bold color={'secondary.500'}>
          Total de salidas
        </Text>
        <Text fontSize={'xl'} color={'red.500'} bold>
          $ {Object.values(extractions).reduce((acc, val) => (acc += val), 0)}
        </Text>
      </HStack>
    </>
  );
};
export default DetailsExtractionsOfMonth;
