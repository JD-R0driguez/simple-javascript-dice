function getRandomNumbers (){
    const randomNumber1 = Math.ceil(Math.random() * 6);
    const randomNumber2 = Math.ceil(Math.random() * 6);
    const firstDice = document.querySelector(".img1");
    firstDice.setAttribute("src", "./images/dice-" + randomNumber1 + ".svg");
    const secondDice = document.querySelector(".img2");
    secondDice.setAttribute("src", "./images/dice-" + randomNumber2 + ".svg");
}

const button = document.getElementById("myButton");
button.addEventListener ("click", function(){
    const dices = getRandomNumbers()
    button.classList.toggle("active");
})

const dices = getRandomNumbers()

