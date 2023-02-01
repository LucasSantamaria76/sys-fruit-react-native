import { useNavigation } from '@react-navigation/native';
import { Center } from 'native-base';
import { useEffect, useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

const MonthlySummary = () => {
  const [date, setDate] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    date && navigation.navigate('monthlySummaryDetails', { date });
  }, [date]);

  return (
    <Center mt={10}>
      <DatePicker
        style={{ marginTop: 15 }}
        mode='monthYear'
        selectorStartingYear={2023}
        onMonthYearChange={(selectedDate) => setDate(selectedDate.split(' ').reverse().join('-'))}
        options={{
          textHeaderColor: '#80cbc4',
          selectedTextColor: '#fff',
          mainColor: '#607d8b',
          textSecondaryColor: '#c06b63',
          borderColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
    </Center>
  );
};
export default MonthlySummary;
