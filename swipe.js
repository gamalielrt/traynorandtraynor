const mainEl = document.querySelector('main');
//const visualContent = document.querySelector('visualcontent');
const images = [...document.querySelectorAll('.vpost')];


images.forEach((image, idx) => {
    image.style.color = 'red';
    image.addEventListener('click', () => {
        console.log('image clicked');
    })
})


//Measure content translate pixel amount
let current = 0;

//store current slide number
let slide = 0;

//Spacing
let itemSpacing = Math.round(window.innerHeight*0.6)

//Number of items
let itemsAmount = visualPostList.numberOfVisualPosts;

//Item selected
let itemNumber = 0;


//set app height to be window.innerheight as vh doesnt work the same on mobile
const doc = document.documentElement;
const appHeight = () => {
    doc.style.setProperty('--app-height', `${itemSpacing}px`);
    current = -slide * itemSpacing;
    visualContent.style.transform = `translateY(${current}px)`;
}
window.addEventListener('resize',appHeight)
appHeight();

//window.addEventListener('touchstart', startTouch, {passive: false});
//window.addEventListener('touchend', endTouch, {passive: false});
//window.addEventListener('touchmove', moveTouch, {passive: false});
//window.addEventListener('mousedown', startMouseDown);
//window.addEventListener('mouseup', startMouseUp);
//window.addEventListener('wheel', wheelFunc, {passive: false});

// Mouse grab / Mouse Wheel / track pads

let canSwipe = true;

function wheelFunc (e) {
    //console.log(e.deltaY);
    if (canSwipe) {
        //swipeup
        if (e.deltaY > 60 && current !== -(itemSpacing * (itemsAmount-1))) {
            canSwipe = false;
            current -= itemSpacing;
            slide++;
            itemNumber++;
            updateOpacity(itemNumber);

            
            //console.log('swipe', current, window.innerHeight);
            //console.log("Visual post", itemNumber);


            visualContent.style.transform = `translateY(${current}px)`;

            setTimeout(() => {
                canSwipe = true;
                //console.log('canswipe = ',canSwipe);
            }, 600);

        }
        
        //swipe down
        if (e.deltaY < -60 && current !== 0) {
            canSwipe = false;
            current += itemSpacing;
            slide--;
            itemNumber--;
            updateOpacity(itemNumber);



            //console.log('swipe', current, window.innerHeight);
            //console.log("Visual post", itemNumber);
//

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
        //console.log(initialEnd-initialStart);

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
    //console.log("swipe",endY, initialY);
    //drag/swipe up
    if (endY - initialY < -50) {
        if (current !== -(itemSpacing * itemsAmount)) {
            current -= itemSpacing;
            slide++;
            itemNumber++;
            updateOpacity(itemNumber);


            //console.log("Visual post", itemNumber);


        }
    } else if (endY - initialY >50) {
        if (current !==0) {
            current += itemSpacing;
            slide--;
            itemNumber--;
            updateOpacity(itemNumber);


            //console.log("Visual post", itemNumber);


        }
    }
    visualContent.style.transform = `translateY(${current}px)`;
}

function moveTouch(e) {
    e.preventDefault();
}

function updateOpacity (x) {
    let current = x;
    document.getElementById("vpcontdiv"+ current).style.opacity = '80%';
    if (x >= 1) {
        //console.log(x);


        let previous = x-1;
        document.getElementById("vpcontdiv"+ previous).style.opacity = '10%';


    }

    if (x < itemsAmount-1) {
        let next = x+1;
        document.getElementById("vpcontdiv"+ next).style.opacity = '10%';
    

    }




}


