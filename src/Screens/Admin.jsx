import { Box, Center, Image, Pressable, VStack } from 'native-base';
import users from '../../assets/users.png';

const Admin = () => {
  return (
    <Box flex={1} safeAreaTop>
      <VStack w='100%' h='100%' ml={'25%'} mr={'25%'}>
        <Pressable onPress={() => alert('Press')}>
          {({ isPressed }) => {
            return (
              <Center
                size='50%'
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
                <Image source={users} h={'150px'} w={'150px'} alt='users'></Image>
              </Center>
            );
          }}
        </Pressable>
        <Pressable onPress={() => alert('Press')} w='100%'>
          {({ isPressed }) => {
            return (
              <Center
                size='50%'
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
              ></Center>
            );
          }}
        </Pressable>
      </VStack>
    </Box>
  );
};
export default Admin;
