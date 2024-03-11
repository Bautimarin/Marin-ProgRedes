/* ENUMS
enum ContractStatus {
     Permanent,
     Temp,
     Apprentice
}

let empleado : ContractStatus = ContractStatus.Permanent;
console.log(ContractStatus[empleado]);

*/

/* ANY, UNKOWN => as

let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue.named);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
(randomValue as string).toUpperCase();      // Returns "randomValue is not a function" error



let randomValue: unknown = 10;

randomValue = true;
randomValue = "false";

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
*/

/* TIPOS MULTIPLES
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid


*/

/* TIPOS LITERALES O RESTRINGIDOS
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid

si o si tiene que dar uno de los valores definidos arriba

*/


