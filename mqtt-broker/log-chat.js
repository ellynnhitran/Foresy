const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

var dataChat = []

client.on("connect", ack => {
    console.log("client test 1 connected!");
    // console.log(ack);

    client.subscribe("chat-server", err => {
        console.log("subscribe message: ", err);
    });

    client.subscribe("get-data-chat")

    client.publish("chat-client", dataChat.toString())

    client.on("message", (topic, message) => {
        console.log("topic: ", topic);
        // message is Buffer
        console.log("message: ", message.toString());
        if (topic == "chat-server") {
            dataChat.push(message);
            client.publish("chat-client", dataChat.toString())
        }
        else if (topic == "get-data-chat"){
            client.publish("chat-client", dataChat.toString())
        }

    });

});

client.on("error", err => {
    console.log(err);
});