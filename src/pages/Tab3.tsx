import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reliance AI Moments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reliance AI Moments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Reliance AI Moments" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
