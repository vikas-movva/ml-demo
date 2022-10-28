import { React, useRef, useState } from "react";
import {
  DemoContainer,
  DemoHeader,
  Button,
  ButtonBg,
  ButtonText,
  CanvasWrapper,
  DemoInstructions,
  BlinkingBar,
} from "./demoElements";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Demo = () => {
  const canvasStyles = {
    gridArea: "2 / 1 / 5 / 3",
    // marginTop: "50%",
  };
  const canvasRef = useRef(null);
  const [pred, setPred] = useState("");
  return (
    <DemoContainer>
      <DemoHeader>MNIST Demo</DemoHeader>
      <DemoInstructions>
        Draw a number and click submit to get the computer’s predicton
      </DemoInstructions>
      <CanvasWrapper>
        <ReactSketchCanvas
          width={window.innerHeight * 0.6}
          height={window.innerHeight * 0.6}
          style={canvasStyles}
          ref={canvasRef}
          strokeColor="white"
          strokeWidth={window.innerHeight * 0.07}
          canvasColor="black"
        />
        <DemoButton
          rotation={13}
          column={3}
          row={2}
          text="Clear"
          canvas={canvasRef}
          click={() => {
            canvasRef.current.clearCanvas();
          }}
        />
        <DemoButton
          rotation={-13}
          column={3}
          row={4}
          text="Submit"
          canvas={canvasRef}
          click={() => {
            setPred(pred === "" ? 0 : pred + 1);
          }}
        />
        <ButtonBg style={{}} row={3} column={3}>
          <ButtonText>
            Prediction: {pred}
            <BlinkingBar>|</BlinkingBar>
          </ButtonText>
        </ButtonBg>
      </CanvasWrapper>
    </DemoContainer>
  );
};
const DemoButton = (props) => {
  return (
    <ButtonBg rotation={props.rotation} column={props.column} row={props.row}>
      <Button rotation={-props.rotation}>
        <ButtonText onClick={props.click}>{props.text}</ButtonText>
      </Button>
    </ButtonBg>
  );
};
export default Demo;
