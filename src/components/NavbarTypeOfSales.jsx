import { Center, HStack, Image, Pressable } from 'native-base';
import { typeOfSales } from '../constants';

const NavbarTypeOfSales = ({ onPress }) => {
  let uri;
  return (
    <HStack h={['12%', '15%']} space={1}>
      {Object.keys(typeOfSales).map((key) => (
        <Pressable key={typeOfSales[key]} flex={1} onPress={() => onPress(typeOfSales[key])}>
          {({ isPressed }) => {
            uri = require(`../../assets/CASH.png`);
            key === 'CARD' && (uri = require(`../../assets/CARD.png`));
            key === 'MP' && (uri = require(`../../assets/MP.png`));
            key === 'CDNI' && (uri = require(`../../assets/CDNI.png`));

            return (
              <Center
                h={'100%'}
                w={'100%'}
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
                <Image size='md' source={uri} resizeMode='contain' alt={key} />
              </Center>
            );
          }}
        </Pressable>
      ))}
    </HStack>
  );
};
export default NavbarTypeOfSales;
