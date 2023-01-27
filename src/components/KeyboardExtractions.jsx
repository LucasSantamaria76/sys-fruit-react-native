import { Center, Flex, Image, Pressable, Text, VStack } from 'native-base';
import { KeysExtractions } from '../constants';

const KeyboardExtractions = ({ onPress }) => {
  let uri;

  return (
    <Flex direction='row' wrap='wrap' h={'55%'}>
      {KeysExtractions.map((item) => (
        <Pressable key={item.id} onPress={() => onPress(item.id)}>
          {({ isPressed }) => {
            uri = require(`../../assets/carbon.png`);
            item.id === 2 && (uri = require(`../../assets/papas.png`));
            item.id === 3 && (uri = require(`../../assets/huevos.png`));
            item.id === 4 && (uri = require(`../../assets/Verduras.png`));
            item.id === 5 && (uri = require(`../../assets/bolsitas.png`));
            item.id === 6 && (uri = require(`../../assets/condimentos.png`));
            item.id === 7 && (uri = require(`../../assets/Empleados.png`));
            item.id === 8 && (uri = require(`../../assets/Varios.png`));
            return (
              <Center
                minW={'25%'}
                minH={90}
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
                <VStack>
                  <Center>
                    <Image size='sm' source={uri} resizeMode='contain' alt={item.name} />
                  </Center>
                  <Text fontSize={10} textAlign='center'>
                    {item.name}
                  </Text>
                </VStack>
              </Center>
            );
          }}
        </Pressable>
      ))}
    </Flex>
  );
};
export default KeyboardExtractions;
