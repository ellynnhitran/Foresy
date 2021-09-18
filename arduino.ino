#include <WiFi.h>
#include <HTTPClient.h>

const char *ssid = "yourNetworkName";
const char *password = "yourNetworkPassword";

void setup()
{

  Serial.begin(115200);
  delay(4000); //Delay needed before calling the WiFi.begin

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  { //Check for the connection
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }

  Serial.println("Connected to the WiFi network");
}

void loop()
{

  if (WiFi.status() == WL_CONNECTED)
  {
    //Check WiFi connection status

    //  HTTPClient http;

    http.begin("https://foresy-apis-sensor.herokuapp.com/sensor/heart-rate/create"); //Specify destination for HTTP request
    http.addHeader("Content-Type", "application/json");                              //Specify content-type header

    String response = http.getString(); //Get the response to the request

      Serial.println(httpResponseCode); //Print return code
      Serial.println(response);         //Print request answer

      Serial.println("—————");
      StaticJsonBuffer<300> JSONbuffer;
      JsonObject &JsonDataSensor = JSONbuffer.createObject();

      JsonDataSensor["device_id"] = "bb789020-1653-11ec-9c42-bb601b2bea72";
      JsonDataSensor["value"] = 99;
      JsonDataSensor["timestamp"] = 163456789;
     
      // int lenghtSimple = JsonDataSensor.measureLength();
      // Serial.print("Less overhead JSON message size: ");
      // Serial.println(lenghtSimple);

      // int lenghtPretty = JsonDataSensor.measurePrettyLength();
      // Serial.print("Pretty JSON message size: ");
      // Serial.println(lenghtPretty);
      // Serial.println();

      // Serial.println("Less overhead JSON message: ");
      // JsonDataSensor.printTo(Serial);
      // Serial.println();

      // Serial.println("\nPretty JSON message: ");
      // JsonDataSensor.prettyPrintTo(Serial);
      // Serial.println();

    int httpResponseCode = http.POST(JsonDataSensor); //Send the actual POST request

    Serial.println(httpResponseCode);
    http.end(); //Free resources

    else
    {

      Serial.println("Error in WiFi connection");
    }

    delay(10000); //Send a request every 10 seconds
  }