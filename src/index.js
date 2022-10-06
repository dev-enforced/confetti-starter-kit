import { App } from "./App";
import "./index.css";
const root = document.getElementById("root");

const canvasConfetti = require("canvas-confetti");
const promisePolyfill = require("promise-polyfill");
const myCanvas = document.createElement("canvas");

const myConfetti = canvasConfetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});
const clickHandler = () => {
  myConfetti({ particleCount: 100, spread: 160 });
};

root.innerHTML += `
<div>
    <h1>Confetti Starter Kit</h1>
    <p class="description">Click on the button and see more</p>
</div>
${App()}
`;

myCanvas.style = "position:absolute;z-index:2;width:100%;";
document.querySelector("body").appendChild(myCanvas);
document.querySelector(".clickBtn").style = "z-index:4;";
document.querySelector(".clickBtn").addEventListener("click", clickHandler);
