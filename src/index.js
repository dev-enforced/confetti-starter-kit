import { App } from "./App";
console.log("Testing webpack dev server connection");
const root = document.getElementById("root");
root.innerHTML = `The index js file format ${App()}`;
