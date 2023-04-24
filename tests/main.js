// tests/main.js
//import http from "k6/http";
import { sleep } from "k6";
import not_main from "./not_main.js";
export default function () {
 console.log("Hello from K6");
 sleep(1);
 not_main();
}
