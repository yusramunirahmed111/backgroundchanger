
   const colors = [
    "red", "blue", "green", "yellow", "pink", 
    "purple", "orange", "cyan", "lime", "brown",
    "magenta", "grey", "indigo", "violet", "black"
];

let currentColorIndex = 0;

document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});