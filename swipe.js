const mainEl = document.querySelector('main');
//const visualContent = document.querySelector('visualcontent');
const images = [...document.querySelectorAll('.vpost')];

images.forEach((image, idx) => {
    image.addEventListener('click', () => {
        console.log('image clicked');
    })
})

//Measure content translate pixel amount
let current = 0;

//store current slide number
let slide = 0;

//set app height to be window.innerheight as vh doesnt work the same on mobile
const doc = document.documentElement;
const appHeight = () => {
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    current = -slide * window.innerHeight;
    visualContent.style.transform = `translateY(${current}px)`;
}
window.addEventListener('resize',appHeight)
appHeight();

window.addEventListener('touchstart', startTouch, {passive: false});
window.addEventListener('touchend', endTouch, {passive: false});
window.addEventListener('touchmove', moveTouch, {passive: false});

window.addEventListener('mousedown', startMouseDown);
window.addEventListener('mouseup', startMouseUp);
window.addEventListener('wheel', wheelFunc, {passive: false});

// Mouse grab / Mouse Wheel / track pads

let canSwipe = true;

function wheelFunc (e) {
    //console.log(e.deltaY);
    if (canSwipe) {
        //swipeup
        if (e.deltaY > 60 && current !== -(window.innerHeight * 5)) {
            canSwipe = false;
            current -= window.innerHeight;
            slide++;
            
            //console.log('swipe', current, window.innerHeight);

            visualContent.style.transform = `translateY(${current}px)`;

            setTimeout(() => {
                canSwipe = true;
                //console.log('canswipe = ',canSwipe);
            }, 600);

        }
        
        //swipe down
        if (e.deltaY < -60 && current !== 0) {
            canSwipe = false;
            current += window.innerHeight;
            slide--;

            visualContent.style.transform = `translateY(${current}px)`;

            setTimeout(() => {
                canSwipe = true;
            }, 600);
        }


    }
}

let initialStart = 0;
let initial = 0;

let initialY = 0;
let endY = 0;

function startMouseDown(e) {
    initialStart = Date.now();
    initialY = e.clientY;
}

function startMouseUp(e) {
    initialEnd = Date.now();
    endY = e.clientY;

    if (initialEnd - initialStart < 800) {
        swipe();
        console.log(initialEnd-initialStart);

    }
}

// Touch Screens

function startTouch(e) {
    initialStart = Date.now();
    initialY = e.touches[0].clientY;
}

function endTouch(e) {
    initialEnd = Date.now();
    endY = e.changedTouches[0].clientY;

    if (initialEnd - initialStart < 800) {
        swipe();
    }
}

function swipe() {
    console.log("swipe",endY, initialY);
    //drag/swipe up
    if (endY - initialY < -50) {
        if (current !== -(window.innerHeight * 5)) {
            current -= window.innerHeight;
            slide++;
        }
    } else if (endY - initialY >50) {
        if (current !==0) {
            current += window.innerHeight;
            slide--;
        }
    }
    visualContent.style.transform = `translateY(${current}px)`;
}

function moveTouch(e) {
    e.preventDefault();
}


