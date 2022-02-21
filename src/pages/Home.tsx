import { useState } from "react";
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
import DigitButton from "../components/DigitButton";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

const Home: React.FC = () => {
  
  const [operand, setOperand] = useState('0')         //state for number currently writing to
  const [runningTotal, setRunningTotal] = useState('')//state for number being added to/subtracted from/multiplied by/divided by
  const [operation, setOperation] = useState('')      //state for operation selected (only ever holds +, -, *, or /)

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
            {/* Output */}
            <div className="previous-operand">
              {runningTotal} {operation}
            </div>
            <div className="current-operand">{operand}</div>
            <div className="white-line"></div>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton className="ionButton" fill="outline" shape="round">
                  C
                </IonButton>
              </IonCol>
              <IonCol></IonCol>
              {/* blank space */}
              <IonCol>
                <IonButton className="ionButton" color="warning" shape="round">
                  /
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="ionButton" color="warning" shape="round">
                  *
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  7
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  8
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  9
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="ionButton" color="warning" shape="round">
                  -
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  4
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  5
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  6
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="ionButton" color="warning" shape="round">
                  +
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  1
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  2
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  3
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="ionButton" color="warning" shape="round">
                  =
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  expand="block"
                  shape="round"
                >
                  0
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  .
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
