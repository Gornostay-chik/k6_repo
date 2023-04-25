// tests/main.js
import http from "k6/http";
export default function (apiEndpoint,pet_id) {
 // console.log("Hello from K6");
let res = http.get(`${apiEndpoint}${pet_id}`);
 console.log("get_pet");
 console.log(res.json());
}
