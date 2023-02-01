import { Center, Flex, Image, Pressable, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { KeysAdmin } from '../constants';

const Admin = () => {
  const navigation = useNavigation();

  let uri;

  return (
    <Flex direction='row' wrap='wrap' h={'55%'} p={3}>
      {KeysAdmin.map((item) => (
        <Pressable key={item.id} onPress={() => navigation.navigate(item.nameStack)}>
          {({ isPressed }) => {
            uri = require(`../../assets/users.png`);
            item.id === 2 && (uri = require(`../../assets/resumen.png`));
            item.id === 3 && (uri = require(`../../assets/CajaRegistradora.png`));
            item.id === 4 && (uri = require(`../../assets/calendario.png`));
            item.id === 5 && (uri = require(`../../assets/resMensual.png`));

            return (
              <Center
                minW={'50%'}
                minH={200}
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
                    <Image size='xl' source={uri} resizeMode='contain' alt={item.name} />
                  </Center>
                  <Text fontSize='lg' textAlign='center'>
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
export default Admin;
