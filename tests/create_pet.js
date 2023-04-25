// tests/main.js
import http from "k6/http";

export default function (apiEndpoint) {
 // console.log("Hello from K6");

 var randomId = 1000 + Math.ceil(Math.random() * 9665609 * Math.random() + 1);

 let new_pet = {
    "id": randomId,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Utka_shutka",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  };

 let res = http.post(`${apiEndpoint}`,JSON.stringify(new_pet),{ headers: { 'Content-Type': 'application/json' }});

 console.log("create_pet "+randomId);
 console.log(res.json());

  return randomId;

}