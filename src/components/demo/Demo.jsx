import { React, useRef } from "react";
import {
  DemoContainer,
  DemoHeader,
  Button,
  ButtonBg,
  ButtonText,
  CanvasWrapper,
} from "./demoElements";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Demo = () => {
  const canvasStyles = {
    gridArea: "1 / 1 / 3 / 3",
    // marginTop: "50%",
  };
  const canvasRef = useRef(null);
  return (
    <DemoContainer>
      <DemoHeader>MNIST Demo</DemoHeader>
      <CanvasWrapper>
        <ReactSketchCanvas
          width="100%"
          height="100%"
          style={canvasStyles}
          ref={canvasRef}
          strokeColor="black"
          strokeWidth={20}
        />
        <DemoButton
          rotation={13}
          column={3}
          row={1}
          text="Clear"
          canvas={canvasRef}
        />
      </CanvasWrapper>
    </DemoContainer>
  );
};
const DemoButton = (props) => {
  return (
    <ButtonBg rotation={props.rotation} column={props.column} row={props.row}>
      <Button rotation={-props.rotation}>
        <ButtonText
          onClick={() => {
            props.canvas.current.clearCanvas();
          }}
        >
          {props.text}
        </ButtonText>
      </Button>
    </ButtonBg>
  );
};
export default Demo;
