var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var choice1 = document.getElementById("choice");
var answer1 = document.getElementById("thechoice");
var choice2 = document.getElementById("botchoice");
var answer2 = document.getElementById("answer");
var winner = document.getElementById("Winner");
var gif = document.getElementById("gif");
var you = document.getElementById("you");
var botA = document.getElementById("bot");

var botwin = 0;
var yourwin = 0;
var wincount = document.getElementById("wincount");

var botchoices = ["Rock", "Paper", "Scissors"]

rock.addEventListener("click", () => {
    rock.classList.add("animation");
    choice1.classList.remove("hide");
    answer1.innerText = "Rock";
    var bot = Math.floor((Math.random() * 3))
    // console.log(bot);
    var botofficial = botchoices[bot];
    console.log(botofficial);
    choice2.classList.remove("hide");
    answer2.innerText = botofficial;

    if(answer2.innerText == "Rock"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Rock.png";
        img.alt = "Rock";
        img.classList.add("rock");
        botA.appendChild(img)
    }

    if(answer2.innerText == "Paper"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Paper.png";
        img.alt = "Paper";
        img.classList.add("paper");
        botA.appendChild(img)
    }

    if(answer2.innerText == "Scissors"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Scissors.png";
        img.alt = "Scissors";
        img.classList.add("scissors");
        botA.appendChild(img)
    }


    while(you.children.length > 1){
        you.removeChild(you.lastChild)
    }

    var img = document.createElement("img");
    img.src = "./Images/Rock.png";
    img.alt = "Rock";
    img.classList.add("rock");
    img.classList.add("animate");
    you.appendChild(img)
    // img.classList.remove("animate");
    
    

    if(botofficial == "Rock"){
        winner.innerText = "Draw"
    }
    if(botofficial == "Paper"){
        winner.innerText = "The bot wins..."
        botwin += 1;
    }
    if(botofficial == "Scissors"){
        winner.innerText = "You win!"
        var firework = document.createElement("img");
        firework.src = "./Images/tenor.gif";
        firework.alt = "Firework";
        firework.classList.add("rock");
        firework.classList.add("transparent");
        winner.appendChild(firework);
        yourwin += 1;
    }
    wincount.innerText = "Wincount: " + yourwin + "-" + botwin;
    var time = setTimeout(() => {
        rock.classList.remove("animation");
    }, 1000);

})

paper.addEventListener("click", () => {
    paper.classList.add("animation")
    choice1.classList.remove("hide");
    answer1.innerText = "Paper";
    var bot = Math.floor((Math.random() * 3))
    // console.log(bot);
    var botofficial = botchoices[bot];
    console.log(botofficial);
    choice2.classList.remove("hide");
    answer2.innerText = botofficial;

    if(answer2.innerText == "Rock"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Rock.png";
        img.alt = "Rock";
        img.classList.add("rock");
        botA.appendChild(img)
    }

    if(answer2.innerText == "Paper"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Paper.png";
        img.alt = "Paper";
        img.classList.add("paper");
        botA.appendChild(img)
    }

    if(answer2.innerText == "Scissors"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Scissors.png";
        img.alt = "Scissors";
        img.classList.add("scissors");
        botA.appendChild(img)
    }

    while(you.children.length > 1){
        you.removeChild(you.lastChild)
    }

    var img = document.createElement("img");
    img.src = "./Images/Paper.png";
    img.alt = "Paper";
    img.classList.add("paper");
    you.appendChild(img)


    if(botofficial == "Rock"){
        winner.innerText = "You win!"
        yourwin += 1;
    }
    if(botofficial == "Paper"){
        winner.innerText = "Draw"
    }
    if(botofficial == "Scissors"){
        winner.innerText = "The bot wins..."
        botwin += 1;
    }
    wincount.innerText = "Wincount: " + yourwin + "-" + botwin;
    var time = setTimeout(() => {
        paper.classList.remove("animation");
    }, 1000);

})

scissors.addEventListener("click", () => {
    scissors.classList.add("animation");
    
    choice1.classList.remove("hide");
    answer1.innerText = "Scissors";
    var bot = Math.floor((Math.random() * 3))
    // console.log(bot);
    var botofficial = botchoices[bot];
    console.log(botofficial);
    choice2.classList.remove("hide");
    answer2.innerText = botofficial;

    if(answer2.innerText == "Rock"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Rock.png";
        img.alt = "Rock";
        img.classList.add("rock");
        botA.appendChild(img)
    }

    if(answer2.innerText == "Paper"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Paper.png";
        img.alt = "Paper";
        img.classList.add("paper");
        botA.appendChild(img)
    }

    if(answer2.innerText == "Scissors"){
        console.log(botA.children);
        console.log(botA.children.length)
        while(botA.children.length > 1){
            botA.removeChild(botA.lastChild)
        }
    
        var img = document.createElement("img");
        img.src = "./Images/Scissors.png";
        img.alt = "Scissors";
        img.classList.add("scissors");
        botA.appendChild(img)
    }

while(you.children.length > 1){
    you.removeChild(you.lastChild)
}
    var img = document.createElement("img");
    img.src = "./Images/Scissors.png";
    img.alt = "Scissors";
    img.classList.add("scissors");
    you.appendChild(img)

    if(botofficial == "Rock"){
        winner.innerText = "The bot wins..."
        botwin += 1;
    }
    if(botofficial == "Paper"){
        winner.innerText = "You win!"
        yourwin += 1;
    }
    if(botofficial == "Scissors"){
        winner.innerText = "Draw"
    }
    wincount.innerText = "Wincount: " + yourwin + "-" + botwin;
    var time = setTimeout(() => {
        scissors.classList.remove("animation");
    }, 1000);

})



