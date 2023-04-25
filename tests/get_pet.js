// tests/main.js
//import http from "k6/http";
import { sleep } from "k6"; // подключаем сон
import create_pet from "./create_pet.js"; // подключаем создание питомца
import get_pet from "./get_pet.js"; // подключет просмотр питомца
import { group } from 'k6'; // подключем группировку тестов - !!! переменные не живут между группами


const apiEndpoint = `https://petstore.swagger.io/v2/pet/`; // адрес обращения


export default function () {
// console.log("Hello from K6");
// sleep(1);
group('API create and get', () => {
var pet_id = create_pet(apiEndpoint); // переменная живет внутри группы
//});

 sleep(1);

// group('API get', () => {
 get_pet(apiEndpoint,pet_id);
});

}
