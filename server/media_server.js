const NodeMediaServer = require("node-media-server");
const port = process.env.PORT || 5000;

const config = {
  rtmp: {
    port: port,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: "*"
  }
};

var nms = new NodeMediaServer(config);

module.exports = () => {
  console.log(`Media server listening on ${port}`);
  nms.run();
};
