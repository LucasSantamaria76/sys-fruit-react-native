import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { Center, Text } from 'native-base';
import { useSelector } from 'react-redux';

dayjs.extend(updateLocale);

const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

dayjs.updateLocale('en', {
  months,
  weekdays,
});

const CurrentDay = () => {
  const { currentDay } = useSelector((state) => state.movementsOfTheDay);
  const date = currentDay.split('-').reverse().join('-');
  return (
    <Center borderColor='white' borderWidth={1} p={1} bgColor='primary.200' borderRadius={5} shadow={5}>
      <Text color='white' fontSize='md'>
        {dayjs(date).format('dddd, DD MMMM YYYY')}
      </Text>
    </Center>
  );
};
export default CurrentDay;
