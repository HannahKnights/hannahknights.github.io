
let words = ["is a work in progress", "is a something", "is an artist", "is loading...", "is interested in culture & technology", "likes words, likes images, likes both", "is interested in the past and the future", "is thinking..."];
let index = 0;

function sketch1(p) {

    p.setup = function() {
        let container = document.getElementById("canvas");
        let canvas = p.createCanvas(container.offsetWidth, 100);
        canvas.parent("canvas");
        p.textSize(getTextSize());
        // Change word every 2000 milliseconds (2 second)
        setInterval(changeWord, 2000);
    }
    p.draw = function() {
        p.clear();
        p.text("Hannah Knights " + words[index], 20, 40);
    }

    p.windowResized = function() {
        let container = document.getElementById("canvas");
        p.resizeCanvas(container.offsetWidth, 100);
        p.textSize(getTextSize());
    }

    function getTextSize() {
        return window.innerWidth < 750 ? 18 : 20;
    }

    function changeWord() {
        index = (index + 1) % words.length;
    } 
}

new p5(sketch1);
