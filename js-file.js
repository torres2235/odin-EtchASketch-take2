let grid = document.querySelector('#grid');
let buttonSelect = 0;

//on loading the js, run the resize function
document.body.onload = resize();

function resize(x=16) {
    let totalSquares = x * x;

    //16x16 grid = 256 squares
    for(let i = 0; i < totalSquares; i ++) {
        //create each square for our grid
        let div = document.createElement('div');
        div.classList.add('square');
        //div.textContent = '.';
        //setting size of each square to be (in this case 1/16)
        div.style.width = 'calc(100%/' + x +')';
        div.style.height = 'calc(100%/' + x + ')';

        //append each square to our grid
        grid.appendChild(div);
    }

    //select all the grid divs
    //NOTE: weird that i have this in the function. should be a way to 
    // have it outside.
    document.querySelectorAll('.square').forEach(item => {
        //add the mouseover event to each
        item.addEventListener('mouseover', function (e) {
            if(buttonSelect == 0) { //change to black
                e.target.style.backgroundColor = "black";
            } else if (buttonSelect == 1) { //pick random color
                e.target.style.backgroundColor = getColor();
            }
        });
    })
};

//------------------------------------------------------------------------------

//adds clearing functionality
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(item => {
        item.style.background = 'white';
    })
})

//------------------------------------------------------------------------------

//resizes our grid
let form = document.querySelector('form');

form.addEventListener("submit", function(e){

    e.preventDefault(); //prevents autosubmiting

    //creates an array of each div in the container
    let children = document.getElementById("grid").getElementsByTagName("*");

    //cycles through each div
    for( var i = 0; i<children.length;){ 
        children[i].remove();
    }

    let size = document.getElementById('size').value
    
    if(size <= 100) {
        resize(size);
    } else {
        alert("Invalid size");
        resize(16);
    } 
});

//------------------------------------------------------------------------------

//these two fucntions generate a random RGB value ("rgb(#, #, #)")
let getRandomColor = () => { //To give me a new rgb number everytime
    return (Math.floor(Math.random() * (255)));
};
function getColor() {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

//------------------------------------------------------------------------------

//these two functions toggle if the the grids change to black or a random color
let blackButton = document.getElementById('black');
blackButton.addEventListener("click", function(e){
    return buttonSelect = 0;
});

let colorButton = document.getElementById('rainbow');
colorButton.addEventListener("click", function(e){
    return buttonSelect = 1;
});