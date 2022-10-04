import { App } from "./App";
import "./index.css";
const root = document.getElementById("root");
root.innerHTML = `
<div>
    <h1>Confetti Starter Kit</h1>
    <p class="description">Click on the button and see more</p>
</div>
${App()}
`;
