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

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

const Home: React.FC = () => {
  const [operand, setOperand] = useState(''); //state for number currently writing to
  const [runningTotal, setRunningTotal] = useState(''); //state for number being added to/subtracted from/multiplied by/divided by
  const [operation, setOperation] = useState(""); //state for operation selected (only ever holds +, -, *, or /)
  const [calcComplete, setCalcComplete] = useState(false)//state for equals sign having been just pressed

  const addDigit = (e: any) => {
    if( operand === "Must enter a number!" || operand=== '0' || calcComplete ){
      setOperand(e.target.innerText);//replace initial zero or whole operand if they just hit equals prior to digit
    }
    else if( operand.includes('.') && e.target.innerText==='.' ){
      return//do nothing if they enter a second decimal point
    } else {//normal operation is to concatenate new digit onto operand
      setOperand(operand + e.target.innerText);
    }
  }
  const chooseOperation = (e:any) => {
    if(operand==='0' && runningTotal===''){
      return//do nothing if they hit an operation with no operands
    }
    else if(runningTotal===''){//after they put in operand and press +/-///* move operand to runningTotal
      setOperation(e.target.innerText)
      setRunningTotal(operand)
      setOperand('')
    }
    else if(operand===''){
      setOperation(e.target.innerText)
    }
    else {//If they pass all previous if stmts, perform calculation
      setOperation(e.target.innerText)
      setRunningTotal(evaluate())
      setOperand('')
    }
  }
  const evaluate = () => {
    const fRunningTotal = parseFloat(runningTotal)
    const fOperand = parseFloat(operand)//convert to floats to do math
    let result = ''
    switch( operation ){
      case '+':
        result = (fRunningTotal + fOperand).toString()
        break
      case '-':
        result = (fRunningTotal - fOperand).toString()
        break
      case '*':
        result = (fRunningTotal * fOperand).toString()
        break
      case '/':
        result = (fRunningTotal / fOperand).toString()
        break
    }
    return result
  }
  const equals = () => {
    if( operand==='' || operation==='' || runningTotal==='' ){
      return//do nothing if we don't have 3 pieces of data we need
    }
    else {
      setRunningTotal('')
      setOperation('')
      setOperand(evaluate())
      setCalcComplete(true)
    }
  }
  const clear = () => {
    setOperand('')
    setRunningTotal('')
    setOperation('')
    setCalcComplete(false)
  }
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
            <div className="runningTotal">
              {runningTotal} {operation}
            </div>
            <div className="operand">{operand}</div>
            <div className="white-line"></div>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton onClick={clear} className="ionButton" fill="outline" shape="round">
                  C
                </IonButton>
              </IonCol>
              <IonCol></IonCol>
              {/* blank space */}
              <IonCol>
                <IonButton onClick={(e) => chooseOperation(e)} className="ionButton" color="warning" shape="round">
                  /
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton onClick={(e) => chooseOperation(e)} className="ionButton" color="warning" shape="round">
                  *
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  onClick={(e) => addDigit(e)}
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
                  onClick={(e) => addDigit(e)}
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
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  9
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton onClick={(e) => chooseOperation(e)} className="ionButton" color="warning" shape="round">
                  -
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  onClick={(e) => addDigit(e)}
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
                  onClick={(e) => addDigit(e)}
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
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  6
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton onClick={(e) => chooseOperation(e)} className="ionButton" color="warning" shape="round">
                  +
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  onClick={(e) => addDigit(e)}
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
                  onClick={(e) => addDigit(e)}
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
                  onClick={(e) => addDigit(e)}
                  className="ionButton"
                  color="light"
                  fill="outline"
                  shape="round"
                >
                  3
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton onClick={equals} className="ionButton" color="warning" shape="round">
                  =
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonButton
                  onClick={(e) => addDigit(e)}
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
                  onClick={(e) => addDigit(e)}
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
