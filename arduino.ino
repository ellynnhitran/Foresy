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
  { //Check WiFi connection status

    //  HTTPClient http;

    //  http.begin("https://foresy-apis-sensor.herokuapp.com/sensor/heart-rate/create");  //Specify destination for HTTP request
    //  http.addHeader("Content-Type", "application/json");             //Specify content-type header

    //  int httpResponseCode = http.POST("{\"device_id\":\"bb789020-1653-11ec-9c42-bb601b2bea72\",\"value\":\"70\",\"timestamp\":\"163456789\"}");   //Send the actual POST request

    //  if(httpResponseCode>0){

    //   String response = http.getString();                       //Get the response to the request

    //   Serial.println(httpResponseCode);   //Print return code
    //   Serial.println(response);           //Print request answer

    Serial.println("—————");
    StaticJsonBuffer<300> JSONbuffer;
    JsonObject &JSONencoder = JSONbuffer.createObject();

    JSONencoder["sensorType"] = "Temperature";
    JsonArray &values = JSONencoder.createNestedArray("values");

    values.add(20);
    values.add(21);
    values.add(23);

    int lenghtSimple = JSONencoder.measureLength();
    Serial.print("Less overhead JSON message size: ");
    Serial.println(lenghtSimple);

    int lenghtPretty = JSONencoder.measurePrettyLength();
    Serial.print("Pretty JSON message size: ");
    Serial.println(lenghtPretty);
    Serial.println();

    Serial.println("Less overhead JSON message: ");
    JSONencoder.printTo(Serial);
    Serial.println();

    Serial.println("\nPretty JSON message: ");
    JSONencoder.prettyPrintTo(Serial);
    Serial.println();

    Serial.println("\nPretty JSON message from buffer: ");
    char JSONmessageBuffer[300];
    JSONencoder.prettyPrintTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
    Serial.println(JSONmessageBuffer);
    Serial.println();
  }
  else
  {

    Serial.print("Error on sending POST: ");
    Serial.println(httpResponseCode);
  }

  http.end(); //Free resources
}
else
{

  Serial.println("Error in WiFi connection");
}

delay(10000); //Send a request every 10 seconds
}