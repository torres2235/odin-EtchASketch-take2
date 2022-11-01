let body = document.querySelector('body');
let grid = document.querySelector('#grid');

//16x16 grid = 256 squares
for(let i = 0; i < 256; i ++) {
    //create each square for our grid
    let div = document.createElement('div');
    div.classList.add('square');
    div.textContent = '.';
    //setting size of each square to be (in this case 1/16)
    div.style.width = 'calc(100%/16)';
    div.style.height = 'calc(100%/16)';

    //append each square to our grid
    grid.appendChild(div);
}