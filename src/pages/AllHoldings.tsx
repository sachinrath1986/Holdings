import { FC, useEffect, useState } from 'react';
import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { HoldingDataType } from './PortfolioSummary';
import allHoldings from '../mocks/allHoldings';
import AllHoldingsStyles from './AllHoldings.module.css';
import SearchBar from '../components/SearchBar';
import HoldingCard from '../components/HoldingCard';

const AllHoldings: FC = () => {
  const [holdingData, setHoldingDate] = useState<HoldingDataType[]>([]);

  const handleSearchChange = () => {
    console.log('search clicked');
  };

  const handleFilter = () => {
    console.log('handleFilter clicked');
  };

  useEffect(() => {
    setHoldingDate(allHoldings.data);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="flex flex-row items-center justify-start mx-3 my-4">
            <IonBackButton color="primary" />
            <IonText color="light" className="ml-12">
              <h1 className="font-bold text-xl">All Holdings</h1>
            </IonText>
          </div>
          <div className="m-4">
            <SearchBar
              onSearchChange={handleSearchChange}
              onClickFilter={handleFilter}
            />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList class={AllHoldingsStyles.holdings_list}>
          {holdingData.map((data) => (
            <HoldingCard key={data.holdingId} holdingData={data} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllHoldings;
