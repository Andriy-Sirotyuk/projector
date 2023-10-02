"use strict";

let colorChaing = document.querySelector(".redBtn");
console.log(colorChaing);
const body = document.body;

function setMode(state) {
    if (state === "off") {
        body.classList.remove("lightMode");
        body.classList.add("darkMode");
        colorChaing.textContent = "Turn ON";
        const newElement = document.createElement("p");
        const formattedDate = formatCurrentDate();
        newElement.textContent = "Last turn OFF : " + formattedDate;
        body.appendChild(newElement);
    } else {
        body.classList.remove("darkMode");
        body.classList.add("lightMode");
        colorChaing.textContent = "Turn OFF";
        const newElement = document.createElement("p");
        const formattedDate = formatCurrentDate();
        newElement.textContent = "Last turn ON : " + formattedDate;
        body.appendChild(newElement);
    }
    localStorage.setItem("colorMode", state);
}

document.addEventListener("DOMContentLoaded", () => {
    const currentState = localStorage.getItem("colorMode") || "off";
    setMode(currentState);
});

colorChaing.addEventListener("click", () => {
    const currentState = localStorage.getItem("colorMode") || "off";
    const newState = currentState === "off" ? "on" : "off";
    setMode(newState);
});

function formatCurrentDate() {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}
