// Deklarasi Animasi
function environtmentAnimation() {
    let Building = document.getElementById('Building');
    let Midground = document.getElementById('Midground');
    let Ground = document.getElementById('Ground');

    let speedx = 1;
    let positionX = 0;

    function step() {
        positionX = positionX + speedx;
        Building.style.backgroundPositionX = -positionX / 4 + 'px';
        Midground.style.backgroundPositionX = -positionX + 'px';
        Ground.style.backgroundPositionX = -positionX / 2 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}


function myTrainAnimation() {
    const maxYPosition = 8;
    let speedY = 0.2;
    let positionY = 0;
   
    function step() {
        positionY = positionY + speedY;
        if (positionY)

            if (positionY > maxYPosition || positionY < 0) {
                speedY = speedY * (-1);
            }
        MyTrain.style.bottom = positionY + 210 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function moonAnimation() {
    const maxYPosition = 70;
    let speedY = 1;
    let positionY = 5;
   
    function step() {
        positionY = positionY + speedY;
        if (positionY)

            if (positionY > maxYPosition || positionY < 0) {
                speedY = speedY * (-1);
            }
        Moon.style.bottom = positionY + 410 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function cloudAnimation() {
    const maxYPosition = 100;
    let speedY = 1;
    let positionY = 0;

    function step() {
        positionY = positionY + speedY;
        if (positionY)

            if (positionY > maxYPosition || positionY < 0) {
                speedY = speedY * (-1);
            }
        Cloud1.style.left = positionY / 2 + 100 + 'px';
        Cloud1.style.top = -positionY / 2 + 100 + 'px';

        Cloud2.style.right = -positionY / 2 + 100 + 'px';
        Cloud2.style.top = -positionY / 2  + 100 + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

// Memulai Animasi
environtmentAnimation()
myTrainAnimation()
cloudAnimation() 
moonAnimation()