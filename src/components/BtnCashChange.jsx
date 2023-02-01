import { useState } from 'react';
import { Box, Center, Input, Modal, Pressable, Text, useToast } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setCashChange } from '../redux/movementsOfTheDaySlice';

const BtnCashChange = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (amount) => {
    dispatch(setCashChange(amount));
    setShowModal(false);
    toast.show({
      placement: 'top',
      duration: 2000,
      render: () => {
        return (
          <Box
            bg='success.100'
            px={10}
            py={4}
            rounded='sm'
            mb={5}
            borderColor='black'
            borderWidth={1}
            borderRadius={10}
          >
            <Text fontSize='xl' fontWeight='bold'>
              Cambio en caja ${amount}
            </Text>
          </Box>
        );
      },
    });
  };

  return (
    <>
      <Pressable onPress={() => setShowModal(true)} mr={4} mb={1}>
        {({ isPressed }) => {
          return (
            <Center
              py={1}
              borderWidth='1'
              borderColor='coolGray.300'
              shadow='3'
              bg={isPressed ? 'coolGray.200' : 'coolGray.100'}
              rounded='8'
              px={2}
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.95 : 1,
                  },
                ],
              }}
            >
              <MaterialCommunityIcons name='cash' size={24} color='#226e24' />
              <Text fontSize={9}>Cambio</Text>
            </Center>
          );
        }}
      </Pressable>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth='400px' style={{ marginBottom: 'auto', marginTop: 200 }}>
          <Modal.CloseButton />
          <Modal.Header>Cambio en caja</Modal.Header>
          <Modal.Body>
            <Input
              autoFocus
              placeholder='Ingrese importe'
              keyboardType='numeric'
              bgColor='#fff'
              onSubmitEditing={(input) => handleSubmit(+input.nativeEvent.text)}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default BtnCashChange;
