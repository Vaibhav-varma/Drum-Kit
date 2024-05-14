const drums = document.querySelectorAll(".drum");


function playSound(letter) {
    switch(letter) {
        case "w":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            const kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    }
}

function buttonAnimation(letter) {
    let activeButton = document.querySelector("." + letter) ;
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}

drums.forEach((drum) => {
    drum.addEventListener("click", function() {
        let letter = this.innerHTML;
        playSound(letter);
        buttonAnimation(letter);
    });
});

document.addEventListener("keydown", function(event) {
    let letter = event.key;
    playSound(letter);
    buttonAnimation(letter);
});

