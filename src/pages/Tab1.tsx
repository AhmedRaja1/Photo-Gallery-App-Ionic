import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reliance Photo Vault</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reliance Photo Vault</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Reliance Photo Vault" />
      </IonContent>
      
    </IonPage>
  );
};

export default Tab1;
