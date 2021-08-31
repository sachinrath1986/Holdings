import { IonGrid, IonItem, IonRow, IonCol, IonText } from '@ionic/react';
import { FC } from 'react';
import { useHistory } from 'react-router';
import { HoldingDataType } from '../pages/PortfolioSummary';
import HoldingCardStyles from './HoldingCard.module.css';

const HoldingCard: FC<{ holdingData: HoldingDataType }> = ({ holdingData }) => {
  const history = useHistory();
  const selectHolding = () => {
    history.push('/holdingsummary');
  };

  return (
    <IonItem
      class={HoldingCardStyles.holdings_list_item}
      key={holdingData.holdingId}
      onClick={selectHolding}
    >
      <div className="w-full p-4 pt-3">
        <IonGrid class="p-0">
          <IonRow>
            <IonCol class="pl-0 pb-0">
              <IonText color="primary">
                <p className="text-lg uppercase font-bold">
                  {holdingData.holdingName}
                </p>
              </IonText>
              <IonText color="light">
                <p className="text-sm">
                  Invested:&nbsp;{holdingData.investmentAmount}
                </p>
              </IonText>
              <IonText color="medium">
                <p className="text-sm">{holdingData.holdingType}</p>
              </IonText>
            </IonCol>
            <IonCol class="pb-0" />
            <IonCol class="pr-0 pb-0">
              <IonText>
                {holdingData.holdingChange > 0 ? (
                  <p
                    className={`text-sm text-right ${HoldingCardStyles.profit_text}`}
                  >
                    +{holdingData.holdingPercentChange}%
                  </p>
                ) : (
                  <p
                    className={`text-sm text-right ${HoldingCardStyles.loss_text}`}
                  >
                    -{holdingData.holdingPercentChange}%
                  </p>
                )}
              </IonText>
              <IonText>
                {holdingData.holdingChange > 0 ? (
                  <p
                    className={`${HoldingCardStyles.profit_text} text-lg font-bold text-right`}
                  >
                    {holdingData.holdingChange}
                  </p>
                ) : (
                  <p
                    className={`${HoldingCardStyles.loss_text} text-lg font-bold text-right`}
                  >
                    {holdingData.holdingChange}
                  </p>
                )}
              </IonText>
              <h6 className="text-sm text-right flex justify-end">
                <IonText color="medium">
                  {holdingData.oneDayChange > 0 ? '+' : '-'}
                  {holdingData.oneDayChange}&nbsp;
                </IonText>
                <IonText>
                  {holdingData.oneDayChange > 0 ? (
                    <p
                      className={`${HoldingCardStyles.profit_text} text-sm font-bold text-right`}
                    >
                      ({holdingData.oneDayPercentChange}%)
                    </p>
                  ) : (
                    <p
                      className={`${HoldingCardStyles.loss_text} text-sm font-bold text-right`}
                    >
                      ({holdingData.oneDayPercentChange}%)
                    </p>
                  )}
                </IonText>
              </h6>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonItem>
  );
};

export default HoldingCard;
