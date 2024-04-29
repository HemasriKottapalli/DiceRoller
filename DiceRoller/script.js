const input = document.getElementById('diceNum');
const output1 = document.getElementById('diceResults');
const output2 = document.getElementById('diceImages');
const line = document.getElementById('line');

function roll(){

    let noOfDice = input.value;
    let numsArr = [];
    let imgArr = [];

    for(let i=0; i<noOfDice; i++){
        let num = Math.floor(Math.random()*6 + 1);
        numsArr.push(num);
        imgArr.push(`<img src="./images/inverted-dice-${num}.png" alt="inverted-dice-${num}">`);
    }

    output1.innerText = `dice : ${numsArr.join(', ')}`;
    output2.innerHTML = `${imgArr.join(' ')}`;

}