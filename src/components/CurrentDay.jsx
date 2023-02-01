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

const CurrentDay = ({ msg }) => {
  const { currentDay } = useSelector((state) => state.movementsOfTheDay);
  const date = currentDay.split('-').reverse().join('-');
  return (
    <Center>
      <Text fontSize={15} color={'white'} fontWeight='bold'>
        {msg && msg} {dayjs(date).format('dddd, DD MMMM YYYY')}
      </Text>
    </Center>
  );
};
export default CurrentDay;
