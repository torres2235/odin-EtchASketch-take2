let body = document.querySelector('body');
let grid = document.querySelector('#grid');

//on loading the js, run the resize function
document.body.onload = resize(16);

function resize(x) {
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
}


//select all the grid divs
document.querySelectorAll('.square').forEach(item => {
    //add the mouseover event to each
    item.addEventListener('mouseover', function (e) {
        //have that div change black when hovered
        e.target.style.background = 'black';
    });
})

//adds clearing functionality
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(item => {
        item.style.background = 'white';
    })
})