#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char *ssid = "Gia Thinh";
const char *password = "my_pass";


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

      HTTPClient http;
  
      http.begin("https://foresy-apis-sensor.herokuapp.com/sensor/heart-rate/create"); //Specify destination for HTTP request
      http.addHeader("Content-Type", "application/json");                              //Specify content-type header



      Serial.println("—————");
      StaticJsonBuffer<300> JSONbuffer;
      JsonObject &JsonDataSensor = JSONbuffer.createObject();

      JsonDataSensor["device_id"] = "bb789020-1653-11ec-9c42-bb601b2bea72";
      JsonDataSensor["value"] = 99;
      JsonDataSensor["timestamp"] = 163456789;

      String jsonStr; 
      JsonDataSensor.printTo(jsonStr);
  
      int httpResponseCode = http.POST(jsonStr); //Send the actual POST request
  
      Serial.println(httpResponseCode);
      http.end(); //Free resources
  }

    else
    {

      Serial.println("Error in WiFi connection");
    }

    delay(10000); //Send a request every 10 seconds
  }