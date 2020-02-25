import React, { Component } from "react";
import Webcam from "react-webcam";

class Webcam extends Component {
  state = {};

  renderWebcam = () => {
    const comp = <Webcam audio={false}></Webcam>;
  };
  render() {
    return <div>{this.renderWebcam()}</div>;
  }
}

export default Webcam;
