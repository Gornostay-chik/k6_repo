// tests/main.js
//import http from "k6/http";
import { sleep } from "k6";
import create_pet from "./create_pet.js";
import get_pet from "./get_pet.js";

const apiEndpoint = `https://petstore.swagger.io/v2/pet/`;

export default function () {
// console.log("Hello from K6");
// sleep(1);
var pet_id = create_pet(apiEndpoint);
 sleep(1);
 get_pet(apiEndpoint,pet_id);
}
