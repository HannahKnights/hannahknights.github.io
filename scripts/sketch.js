
let words = ["is a work in progress", "is a something", "is an artist", "is loading...", "is interested in culture & technology", "likes words, likes images, likes both", "is interested in the past and the future", "is thinking..."];
let index = 0;
let w = innerWidth;
let h = innerHeight;

function sketch1(p) {

    p.setup = function() {
        let canvas = p.createCanvas(w, h);
        canvas.parent("canvas");
        p.textSize(20);
        // p.textAlign(LEFT, LEFT);
        // Change word every 1000 milliseconds (1 second)
        setInterval(changeWord, 2000);
    }
    p.draw = function() {
        p.clear();
        p.text("Hannah Knights " + words[index], 20, 40);
    }

    function changeWord() {
        index = (index + 1) % words.length;
    } 

    // function setup() {
    //     let canvas = createCanvas(windowWidth, windowHeight);
    //     canvas.parent("canvas");
    //     textSize(20);
    //     textAlign(LEFT, LEFT);
    //     // Change word every 1000 milliseconds (1 second)
    //     setInterval(changeWord, 2000);
    // }

    // function draw() {
    //     clear();
    //     //   background("white");
    //     //   fill(0);
    //     text("Hannah Knights is " + words[index], 20, 40);
    // }

    // function changeWord() {
    //     index = (index + 1) % words.length;
    // }
}

new p5(sketch1);
