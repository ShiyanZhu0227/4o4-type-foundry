
let fontSize = 110;
let letterSpacing = 0;
let circle = 0;
let elongation = 0;
let lineHeight = 1;

const root = document.documentElement;


function setFontSize(newFontSize) {
    fontSize = newFontSize;

    document.querySelector("#font-size-preview").style.fontSize =
        newFontSize + "px";

    document.querySelector("#current-font-size").innerText = newFontSize;
}


function setLetterSpacing(newSpacing) {
    letterSpacing = newSpacing;

    document.querySelector("#tracking-preview").style.letterSpacing =
        newSpacing + "px";

    document.querySelector("#current-letter-spacing").innerText = newSpacing;
}


function changeCircle(newValue) {
    circle = newValue;
    applySettings();
}

function changeElongation(newValue) {
    elongation = newValue;
    applySettings();
}

function changeLineHeight(newValue) {
    lineHeight = newValue;
    applySettings();
}


function applySettings() {
    let text = document.querySelector("#text");
    let tester = document.querySelector("#tester");

    text.style.fontVariationSettings = `"CIRC" ${circle}, "LONG" ${elongation}`;
    tester.style.fontVariationSettings = `"CIRC" ${circle}, "LONG" ${elongation}`;

    text.style.lineHeight = lineHeight;
    tester.style.lineHeight = lineHeight;
}


function changeLetter(newLetter) {
    document.querySelector("#tester").textContent = newLetter;
}
