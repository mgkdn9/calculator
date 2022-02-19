import { IonContent, IonHeader, IonPage,i IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className='content'>
        <IonHeader className='header'>
          <div className='knotch'></div>
          <div className='hamburger'>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
          </div>
        </IonHeader>
        <IonRow className='dark-purple-line'>

        </IonRow>
        <div className='main'>
          <div className='output'>
            {/* Output */}
            <div className='previous-operand'></div>
            <div className='current-operand'>00</div>
            <div className='white-line'></div>
          </div>
          <IonGrid>
            <IonRow>
              <IonButton shape="round">C</IonButton>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
