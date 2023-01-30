import { Box, Button, Center, Text, useToast } from 'native-base';
import { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getMovementsOfTheDay, setCurrentDay } from '../redux/movementsOfTheDaySlice';
import { getMovements } from '../firebase/firebase-utils';
import dayjs from 'dayjs';

const ChangeDate = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const { currentDay } = useSelector((state) => state.movementsOfTheDay);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChangeDate = async (date) => {
    setSelectedDate(date);
    navigation.goBack();
    navigation.navigate('sales');
    let formatDate = date.split('/').reverse().join('-');
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
              Fecha actual {formatDate}
            </Text>
          </Box>
        );
      },
    });
    const data = await getMovements(formatDate);
    dispatch(getMovementsOfTheDay(data));
    dispatch(setCurrentDay(formatDate));
  };

  return (
    <Center mt={10}>
      <DatePicker
        mode='calendar'
        onSelectedChange={(date) => handleChangeDate(date)}
        options={{
          textHeaderColor: '#80cbc4',
          selectedTextColor: '#fff',
          mainColor: '#607d8b',
          textSecondaryColor: '#c06b63',
          borderColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
      <Button
        mt={5}
        variant='subtle'
        px={5}
        shadow={2}
        _pressed={{
          shadow: 'none',
        }}
        onPress={() => handleChangeDate(dayjs().format('DD-MM-YYYY'))}
      >
        Hoy
      </Button>
    </Center>
  );
};
export default ChangeDate;
