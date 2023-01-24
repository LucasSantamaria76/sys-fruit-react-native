import { Button, Modal, Text } from 'native-base';

const styles = {
  center: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
};

const ModalSale = ({ handleSaveAmount, modalVisible, onModalClose, typeOfPayment }) => {
  return (
    <Modal isOpen={modalVisible} onClose={onModalClose} avoidKeyboard size='lg' safeAreaTop={true}>
      <Modal.Content {...styles.center}>
        <Modal.CloseButton />
        <Modal.Body>
          <Text fontSize='2xl' bold mt={8}>
            Agregar venta en {typeOfPayment}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button flex='1' onPress={onModalClose} variant='subtle' colorScheme='blue' mr={4}>
            Cancelar
          </Button>
          <Button flex='1' onPress={handleSaveAmount}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default ModalSale;
