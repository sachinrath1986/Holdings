import { FC, useEffect, useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
} from '@ionic/react';
import { HoldingDataType } from './PortfolioSummary';
import allHoldings from '../mocks/allHoldings';
import AllHoldingsStyles from './AllHoldings.module.css';
import SearchBar from '../components/SearchBar';

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
      <IonHeader className={AllHoldingsStyles.header_bg}>
        <div className="w-full p-4 pl-2 pr-2 flex flexx-row items-center justify-between">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
          </IonButtons>
          <IonTitle className="font-semibold text-xl">All Holdings</IonTitle>
        </div>
        <SearchBar
          onSearchChange={handleSearchChange}
          placeholder="By Holding Name"
          onClickFilter={handleFilter}
        />
      </IonHeader>
      <IonContent fullscreen>
        <div>holding container</div>
      </IonContent>
    </IonPage>
  );
};

export default AllHoldings;
