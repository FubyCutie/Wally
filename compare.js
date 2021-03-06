const { registerFont, createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const args = process.argv.slice(2)
const canvas = createCanvas(600, 400);
const context = canvas.getContext('2d');

create();

async function create() {
    var background = await loadImage('res/background.png');
    var winsIcon = await loadImage('res/win.png');
    var wallsIcon = await loadImage('res/wall.png');
    var qualIcon = await loadImage('res/q.png');
    var finIcon = await loadImage('res/f.png');
    var totalIcon = await loadImage('res/total.png');

    registerFont('res/font.ttf', { family: 'default' })
    context.drawImage(background, 0, 0, 600, 400);

    context.fillStyle = "rgba(0, 0, 0, 0.4)";
    context.fillRect(0, 0, 600, 400);

    context.drawImage(winsIcon, 10, 105, 24, 24);
    context.drawImage(winsIcon, 566, 105, 24, 24);
    context.drawImage(wallsIcon, 10, 155, 24, 24);
    context.drawImage(wallsIcon, 566, 155, 24, 24);
    context.drawImage(qualIcon, 10, 205, 24, 24);
    context.drawImage(qualIcon, 566, 205, 24, 24);
    context.drawImage(finIcon, 10, 255, 24, 24);
    context.drawImage(finIcon, 566, 255, 24, 24);
    context.drawImage(totalIcon, 10, 305, 24, 24);
    context.drawImage(totalIcon, 566, 305, 24, 24);

    context.font = 'regular 26pt ';
    context.textAlign = 'left';
    context.fillStyle = '#fff';
    context.shadowColor = "black";
    context.shadowBlur = 5;
    context.shadowOffsetX = 3;
    context.shadowOffsetY = 3;
    context.fillText(args[0], 10, 40);

    if (args[22] === "75203801f5a54ba6baa691523aa15848") {
        context.font = 'regular 20pt ';
        context.fillText("hhhhhhhhhh", 10, 70);
    }
    if (args[22] === "16d455475ddf42d48e9ffdb45cd69fa5") {
        context.font = 'regular 20pt ';
        context.fillText("The Champion himself", 10, 70);
    }
    if (args[22] === "983b1593a9a443ab8f2a15e0a65f720f") {
        context.font = 'regular 20pt ';
        context.fillText("No Fly Queen", 10, 70);
    }
    if (args[22] === "c46f6438006049d4830ca6fa732303fc") {
        context.font = 'regular 20pt ';
        context.fillText("HitW Elder", 10, 70);
    }
    if (args[22] === "b00d07b27984424db8f2d96c1e4aace5") {
        context.font = 'regular 20pt ';
        context.fillText("Community Father", 10, 70);
    }
    if (args[22] === "bedb53e2dd754786a2ac1ec80023aabe") {
        context.font = 'regular 20pt ';
        context.fillText("Simon's Cube Slave", 10, 70);
    }
    context.font = 'regular 26pt ';
    context.textAlign = 'right';
    context.fillText(args[6], 590, 40);


    if (args[23] === "75203801f5a54ba6baa691523aa15848") {
        context.font = 'regular 20pt ';
        context.fillText("hhhhhhhhhh", 590, 70);
    }
    if (args[23] === "16d455475ddf42d48e9ffdb45cd69fa5") {
        context.font = 'regular 20pt ';
        context.fillText("The Champion himself", 590, 70);
    }
    if (args[23] === "983b1593a9a443ab8f2a15e0a65f720f") {
        context.font = 'regular 20pt ';
        context.fillText("No Fly Queen", 590, 70);
    }
    if (args[23] === "c46f6438006049d4830ca6fa732303fc") {
        context.font = 'regular 20pt ';
        context.fillText("HitW Elder", 590, 70);
    }
    if (args[23] === "b00d07b27984424db8f2d96c1e4aace5") {
        context.font = 'regular 20pt ';
        context.fillText("Community Father", 590, 70);
    }
    if (args[23] === "bedb53e2dd754786a2ac1ec80023aabe") {
        context.font = 'regular 20pt ';
        context.fillText("Simon's Cube Slave", 590, 70);
    }
    context.font = 'regular 18pt '
    context.textAlign = 'left'


    if (Number(args[14].replace(" ", "")) < Number(args[19].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[14].replace(" ", "")) === Number(args[19].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("Wins: "+args[3]+" ("+args[14]+")", 50, 125);
    if (Number(args[15].replace(" ", "")) < Number(args[20].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[15].replace(" ", "")) === Number(args[20].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("Walls: "+args[4]+" ("+args[15]+")", 50, 175);
    if (Number(args[12].replace(" ", "")) < Number(args[17].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[12].replace(" ", "")) === Number(args[17].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("Qualification: "+args[1]+" ("+args[12]+")", 50, 225);
    if (Number(args[13].replace(" ", "")) < Number(args[18].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[13].replace(" ", "")) === Number(args[18].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("Finals: "+args[2]+" ("+args[13]+")", 50, 275);
    if (Number(args[16].replace(" ", "")) < Number(args[21].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[16].replace(" ", "")) === Number(args[21].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("Q/F Total: "+args[5]+" ("+args[16]+")", 50, 325);

    context.fillText("Wins: "+args[3]+" ("+args[14]+")", 50, 125);
    context.fillText("Walls: "+args[4]+" ("+args[15]+")", 50, 175);
    context.fillText("Qualification: "+args[1]+" ("+args[12]+")", 50, 225);
    context.fillText("Finals: "+args[2]+" ("+args[13]+")", 50, 275);
    context.fillText("Q/F Total: "+args[5]+" ("+args[16]+")", 50, 325);

    context.textAlign = 'right'
    if (Number(args[14].replace(" ", "")) > Number(args[19].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[14].replace(" ", "")) === Number(args[19].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("("+args[19]+") "+args[9]+" :Wins", 550, 125);
    if (Number(args[15].replace(" ", "")) > Number(args[20].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[15].replace(" ", "")) === Number(args[20].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("("+args[20]+") "+args[10]+" :Walls", 550, 175);
    if (Number(args[12].replace(" ", "")) > Number(args[17].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[12].replace(" ", "")) === Number(args[17].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("("+args[17]+") "+args[7]+" :Qualification", 550, 225);
    if (Number(args[13].replace(" ", "")) > Number(args[18].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[13].replace(" ", "")) === Number(args[18].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("("+args[18]+") "+args[8]+" :Finals", 550, 275);
    if (Number(args[16].replace(" ", "")) > Number(args[21].replace(" ", ""))) {context.strokeStyle = 'red';} else {context.strokeStyle = 'green';}
    if (Number(args[16].replace(" ", "")) === Number(args[21].replace(" ", ""))) {context.strokeStyle = 'yellow';}
    context.strokeText("("+args[21]+") "+args[11]+" :Q/F Total", 550, 325);
    console.log(args[21]);

    context.fillText("("+args[19]+") "+args[9]+" :Wins", 550, 125);
    context.fillText("("+args[20]+") "+args[10]+" :Walls", 550, 175);
    context.fillText("("+args[17]+") "+args[7]+" :Qualification", 550, 225);
    context.fillText("("+args[18]+") "+args[8]+" :Finals", 550, 275);
    context.fillText("("+args[21]+") "+args[11]+" :Q/F Total", 550, 325);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./compare.png', buffer);
}
