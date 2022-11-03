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
  DemoImg,
  PredictCheck,
  PredictCheckText,
} from "./demoElements";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { Fragment } from "react";

const Demo = () => {
  const canvasStyles = {
    gridArea: "2 / 1 / 5 / 3",
  };
  const canvasRef = useRef(null);
  const [pred, setPred] = useState("");

  async function predict() {
    const canvas = canvasRef.current;
    const img = await canvas.exportImage("png");
    console.log(img);
    const im_data = { image: img };
    setPred("Predicting...");
    try {
      const res = await fetch(
        "https://vikas-ml-demos.herokuapp.com/api/mnist/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(im_data),
        }
      );
      const data = await res.json();
      setPred(data);
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
          width={"60vh"}
          height={"60vh"}
          style={canvasStyles}
          ref={canvasRef}
          strokeColor="white"
          strokeWidth={"5vh"}
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
            {pred === "Predicting..."
              ? "Predicting..."
              : pred === ""
              ? ""
              : pred.prediction
              ? `Prediction: ${pred.prediction}`
              : ""}
            <BlinkingBar>|</BlinkingBar>
          </ButtonText>
        </ButtonBg>
        <PredictCheck row={5} column={1}>
          {pred.prediction ? (
            <>
              <PredictCheckText>What the computer sees:</PredictCheckText>
              <DemoImg
                src={`data:data:image/png;base64,${pred.img}`}
                alt="Image that the computer sees"
              />
            </>
          ) : null}
        </PredictCheck>
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
