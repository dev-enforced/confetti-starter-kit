import _ from "canvas-confetti";
import { App } from "./App";
import "./index.css";
const root = document.getElementById("root");
const myCanvas = document.createElement("canvas");

const myConfetti = _.create(myCanvas, {
  resize: true,
  useWorker: true,
});
const clickHandler = () => {
  myConfetti({ particleCount: 200, spread: 160 });
};

root.innerHTML += `
<div>
    <img class="confetti-asset" src=${require("./assets/confetti-asset.jpg")}></img>
    <h1>Confetti Starter Kit</h1>
    <p class="description">Click on the button and see more</p>
</div>
${App()}
`;

myCanvas.style = "position:absolute;z-index:2;width:100%;";
document.querySelector("body").appendChild(myCanvas);
document.querySelector(".clickBtn").style = "z-index:4;";
document.querySelector(".clickBtn").addEventListener("click", clickHandler);
