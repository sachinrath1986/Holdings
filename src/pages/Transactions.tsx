import { FC, useState } from 'react';
// Ionic Components
import {
  IonPage,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonImg
} from '@ionic/react';
import { alertCircle } from 'ionicons/icons';
import { useHistory } from 'react-router';
// Custom Components
import SideMenuBar from '../components/SideMenuBar';
import SearchBar from '../components/SearchBar';
import { currencyFormatter } from '../utils/currency';
import TransactionStyles from './Transactions.module.css';
import homeIcon from '../images/home_2x.png';

export type TransactionDataType = {
  transactionId: string;
  holdingName: string;
  transactionType: string;
  transactionAmount: number;
  transactionStatus: string;
  quantity: number;
  transactionDate: string;
};

const transactionMockData = [
  {
    transactionId: 'a12',
    holdingName: 'rcom',
    transactionAmount: 2789.0,
    transactionType: 'buy',
    transactionStatus: 'Successful',
    quantity: 123,
    transactionDate: '03 Aug, 2021',
  },
  {
    transactionId: 'b34',
    holdingName: 'indigo',
    transactionAmount: 2789.0,
    transactionType: 'deposit',
    transactionStatus: 'In Process',
    quantity: 123,
    transactionDate: '03 Aug, 2021',
  },
  {
    transactionId: 'c56',
    holdingName: 'bit coin',
    transactionAmount: 2789.0,
    transactionType: 'withdrawl',
    transactionStatus: 'Successful',
    quantity: 123,
    transactionDate: '03 Aug, 2021',
  },
  {
    transactionId: 'd78',
    holdingName: 'lti',
    transactionAmount: 2789.0,
    transactionType: 'sell',
    transactionStatus: 'In Process',
    quantity: 123,
    transactionDate: '03 Aug, 2021',
  },
  {
    transactionId: 'e90',
    holdingName: 'IBULHSGFIN',
    transactionAmount: 2789.0,
    transactionType: 'sell-short',
    transactionStatus: 'Successful',
    quantity: 123,
    transactionDate: '03 Aug, 2021',
  },
  {
    transactionId: 'e02',
    holdingName: 'RCOM',
    transactionAmount: 2789.0,
    transactionType: 'sell-short',
    transactionStatus: 'Successful',
    quantity: 123,
    transactionDate: '03 Aug, 2021',
  },
];

const Transaction: FC = () => {
  const [transactionData, setTransactionData] =
    useState<TransactionDataType[]>(transactionMockData);
  const [showPopover, setShowPopOver] = useState(false);
  const [selectTransactionType, setTransactionType] = useState('All');

  let categories = transactionMockData.map((item) => item.transactionType);
  categories = categories.filter(
    (item, index) => categories.indexOf(item) === index
  );

  const handleSearchChange = (searchvalue: string) => {
    setTransactionType('All');
    if (searchvalue.length >= 3) {
      const filterData = transactionMockData.filter((transaction) =>
        transaction.holdingName
          .toLowerCase()
          .includes(searchvalue.toLowerCase())
      );
      setTransactionData(filterData);
    } else {
      setTransactionData(transactionMockData);
    }
  };

  const FilterTransaction = (e: CustomEvent) => {
    if (e.detail.value === selectTransactionType) {
      setShowPopOver(false);
      return;
    }
    setShowPopOver(false);
    setTransactionType(e.detail.value);
    if (e.detail.value === 'All') {
      setTransactionData(transactionMockData);
    } else {
      const filterData = transactionMockData.filter(
        (transaction) =>
          transaction.transactionType.toLowerCase() ===
          e.detail.value.toLowerCase()
      );
      setTransactionData(filterData);
    }
  };

  const handlePopover = () => {
    setShowPopOver(!showPopover);
  };

  const history = useHistory();
  const navigatetoHome = () => {
    history.push('/accountsummary');
  };

  return (
    <IonPage>
      <SideMenuBar contentId="transactions" />
      <IonHeader class={TransactionStyles.header_bg}>
        <div className="w-full p-4 pl-2 flex flexx-row items-center justify-between">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
          </IonButtons>
          <IonText color="light">
            <h1 className="font-semibold text-xl tracking-wider">Transactions</h1>
          </IonText>
          <div>
            <IonImg src={homeIcon} onClick={() => navigatetoHome()} class="w-6" />
          </div>
        </div>
      </IonHeader>
      <IonContent
        fullscreen
        class={TransactionStyles.screen_bg}
        id="transactions"
      >
        <div>
          <div className="p-4 pt-0">
            <div className="flex flex-row items-center">
              <div className="mr-1">
                <IonText>
                  <h2 className="text-sm text-white text-opacity-30 uppercase font-semibold tracking-widest">
                    total transactions ({transactionData.length})
                  </h2>
                </IonText>
              </div>
              <div className="flex">
                <IonIcon
                  icon={alertCircle}
                  class="text-white text-opacity-50 text-sm"
                />
              </div>
            </div>
            <div className="mt-1 relative">
              <SearchBar
                onSearchChange={handleSearchChange}
                placeholder="By Holding Name"
                onClickFilter={handlePopover}
              />
              {showPopover === true ? (
                <div className="absolute top-12 right-0 bg-white rounded z-10">
                  <div className="p-2">
                    <IonText>
                      <h4 className="text-lg font-bold text-gray-500">
                        By Transaction Type
                      </h4>
                    </IonText>
                  </div>
                  <IonList class={TransactionStyles.category_list}>
                    <IonRadioGroup
                      onIonChange={FilterTransaction}
                      value={selectTransactionType}
                    >
                      <IonItem class={TransactionStyles.category_list_item}>
                        <p className="capitalize text-sm">all</p>
                        <IonRadio slot="start" value="All" />
                      </IonItem>
                      {categories.map((item) => (
                        <IonItem
                          key={item}
                          class={TransactionStyles.category_list_item}
                        >
                          <p className="capitalize text-sm">{item}</p>
                          <IonRadio slot="start" value={item} />
                        </IonItem>
                      ))}
                    </IonRadioGroup>
                  </IonList>
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <IonList class={TransactionStyles.transaction_list}>
              {transactionData.map((data) => (
                <IonItem
                  key={data.transactionId}
                  class={TransactionStyles.transaction_list_item}
                >
                  <div className="w-full p-4 pt-2 pb-2">
                    <IonGrid class="p-0">
                      <IonRow class="p-0">
                        <IonCol size="5" class="pl-0">
                          <IonText
                            color="success"
                            class={`p-2 py-1 ${TransactionStyles.transaction_type_bg}`}
                          >
                            <span className="text-sm font-bold uppercase tracking-wide">
                              {data.transactionType}
                            </span>
                          </IonText>
                          <IonText>
                            <p className="mt-3 text-lg text-white font-semibold uppercase tracking-wider">
                              {data.holdingName}
                            </p>
                          </IonText>
                          <IonText>
                            <p className="text-sm text-white text-opacity-50">
                              Qty: {data.quantity}
                            </p>
                          </IonText>
                        </IonCol>
                        <IonCol size="7" class="pr-0">
                          <IonText>
                            <p className="text-base text-white text-opacity-40 text-right">
                              {data.transactionDate}
                            </p>
                          </IonText>
                          <IonText>
                            <p className="mt-3 text-lg text-white font-semibold tracking-wide  text-right">
                              {currencyFormatter(data.transactionAmount)}
                            </p>
                          </IonText>
                          <IonText class="tracking-wider font-semibold text-base text-right">
                            {data.transactionStatus === 'Successful' ? (
                              <p className={TransactionStyles.success_text}>
                                {data.transactionStatus}
                              </p>
                            ) : null}
                            {data.transactionStatus === 'In Process' ? (
                              <p className={TransactionStyles.process_text}>
                                {data.transactionStatus}
                              </p>
                            ) : null}
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </div>
                </IonItem>
              ))}
            </IonList>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transaction;