import { Divider, ScrollView, Text, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { getDocuments } from '../firebase/firebase-utils';
import DetailsExtractionsOfMonth from './DetailsExtractionsOfMonth';
import DetailsSalesOfMonth from './DetailsSalesOfMonth';

const MonthlySummaryDetails = ({ route }) => {
  const [data, setData] = useState(null);
  const { date } = route.params;

  const getData = async () => {
    const dataObj = {};
    const docs = await getDocuments(date);
    docs.forEach((doc) => {
      Object.keys(doc.data()).forEach((key) => {
        if (key === 'sales') {
          if (doc.data()[key].length) {
            const dataReducedByTypeOfPayment = doc.data()[key].reduce((acc, item) => {
              !acc && (acc = {});
              !acc[item.typeOfPayment] && (acc[item.typeOfPayment] = 0);
              acc[item.typeOfPayment] += item.amount;
              return acc;
            }, {});
            Object.keys(dataReducedByTypeOfPayment).forEach((key) => {
              if (dataReducedByTypeOfPayment[key]) {
                !dataObj.sales && (dataObj.sales = {});
                !dataObj.sales[key] && (dataObj.sales[key] = 0);
                dataObj.sales[key] += dataReducedByTypeOfPayment[key];
              }
            });
          }
        }
        if (key === 'extractions') {
          if (doc.data()[key].length) {
            const dataReducedByPayment = doc.data()[key].reduce((acc, item) => {
              !acc && (acc = {});
              !acc[item.description] && (acc[item.description] = 0);
              acc[item.description] += item.amount;
              return acc;
            }, {});
            Object.keys(dataReducedByPayment).forEach((key) => {
              if (dataReducedByPayment[key]) {
                !dataObj.extractions && (dataObj.extractions = {});
                !dataObj.extractions[key] && (dataObj.extractions[key] = 0);
                dataObj.extractions[key] += dataReducedByPayment[key];
              }
            });
          }
        }
      });
    });

    setData(dataObj);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView safeAreaBottom={10}>
      <VStack>
        {data?.sales && <DetailsSalesOfMonth sales={data.sales} />}
        <Divider />
        {data?.extractions && <DetailsExtractionsOfMonth extractions={data.extractions} />}
      </VStack>
      <Divider />
    </ScrollView>
  );
};
export default MonthlySummaryDetails;
