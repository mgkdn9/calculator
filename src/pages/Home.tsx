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

// Specify only certain operations that can change state
function reducer(
  state: { currentOperand: string; previousOperand: string; operation: string },
  action: { action: string; parameters: any }
) {
  switch (action.action) {
    case "ADD_DIGIT":
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${
          action.parameters.digit
        }`,
      };
  }
}

const Home: React.FC = () => {
  // const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer<any>(reducer, {})
  // const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer<(prevState: any, action: any)=>any>(reducer, {})
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer<
    (prevState: any, action: any) => any
  >(reducer, {});

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
              {previousOperand} {operation}
            </div>
            <div className="current-operand">{currentOperand}</div>
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
                {/* <IonButton
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  7
                </IonButton> */}
                <DigitButton
                  digit="7"
                  dispatch={dispatch}
                  currentOperand={currentOperand}
                  previousOperand={previousOperand}
                  operation={operation}
                />
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
