const btnelementIncrement = document.getElementById("btnElementIncrement");
const btnElementDecrement = document.getElementById("btnElementDecrement");
const counterElement = document.getElementById("countElement");
let counter = Number(counterElement.textContent);

btnelementIncrement.addEventListener("click", () => {
    counter++;
    counterElement.textContent = String(counter);

    if (counter === 10) alert("llegaste a 10")
});

btnElementDecrement.addEventListener("click", () => {
    counter --;
    counterElement.textContent = String(counter);

    if (counter === -10) alert("llegaste a -10")
});