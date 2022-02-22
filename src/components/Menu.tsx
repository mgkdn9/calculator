import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterLink,
} from "@ionic/react";

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" side="start">
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Calculator Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonRouterLink href="/home">Home</IonRouterLink>
          </IonItem>
          <IonItem>
            <IonRouterLink href="/history">Calculation History</IonRouterLink>
          </IonItem>
          <IonItem>Change Theme (nonfunctional)</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default Menu;
