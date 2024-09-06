/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧

const btn = document.querySelector("button"); // Get the button from the page
if (btn) {
  // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}
*/
// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});

let clickCount = 0;
const maxClicks = 42;
const targetUrl = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

document.getElementById("clickableImage").addEventListener("click", function() {
    clickCount++;
    if (clickCount === maxClicks) {
        window.location.href = targetUrl;
    }
    console.log(clickCount)
});

let clickCount1 = 0;
const maxClicks1 = 69;

document.getElementById("rickroll").addEventListener("click", function() {
    clickCount1++;
    if (clickCount1 === maxClicks1) {
        window.location.href = targetUrl;
    }
});