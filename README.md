# Foresy APIs

### APIs Documents
```
endpoint: https://foresy-apis-sensor.herokuapp.com
headers: {
    "Content-Type": "application/json
}

```
* `POST` /sensor/heart-rate/create

    ```json
    {
        "device_id": "123", // string
        "value": 12, // number
        "timestamp": 1631729973 // number
    }
    ```
* `GET` /sensor/heart-rate/list
