/* -----------------------------------
   GLOBAL VARIABLES
------------------------------------ */
let fontSize = 110;
let letterSpacing = 0;
let circle = 0;
let elongation = 0;
let lineHeight = 1;

const root = document.documentElement;

/* -----------------------------------
   FONT SIZE SLIDER
------------------------------------ */
function setFontSize(newFontSize) {
    fontSize = newFontSize;

    document.querySelector("#font-size-preview").style.fontSize =
        newFontSize + "px";

    document.querySelector("#current-font-size").innerText = newFontSize;
}

/* -----------------------------------
   LETTER SPACING SLIDER
------------------------------------ */
function setLetterSpacing(newSpacing) {
    letterSpacing = newSpacing;

    document.querySelector("#tracking-preview").style.letterSpacing =
        newSpacing + "px";

    document.querySelector("#current-letter-spacing").innerText = newSpacing;
}

/* -----------------------------------
   VARIABLE FONT AXES
------------------------------------ */
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

/* -----------------------------------
   APPLY SETTINGS TO TEXT + TESTER
------------------------------------ */
function applySettings() {
    let text = document.querySelector("#text");
    let tester = document.querySelector("#tester");

    text.style.fontVariationSettings = `"CIRC" ${circle}, "LONG" ${elongation}`;
    tester.style.fontVariationSettings = `"CIRC" ${circle}, "LONG" ${elongation}`;

    text.style.lineHeight = lineHeight;
    tester.style.lineHeight = lineHeight;
}

/*CHARACTER TESTER*/
function changeLetter(newLetter) {
    document.querySelector("#tester").textContent = newLetter;
}
