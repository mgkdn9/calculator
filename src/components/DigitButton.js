import { IonButton } from "@ionic/react";
import "../pages/Home.css";

// export default function DigitButton( dispatch, digit, currentOperand, previousOperand, operation ) {
export default function DigitButton(props) {
  return (
    <IonButton
      className="ionButton"
      color="light"
      fill="outline"
      shape="round"
      onClick={() =>
        props.dispatch( { currentOperand: props.currentOperand, previousOperand: props.previousOperand, operation: props.operation }, { action: "ADD_DIGIT", parameters: { digit: props.digit } })
      }
    >
      {props.digit}
    </IonButton>
  );
}
