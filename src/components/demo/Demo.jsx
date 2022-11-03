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

  async function predict() {
    const canvas = canvasRef.current;
    const img = await canvas.exportImage("png");
    console.log(img);
    const im_data = { image: img };
    try {
      const res = await fetch("http://localhost:5000/api/mnist/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(im_data),
      }); // TODO change to actual url
      const data = await res.json();
      setPred(data.prediction);
      console.log(data.img);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <DemoContainer>
      <DemoHeader style={{ gridArea: "1 / 1 / 2 / 3" }}>MNIST Demo</DemoHeader>
      <DemoInstructions style={{ gridArea: "2 / 1 / 2 / 3" }}>
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
            setPred("");
          }}
        />
        <DemoButton
          rotation={-13}
          column={3}
          row={4}
          text="Submit"
          canvas={canvasRef}
          click={() => {
            predict();
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
