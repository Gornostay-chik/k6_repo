// tests/main.js
import http from "k6/http";
import { check} from 'k6'; // подключаем проверки - тест не прерывается в  случае неудачи !!
import { Trend } from 'k6/metrics'; // подключаем возможность собственных метрик

const TrendCheckCR = new Trend('/API create');

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

 TrendCheckCR.add(res.timings.duration);

 // блок проверок
 check(res, {
  "create status code should be 200": res => res.status === 200,
});

  check(res, {
    "create response should have status available": res => res.json().status === "available",
});

// возврат переменной для следующего скрипта
  return randomId;

}
