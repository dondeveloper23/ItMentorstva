let canvasElement = document.querySelector('canvas');
let ctx = canvasElement.getContext('2d');
let drawBtn = document.querySelector('#drawBtn');
let resetBtn = document.querySelector('#resetBtn');
let lineCountDiv = document.querySelector('#lineCountDiv');
let drawColorBtn = document.querySelector('#drawColorBtn');
let lineCount = 1;
let clickPoints = [];

canvasElement.addEventListener('click', function (event) {
    let rect = canvasElement.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top

    clickPoints.push({x: x, y: y});

})

drawBtn.addEventListener('click', function () {
    let randomColor = generateRandomColor()
    drawPath(randomColor)
    resetDrawPoints ()
    addParagragph(randomColor)
    incrementDrawCount()
})
drawColorBtn.addEventListener('click', function () {
    let promptColor = prompt("Koju boju zelite?");
    drawPath(promptColor);
    resetDrawPoints()
    addParagragph(promptColor);
    incrementDrawCount()
})

resetBtn.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    lineCount = 1
    lineCountDiv.innerHTML = ""
})
function incrementDrawCount() {
    lineCount++
}

function resetDrawPoints () {
    clickPoints = []
}
function addParagragph(color) {
    let lineCountParagraph = document.createElement('p')
    lineCountParagraph.textContent = `${lineCount}. linija nacrtana u boji ${color}`
    lineCountDiv.appendChild(color);
}

function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function drawPath (color) {
    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);
    for (let i = 0; i < clickPoints.length; i++) {
        ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }
    ctx.strokeStyle = color
    ctx.stroke()
}