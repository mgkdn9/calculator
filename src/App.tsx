import { useState } from "react";
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

  const [history, setHistory] = useState(['2 + 2 = 4','5 * 5 = 25','10 + 5 = 15'])//state for past calculations
  // const [history, setHistory] = useState([])//state for past calculations

  return (
    <IonApp>
      <IonReactRouter>
        <Menu />
        <IonRouterOutlet id="main">
          <Route exact path="/home">
            <Home history={history}/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/history">
            <CalculationHistory history={history}/>
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
