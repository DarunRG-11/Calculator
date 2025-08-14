const expressionInput = document.getElementById("expression");

function appendValue(value) {
    expressionInput.value += value;
}

function clearEntry() {
    expressionInput.value = expressionInput.value.slice(0, -1);
}

function allClear() {
    expressionInput.value = "";
}


function roundTo(value, precision) {
    let factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
}

function calculate() {
    try {
        let result = eval(expressionInput.value.replace(/×/g, "*").replace(/÷/g, "/"));
        expressionInput.value = result;
    } catch (error) {
        expressionInput.value = "Error";
    }
}

document.getElementById("allclear").addEventListener("click", allClear);
document.getElementById("clear").addEventListener("click", clearEntry);
document.getElementById("percent").addEventListener("click", () => appendValue("/100"));
document.getElementById("divide").addEventListener("click", () => appendValue("÷"));
document.getElementById("prod").addEventListener("click", () => appendValue("×"));
document.getElementById("minus").addEventListener("click", () => appendValue("-"));
document.getElementById("plus").addEventListener("click", () => appendValue("+"));
document.getElementById("point").addEventListener("click", () => appendValue("."));
document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("zero").addEventListener("click", () => appendValue("00"));
document.getElementById("twozero").addEventListener("click", () => appendValue("0"));
document.getElementById("one").addEventListener("click", () => appendValue("1"));
document.getElementById("two").addEventListener("click", () => appendValue("2"));
document.getElementById("three").addEventListener("click", () => appendValue("3"));
document.getElementById("four").addEventListener("click", () => appendValue("4"));
document.getElementById("five").addEventListener("click", () => appendValue("5"));
document.getElementById("six").addEventListener("click", () => appendValue("6"));
document.getElementById("seven").addEventListener("click", () => appendValue("7"));
document.getElementById("eight").addEventListener("click", () => appendValue("8"));
document.getElementById("nine").addEventListener("click", () => appendValue("9"));
