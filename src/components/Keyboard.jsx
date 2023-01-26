import { Center, Flex, Pressable, Heading } from 'native-base';
import { keys } from '../constants';

const Keyboard = ({ setAmount }) => {
  const handleKeys = (key) => {
    !isNaN(key) && setAmount((prev) => `${prev}${key}`);
    key === '⌫' && setAmount((prev) => prev.slice(0, -1));
    key === '🗑️' && setAmount('');
  };

  return (
    <Flex direction='row' wrap='wrap' h={'55%'}>
      {keys.map((item) => (
        <Pressable key={item} onPress={() => handleKeys(item)}>
          {({ isPressed }) => {
            return (
              <Center
                minW={'33.3%'}
                minH={'25%'}
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
                <Heading color='coolGray.400' fontWeight='medium' fontSize={'5xl'}>
                  {item}
                </Heading>
              </Center>
            );
          }}
        </Pressable>
      ))}
    </Flex>
  );
};
export default Keyboard;
