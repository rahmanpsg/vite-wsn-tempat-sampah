const mqtt = require("mqtt");

const host = "test.mosquitto.org";
const port = "1883";
const url = `mqtt://${host}:${port}`;

const topic = "wsn-tempat-sampah";

const supabase = require("./supabase");

exports.connect = () => {
  const client = mqtt.connect(url, {
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
  });

  client.on("connect", function () {
    console.log(`Berhasil terhubung ke ${url}`);
    client.subscribe(topic, function (err) {
      if (!err) {
        console.log(`Subscribe ke ${topic}`);
      }
    });
  });

  client.on("message", async function (topic, message) {
    try {
      const { node, tinggi, berat } = JSON.parse(message.toString());

      const { data, error } = await supabase
        .from("data")
        .insert([{ node, tinggi, berat }]);

      if (!error) {
        console.log("Berhasil menyimpan data ke supabase");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  });
};
