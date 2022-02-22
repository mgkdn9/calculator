import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonMenuButton,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

const Home: React.FC<{
  addDigit: any;
  chooseOperation: any;
  equals: any;
  clear: any;
  operand: string;
  runningTotal: string;
  operation: string;
}> = ({
  addDigit,
  chooseOperation,
  equals,
  clear,
  operand,
  runningTotal,
  operation,
}: any) => {
  return (
    <IonPage>
      <IonHeader className="header">
        <div className="knotch"></div>
        <IonToolbar className="toolbar">
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow className="dark-purple-line"></IonRow>
        <div className="main">
          <div className="output">
            {/* Output */}
            <div className="running-total">
              {runningTotal} {operation}
            </div>
            <div className="operand">{operand}</div>
            <div className="white-line"></div>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={clear}
                  className="ionButton clear-button"
                  color="warning"
                  fill="outline"
                  shape="round"
                >
                  <strong>C</strong>
                </IonButton>
              </IonCol>
              <IonCol></IonCol>
              {/* blank space */}
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => chooseOperation(e)}
                  className="ionButton"
                  color="warning"
                  shape="round"
                >
                  <strong>÷</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => chooseOperation(e)}
                  className="ionButton"
                  color="warning"
                  shape="round"
                >
                  <strong>X</strong>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  mode="md"
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>7</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>8</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>9</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => chooseOperation(e)}
                  className="ionButton"
                  color="warning"
                  shape="round"
                >
                  <strong>-</strong>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>4</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>5</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>6</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => chooseOperation(e)}
                  className="ionButton"
                  color="warning"
                  shape="round"
                >
                  <strong>+</strong>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>1</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>2</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>3</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={equals}
                  className="ionButton"
                  color="warning"
                  shape="round"
                >
                  <strong>=</strong>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  expand="block"
                  shape="round"
                >
                  <strong>0</strong>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  size="large"
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  <strong>.</strong>
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
