const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");



// dữ liệu bình thường
const data_1 = [44 ,45 ,46 ,49 ,52 ,62 , 59 ,60 ,77 , 63 ,57 ,56 , 83 ,46 ,45 ,43 ,44 ,44 ,47 ,64 ,60 ,59 ,72 ,68 ,68 ,62 ,60 ,60 ,62 ,58 ,57 ,54, 54 ,55 ,56 ,54 ,52 ,50  ,52 ,50 ,44 ,42 ,43 ,44  ,45 ,44 ,46 ,48 ,52  ,55 ,60 ,67 ,72 ,67 ,68 ,76 ,82 ,80 ,79 ,72 ,68 ,69 ,68 ,73 ,72 ,72 ,74 ,75 ,82 ,87,86 ,68 ,62 ,60 ]

// dữ liệu vận động
const data_2 = [98 ,132 ,135, 139 ,130 ,125 ,129 ,132 ,132 ,133 ,133 ,128 ,119 ,136 ,136 ,131 ,119 ,108 ,105 ,100 ,99 ,98 ,107 ,112 ,123 ,131 ,148 ,163 ,172 ,181 ,174 ,184 ,186 ,134 ,117 ,103 ,97, 93 ,92 ,91]

var data_3 = [218, 211, 191, 247, 230, 228, 210, 205, 236]

// data_3 = []

client.on("connect", ack => {
    // console.log(ack)
	console.log("client test 2 connected!");
    // client.publish("heart-rate", "Hello mqtt " + new Date().getTime());

    var i = 0;
	setInterval(() => {
		client.publish("heart-rate", [...data_1, ...data_2, ...data_3][i].toString());
        // console.log(i)
        i++;
        if (i >= [...data_2, ...data_1, ...data_3].length) i = 0;
	}, 1000);
	
});

client.on("error", err => {
	console.log(err);
});