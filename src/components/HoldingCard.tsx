import { IonGrid, IonItem, IonRow, IonCol, IonText } from '@ionic/react';
import { FC } from 'react';
import { useHistory } from 'react-router';
import { HoldingDataType } from '../pages/PortfolioSummary';
import { currencyFormatter } from '../utils/currency';
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
              <IonText class={HoldingCardStyles.holding_name_text}>
                <p className="text-lg uppercase font-semibold">
                  {holdingData.holdingName}
                </p>
              </IonText>
              <IonText color="light">
                <p className="text-base">
                  Invested:&nbsp;{currencyFormatter(holdingData.investmentAmount).replace('-', '')}
                </p>
              </IonText>
              <IonText color="medium">
                <p className="text-base">{holdingData.holdingType}</p>
              </IonText>
            </IonCol>
            <IonCol class="pb-0" />
            <IonCol class="pr-0 pb-0">
              <IonText class="tracking-wider">
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
                    {holdingData.holdingPercentChange}%
                  </p>
                )}
              </IonText>
              <IonText class="tracking-wider">
                {holdingData.holdingChange > 0 ? (
                  <p
                    className={`${HoldingCardStyles.profit_text} text-lg font-semibold text-right`}
                  >
                    {currencyFormatter(holdingData.holdingChange)}
                  </p>
                ) : (
                  <p
                    className={`${HoldingCardStyles.loss_text} text-lg font-semibold text-right`}
                  >
                    {currencyFormatter(holdingData.holdingChange).replace('-', '')}
                  </p>
                )}
              </IonText>
              <h6 className="text-sm text-right flex justify-end tracking-widest">
                <IonText>
                  {holdingData.oneDayChange > 0 ? (
                    <p
                      className="text-sm text-right text-white text-opacity-60"
                    >
                      +{holdingData.oneDayChange}
                    </p>
                  ) : (
                    <p
                      className={`${HoldingCardStyles.loss_text} text-sm text-right`}
                    >
                      {holdingData.oneDayChange}
                    </p>
                  )}
                </IonText>
                <IonText>
                  {holdingData.oneDayPercentChange > 0 ? (
                    <p
                      className={`${HoldingCardStyles.profit_text} text-sm font-bold text-right`}
                    >
                      ({holdingData.oneDayPercentChange.toString().replace('+', '')}%)
                    </p>
                  ) : (
                    <p
                      className={`${HoldingCardStyles.loss_text} text-sm font-bold text-right`}
                    >
                      ({holdingData.oneDayPercentChange.toString().replace('-', '')}%)
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
