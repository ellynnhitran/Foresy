const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", ack => {
  console.log("client test 1 connected!");
  // console.log(ack);

  client.subscribe("heart-rate", err => {
    console.log("subscribe message: ", err);
  });

  client.on("message", (topic, message) => {
    console.log("topic: ",topic);
    // message is Buffer
    console.log("message: ",message.toString());
  });

});

client.on("error", err => {
  console.log(err);
});