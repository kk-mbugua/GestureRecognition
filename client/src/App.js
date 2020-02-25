import React, { Component } from "react";
import "./App.css";
import Webcam from "react-webcam"; // https://www.npmjs.com/package/react-webcam
import ReactPlayer from "react-player"; // https://www.npmjs.com/package/react-player

class App extends Component {
  state = {
    playbackUrl: null
  };
  videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  playbackStyle = {
    height: "200px",
    width: "200px"
  };

  render() {
    return (
      <div style={this.playbackStyle}>
        <Webcam
          audio={false}
          mirrored={true}
          videoConstraints={this.videoConstraints}
          height={400}
        >
          {" "}
        </Webcam>
        <ReactPlayer url={this.state.playbackUrl} />
      </div>
    );
  }
}
export default App;
