//parent
const containerDiv = document.getElementById('container-div');
let choices = ['B/W', 'RGB', 'Opacity'];
let choiceOfChange;
let opacityPercentage = 0;

//Listeners to change the type of painting
const grayscaleButton = document.getElementById('grayscale');
grayscaleButton.addEventListener('click', () => {
    console.log(choices[0]);
    choiceOfChange = choices[0];
    opacityPercentage = 0;
});

const rgbButton = document.getElementById('rgb');
rgbButton.addEventListener('click', () => {
    console.log(choices[1]);
    choiceOfChange = choices[1];
    opacityPercentage = 0;
});

const opacityButton = document.getElementById('opacity');
opacityButton.addEventListener('click', () => {
    console.log(choices[2]);
    choiceOfChange = choices[2];
    opacityPercentage = 0;
});

//Create child elements to the above parent element
const button = document.getElementById('change-size');
button.addEventListener('click', () =>{
    const gridSize = document.getElementById('user-prompt').value;
    if(gridSize > 0 && gridSize <= 100){
        clearGrid();
        gridNew(gridSize);
    }
    else{
        alert(`Enter a valid grid size (1-100)`);
    }
})

function clearGrid(){
    containerDiv.innerHTML = '';
}

//Grid print function
function gridNew(size){
    const squareSize = 600 / size;
    for(let i = 0; i < size * size; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = squareSize + 'px';
        gridItem.style.height = squareSize + 'px';
        //console.log(squareSize, gridItem);
        containerDiv.appendChild(gridItem);
    }
}

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

//Event listener to change colour
containerDiv.addEventListener('mouseover', (item) => {
    if(item.target.classList.contains('grid-item')){
        if(choiceOfChange == choices[0]){
            item.target.style.backgroundColor = 'black';
        }
        else if(choiceOfChange == choices[1]){
            item.target.style.backgroundColor = getRandomColor();
        }
        else if(choiceOfChange == choices[2]){
            opacityPercentage += 0.1; 
            item.target.style.backgroundColor = `rgba(0 0 0 / ${opacityPercentage}%)`;
        }
    }
});

//default starting position
gridNew(32);
document.getElementById('user-prompt').value = '32';