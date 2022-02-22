import React,{ useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import CalculationHistory from "./pages/CalculationHistory";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [history, setHistory] = useState([
    "2 + 2 = 4",
    "5 X 5 = 25",
    "10 + 5 = 15",
  ]); //state for past calculations
  // const [history, setHistory]:any = useState([])//state for past calculations
  const [operand, setOperand] = useState(""); //state for number currently writing to
  const [runningTotal, setRunningTotal] = useState(""); //state for number being added to/subtracted from/multiplied by/divided by
  const [operation, setOperation] = useState(""); //state for operation selected (only ever holds +, -, X, or ÷)
  const [calcComplete, setCalcComplete] = useState(false); //state for equals sign having been just pressed

  const addDigit = (e: any) => {
    setCalcComplete(false);
    if (operand === "0" || calcComplete) {
      setOperand(e.target.innerText); //replace initial zero or whole operand if they just hit equals prior to digit
    } else if (operand.includes(".") && e.target.innerText === ".") {
      return; //do nothing if they enter a second decimal point
    } else {
      //normal operation is to concatenate new digit onto operand
      setOperand(operand + e.target.innerText);
    }
  };
  const chooseOperation = (e: any) => {
    if (operand === "" && runningTotal === "") {
      return; //do nothing if they hit an operation with no operands
    } else if (runningTotal === "") {
      //after they put in operand and press +/-/÷/X move operand to runningTotal
      setOperation(e.target.innerText);
      setRunningTotal(operand);
      setOperand("");
    } else if (operand === "") {
      setOperation(e.target.innerText);
    } else {
      //If they pass all previous if stmts, perform calculation
      setOperation(e.target.innerText);
      setRunningTotal(evaluate());
      setOperand("");
    }
  };
  const evaluate = () => {
    const fRunningTotal = parseFloat(runningTotal);
    const fOperand = parseFloat(operand); //convert to floats to do math
    let result = "";
    switch (operation) {
      case "+":
        result = (fRunningTotal + fOperand).toString();
        break;
      case "-":
        result = (fRunningTotal - fOperand).toString();
        break;
      case "X":
        result = (fRunningTotal * fOperand).toString();
        break;
      case "÷":
        result = (fRunningTotal / fOperand).toFixed(4).toString();
        break;
    }
    setHistory([...history,`${runningTotal} ${operation} ${operand} = ${result}`])
    console.log(history);
    return result;
  };
  const equals = () => {
    if (operand === "" || operation === "" || runningTotal === "") {
      return; //do nothing if we don't have 3 pieces of data we need
    } else {
      setRunningTotal("");
      setOperation("");
      setOperand(evaluate());
      setCalcComplete(true);
    }
  };
  const clear = () => {
    setOperand("");
    setRunningTotal("");
    setOperation("");
    setCalcComplete(false);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <Menu />
        <IonRouterOutlet id="main">
          <Route exact path="/home">
            <Home
              operand={operand}
              runningTotal={runningTotal}
              operation={operation}
              addDigit={addDigit}
              chooseOperation={chooseOperation}
              equals={equals}
              clear={clear}
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/history">
            <CalculationHistory history={history} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
