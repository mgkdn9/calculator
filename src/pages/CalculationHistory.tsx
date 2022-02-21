import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton, IonList, IonItem, IonText } from "@ionic/react"

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
        <IonList>
          {history.map((calculation:string, index:number) => <IonItem key={index}><IonText>{calculation}</IonText></IonItem>)}
        </IonList>
      </IonContent>
    </IonPage>
  )
}
export default CalculationHistory