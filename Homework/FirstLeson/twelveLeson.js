"use strict";

let colorChaing = document.querySelector(".redBtn");
console.log(colorChaing);

colorChaing.addEventListener("click", () => {
    if (document.body.classList.contains("lightMod")) {
        document.body.classList.remove("lightMod");
        document.body.classList.add("darkMod");
        colorChaing.textContent = "Turn on";
        const newElement = document.createElement("p");
        const timestamp = Date.now();
        const currentDate = new Date(timestamp);
        const options = { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
        newElement.textContent = "Last turn off : " + currentDate.toLocaleString(options);
        document.body.appendChild(newElement);
        localStorage.setItem("day", JSON.stringify(currentDate));
    } else {
        document.body.classList.remove("darkMod");
        document.body.classList.add("lightMod");
        colorChaing.textContent = "Turn OFF";
        const newElement = document.createElement("p");
        const timestamp = Date.now();
        const currentDate = new Date(timestamp);
        const options = { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
        newElement.textContent = "Last turn ON : " + currentDate.toLocaleString(options);
        document.body.appendChild(newElement);
        localStorage.setItem("night", JSON.stringify(currentDate));
    }
});
