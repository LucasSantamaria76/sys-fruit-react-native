import { Center, Flex, Pressable, Heading } from 'native-base';
import { keys } from '../constants';

const Keyboard = ({ setAmount, limit }) => {
  const handleKeys = (key) => {
    !isNaN(key) &&
      setAmount((prev) => {
        if (key === '0' && !prev.length) return prev;
        if (prev.length < limit) {
          return `${prev}${key}`;
        } else return prev;
      });
    key === '⌫' && setAmount((prev) => prev.slice(0, -1));
    key === '🗑️' && setAmount('');
  };

  return (
    <Flex direction='row' wrap='wrap' h={['50%', '60%']}>
      {keys.map((item) => (
        <Pressable key={item} onPress={() => handleKeys(item)}>
          {({ isPressed }) => {
            return (
              <Center
                minW={'33.3%'}
                h={'50%'}
                borderWidth='1'
                borderColor='coolGray.300'
                shadow={isPressed ? '0' : '3'}
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
                <Heading color='coolGray.400' fontWeight='medium' fontSize={['4xl', '7xl']}>
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
