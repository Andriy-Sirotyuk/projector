"use strict";

const colorModeButton = document.querySelector(".redBtn");
console.log(colorModeButton);
const body = document.body;

function turnOn() {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    colorModeButton.textContent = "Turn OFF";
}

function turnOff() {
    body.classList.remove("lightMode");
    body.classList.add("darkMode");
    colorModeButton.textContent = "Turn ON";
}

function setMode(state) {
    if (state === "off") {
        turnOff();
    } else {
        turnOn();
    }
}

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

const savedData = JSON.parse(localStorage.getItem("colorModeData"));

if (savedData) {
    setMode(savedData.state);

    const newElement = document.createElement("p");
    newElement.textContent = `Last turn ${savedData.state.toUpperCase()} : ${savedData.lastChangeTime}`;
    body.appendChild(newElement);
}

colorModeButton.addEventListener("click", () => {
    const currentState = localStorage.getItem("colorModeData") || "off";
    const newState = currentState === "off" ? "on" : "off";
    const lastChangeTime = formatCurrentDate();

    setMode(newState);

    const newElement = document.createElement("p");
    newElement.textContent = `Last turn ${newState.toUpperCase()} : ${lastChangeTime}`;
    body.appendChild(newElement);

    localStorage.setItem("colorModeData", JSON.stringify({ state: newState, lastChangeTime }));
});
