import { Button, Modal, Text } from 'native-base';

const styles = {
  center: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
};

const ModalConfirm = ({ acceptModal, modalVisible, onModalClose, msg }) => {
  return (
    <Modal isOpen={modalVisible} onClose={onModalClose} avoidKeyboard size='lg' safeAreaTop={true}>
      <Modal.Content {...styles.center}>
        <Modal.CloseButton />
        <Modal.Body>
          <Text fontSize='2xl' bold mt={8}>
            {msg}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button flex='1' onPress={onModalClose} variant='subtle' colorScheme='blue' mr={4}>
            No
          </Button>
          <Button flex='1' onPress={acceptModal}>
            Si
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default ModalConfirm;
