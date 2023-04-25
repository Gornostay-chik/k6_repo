// tests/main.js
import http from "k6/http";
import { check} from 'k6'; // подключаем проверки - тест не прерывается в  случае неудачи !!
import { Trend } from 'k6/metrics'; // подключаем возможность собственных метрик
const TrendCheck = new Trend('/API get');

export default function (apiEndpoint,pet_id) {
 // console.log("Hello from K6");
 
let res = http.get(`${apiEndpoint}${pet_id}`);
 console.log("get_pet");

 // блок проверок
 check(res, {
    "get status code should be 200": res => res.status === 200,
});
 check(res, {
    "get response should have status available": res => res.json().status === "available",
});

check(res, {
    "get response should have id from create": res => res.json().id === pet_id,
});

TrendCheck.add(res.timings.duration);

 console.log(res.json());
}
