import { Box, Heading, VStack } from 'native-base';

const Display = ({ amount }) => {
  return (
    <Box w={'100%'} h={'10%'} px={1} bg='white' rounded={5} shadow={6}>
      <VStack justifyContent={'center'}>
        <Heading textAlign={'right'} fontSize='5xl'>{`${amount ? '$' : ''} ${amount}`}</Heading>
      </VStack>
    </Box>
  );
};
export default Display;
