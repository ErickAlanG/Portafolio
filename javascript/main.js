import { desplazar, centrar } from "./projects.js";
import { inicializarMail, mandarEmail } from "./contactame.js";

document.addEventListener("DOMContentLoaded", () => {
    desplazar();
    centrar();
    inicializarMail();
    mandarEmail();
})