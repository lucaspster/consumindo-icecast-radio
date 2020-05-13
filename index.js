const Parser = require("icecast-parser");

const urls = "http://listen.42fm.ru:8000/stealkill-128";
const radioStation = new Parser({
  url: urls,
  userAgent: "Parse-Icy",
  keepListen: false,
  autoUpdate: true,
  errorInterval: 10 * 60,
  emptyInterval: 5 * 60,
  metadataInterval: 5,
});

radioStation.on("metadata", function (metadata) {
  console.log(metadata.StreamTitle);
});
