const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const run_media_server = require("./media_server");

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Receive images for gesture recognition
app.post("/api/detect_gesture", (req, res) => {
  const image = req.body.image_data
  res.json(image);
});
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Gesture recognition server listening on ${port}`);
});
