// tests/main.js
import http from "k6/http";
const apiEndpoint = `https://petstore.swagger.io/v2/pet/`;
export default function () {
 // console.log("Hello from K6");
 http.get(`${apiEndpoint}9223372036854775095`);
}
