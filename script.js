//parent
const containerDiv = document.getElementById('container-div');

//Create child elements to the above parent element

gridNew(16);
//Grid print function
function gridNew(size){
    for(let i = 0; i < size * size; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        containerDiv.appendChild(gridItem);
    }
}