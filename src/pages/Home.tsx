import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="content">
        <IonHeader className="header">
          <div className="knotch"></div>
          <div className="hamburger">
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </div>
        </IonHeader>
        <IonRow className="dark-purple-line"></IonRow>
        <div className="main">
          <div className="output">
            <div className="previous-operand"></div>
            <div className="current-operand">00</div>
            <div className="white-line"></div>
          </div>
          <IonGrid className="grid">
            <IonRow>
              <IonCol>
                <IonButton fill='outline' shape="round">C</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="clear"></IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">/</IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">*</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">7</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">8</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">9</IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">-</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">4</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">5</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">6</IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">+</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">1</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">2</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">3</IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">=</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonButton color='light' fill='outline' expand='block' shape="round">
                  0
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='light' fill='outline' shape="round">.</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
