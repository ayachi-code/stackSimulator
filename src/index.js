let button;
let button2;
let button3;
let button4;

let inp;

let usedMoves = [];
let elements = [];

let addressRange = 1028;


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function popFront () {
    if (usedMoves == 0) {
        alert("Stack is empty ;) There is nothing to pop lol ");
        return;
    };
    if (usedMoves.length == 1) {
        push();
        noStroke();
        fill(255,255,255);
        rect(0, 599, 250, 100);   
        pop();
        usedMoves.pop();
        elements.pop();
        return;
    };
    console.log( usedMoves);
    push();
    noStroke();
    fill(255,255,255);
    rect(0, usedMoves[usedMoves.length-1]+99, 250, 100)
    pop();
    usedMoves.pop();
    elements.pop();
};


function pushValueToQueue (value) {
        if (usedMoves.length == 0) {
            push();
            fill(randomIntFromInterval(0,255),randomIntFromInterval(0,255),randomIntFromInterval(0,255));
            rect(0, 600, 250, 100);   
            pop();
            usedMoves.push(600-100);
            elements.push();
            textSize(30);
            let randomInteger = randomIntFromInterval(1,100);
            text(randomInteger,125-25,660);
            elements.push(randomInteger);
            fill(0);
            return;
        } else if (usedMoves.length == 7) {
            alert("Stack is full!")
            return;
        }
        push();
        fill(randomIntFromInterval(0,255),randomIntFromInterval(0,255),randomIntFromInterval(0,255));
        rect(0, usedMoves[usedMoves.length-1], 250, 100);   
        pop();
        push(); 
        textSize(30);
        let randomInteger = randomIntFromInterval(1,100);
        text(randomInteger,100,usedMoves[usedMoves.length-1]+52);
        fill(0);
        pop();
        usedMoves.push(usedMoves[usedMoves.length-1]-100);
        elements.push(randomInteger);
};

function setup() {
    let mainContainer = createDiv()
    let cnv = createCanvas(400, 700);
    mainContainer.child(cnv);
    // cnv.parent('mainCanvas');
    background(0);

    push();
    strokeWeight(5);
    stroke(255);
    rect(0, 0, 250, 700);
    pop();
    push();
    rect(250, 0, 250, 700);
    pop();
    button = createButton('push');
    button.id('push')
    button2 = createButton('pop');
    button2.id('pop')
    button3 = createButton('top');
    button3.id('top')
    button4 = createButton('clear');
    button4.id('clear')
    mainContainer.child(button);
    mainContainer.child(button2);
    mainContainer.child(button3);
    mainContainer.child(button4);


    push_address();
}

function push_address() {
    let prefix = "0x";
    let addressRange = 1028;

    for (let i = 0; i < 7; i++) {
        let address = prefix + addressRange;
        push();
        fill(18,221,105);
        rect(250, 600-(i*100), 150, 100);   
        pop();
        push(); 
        textSize(30);
        console.log(address);
        text(address,280,660-(i*100));
        fill(0);
        pop();
        addressRange -= 4;
        address = "";
    }
}

function draw () {
    button.mousePressed(pushValueToQueue);
    button2.mousePressed(popFront)
    button3.mousePressed(() => {
        if (usedMoves.length == 0) {
            alert("Stack is empty :/");
            return;
        } 
        alert("Top of the stack is: " + elements[elements.length-1]);
    })
    button4.mousePressed(() => {
        elements = [];
        usedMoves = [];
        push();
        stroke(100);
        fill(255);
        rect(0, 0, 250, 700);
        pop();
    });
};


