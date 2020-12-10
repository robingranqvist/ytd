// Elements
let input = document.querySelector('.form-input');
let btn = document.querySelector('.form-btn');
let wrapper = document.querySelector('.wrapper-box');
let h1finished = document.querySelector('.h1-finished');
let label = document.querySelector('.form-label');

let checkBtns = document.querySelectorAll('input[name="quality"]');


// Video ID's for the BG Grid
const bgID = [
    "-DusRnF36UA",
    "OeUadGNcN-8",
    "A9Tp5fl18Ho",
    "hCL46kEeGGY",
    "pPsBFPX_yU4",
    "XqCg4sIhyFc",
    "HDAKS18Gv1U",
    "htyVjHr2_m8",
    "l0Jo-9aqhYc",
    "Ardc3nrQMxw",
    "HR3PnikhOn8",
    "-C-2AqRD8io",
    "Cxq3GIxlv20",
    "D1sZ_vwqwcE",
    "5qap5aO4i9A",
    "gVN6FqPpChQ"
]

// Returns thumbnail strings
function generateThumb(id, def) {
    if (def === 'hq') {
        return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    } else if (def === 'mq') {
        return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isChecked()) {
        stripStr(input.value);
    } else {
        label.innerHTML = 'Please choose thumbnail quality';
        label.classList.add('warning');
    }
});

function isChecked() {
    for (let i=0; i < checkBtns.length; i++) {
        if (checkBtns[i].checked == true) {
            return true;
        }
    }

    return false;
}

// Gets the video ID from users input
function stripStr(input) {
    if (input.includes('=')) {
        let vidID = input.split('=', 2)[1];

        if (vidID.length > 11) {
            vidID = vidID.split('&', 2);
            generateImg(vidID[0]);
        } else {
            generateImg(vidID);
        }
    } else if (input.includes('youtu.be')) {
        let vidID = input.split('https://youtu.be/', 2)[1];
        if (vidID.length > 11) {
            vidID = vidID.split('&', 2);
            generateImg(vidID[0]);
        } else {
            generateImg(vidID);
        }
    } else {
        label.innerHTML = 'Please enter a valid YouTube URL';
        label.classList.add('warning');
    }
}

// Generates the users image
function generateImg(vidID) {
    let imgStr = generateThumb(vidID, 'hq');
    let imgBox = document.createElement('img');

    wrapper.innerHTML = '';
    imgBox.classList.add('img-box');
    wrapper.appendChild(imgBox);
    imgBox.src = imgStr;
    h1finished.textContent = "Here's your thumbnail";
    h1finished.style.display = 'block';
    createHelper();
}

// Creates the helper
function createHelper() {
    let helper = document.createElement('p');

    helper.textContent = 'Download the thumbnail by right click -> save image';
    helper.classList.add('helper');
    wrapper.appendChild(helper);
}

// Shuffles array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}