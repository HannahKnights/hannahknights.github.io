
let words = ["is a work in progress", "is a something", "is an artist", "is loading...", "is interested in culture & technology", "likes words, likes images, likes both", "is interested in the past and the future", "is thinking..."];
let index = 0;
let w = innerWidth - 20;
let h = 100;

function sketch1(p) {

    p.setup = function() {
        let canvas = p.createCanvas(w, h);
        canvas.parent("canvas");
        p.textSize('1em');
        // Change word every 2000 milliseconds (2 second)
        setInterval(changeWord, 2000);
    }
    p.draw = function() {
        p.clear();
        p.text("Hannah Knights " + words[index], 20, 40);
    }

    function changeWord() {
        index = (index + 1) % words.length;
    } 
}

new p5(sketch1);
