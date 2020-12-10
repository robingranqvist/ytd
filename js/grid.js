let bgGrid = document.querySelector('.bg-grid');

// Creates the grid
function generateBgGrid() {
    shuffleArray(bgID);

    bgID.forEach((id)=> {
        let gridBox = document.createElement('div');
        let imgStr = generateThumb(id, 'mq');

        gridBox.classList.add('bg-grid-img');
        gridBox.style.backgroundImage = `url("${imgStr}")`;
        bgGrid.append(gridBox);
    });
}

generateBgGrid();