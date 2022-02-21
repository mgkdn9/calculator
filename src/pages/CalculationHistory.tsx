import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton } from "@ionic/react"

const CalculationHistory: React.FC<{history:any[]}> = ({history}:any) => {
  return (
    <IonPage>
      <IonHeader className="header">
        <IonTitle>Calculation History</IonTitle>
        <IonToolbar className="toolbar">
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {history}
      </IonContent>
    </IonPage>
  )
}
export default CalculationHistory