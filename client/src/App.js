import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import Webcam from "react-webcam"; // https://www.npmjs.com/package/react-webcam

class App extends Component {
  state = {
    image_data: null,
    detect_gesture: false,
  };
  playbackStyle = {
    height: "200px",
    width: "200px"
  };

  componentDidUpdate() {
    this.capture_interval();
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  getGesture = async (image_data) => {
    await Axios.post("/api/detect_gesture", {
      image_data: image_data
    }).then((gesture)=>{
      console.log("gesture returned")
      this.setState({image_data: gesture.data})
    })    
  };

  capture = () => {
    const image_data = this.webcam.getScreenshot();
    this.getGesture(image_data);
  };

  capture_interval = interval => {
    if (!this.state.detect_gesture) {
      return;
    }
    this.capture();
    setInterval(() => {
      this.capture();
    }, 200);
  };

  renderWebcam = () => {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    const comp = (
      <Webcam
        ref={this.setRef}
        audio={false}
        mirrored={true}
        videoConstraints={videoConstraints}
        height={400}
      >
        {" "}
      </Webcam>
    );
    return comp;
  };

  render() {
    return (
      <div style={this.playbackStyle}>
        {this.renderWebcam()}
        <button
          onClick={() => {
            this.setState({ detect_gesture: true });
          }}
        >
          Detect Interval
        </button>
        <button onClick={this.capture}>Single Capture</button>
        {this.state.image_data && (
          <img src={this.state.image_data} alt={"fire"}></img>
        )}
      </div>
    );
  }
}
export default App;
