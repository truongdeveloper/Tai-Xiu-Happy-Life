let sucSac1 = document.querySelector('.suc-sac-1');
let sucSac2 = document.querySelector('.suc-sac-2');
let sucSac3 = document.querySelector('.suc-sac-3');
let result = document.querySelector('.result');
let winTai = document.querySelector('.than-tai');
let winXiu = document.querySelector('.less-xiu');
let history = document.querySelector('.history');
let betTai = document.querySelector('.input-bet__than');
let betXiu = document.querySelector('.input-bet__less');
let inputBet = document.querySelector('input[type="number"]');
let btnBetTai = document.querySelector('.btn__bet-tai');
let btnBetXiu = document.querySelector('.btn__bet-xiu');
let resultArr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
var diceArr = [
    mot = '<img src="assets/img/1.png" alt="" >',
    hai = '<img src="assets/img/2.png" alt="" >',
    ba = '<img src="assets/img/3.png" alt="" >',
    bon = '<img src="assets/img/4.png" alt="" >',
    nam = '<img src="assets/img/5.png" alt="" >',
    sau = '<img src="assets/img/6.png" alt="" >'
];

function betAction() {
    btnBetXiu.classList.remove('hide');
    btnBetTai.classList.remove('hide');
    document.querySelector('.bet-waring').classList.add('hide');
    betTai.innerHTML = "";
    betXiu.innerHTML = "";
    inputBet.value = 0;
    var moneyBet = 0;
    
    inputBet.onchange = function(e){
        moneyBet = e.target.value;
    }
    console.log(moneyBet)
    btnBetTai.onclick = function() {
        if(!moneyBet == 0){
            betTai.innerHTML = moneyBet.toString();
            btnBetXiu.classList.add('hide');
        }else{
            document.querySelector('.bet-waring').classList.remove('hide');
        }
    }
    btnBetXiu.onclick = function() {
        if(!moneyBet == 0){
            betXiu.innerHTML = moneyBet.toString();
            btnBetTai.classList.add('hide')
        }else{
            document.querySelector('.bet-waring').classList.remove('hide');
        }
    }
}
// betAction();
setInterval(() => {
    betAction()
}, 10000);


let audio = document.querySelector('.muted');
audio.muted = true;
function randomDice(){
    let p = Math.floor(Math.random() * 6);
    return p;
};

function gameDice() {
    let Sibo1 = randomDice();
    let Sibo2 = randomDice();
    let Sibo3 = randomDice();

    sucSac1.innerHTML = diceArr[Sibo1];
    sucSac2.innerHTML = diceArr[Sibo2];
    sucSac3.innerHTML = diceArr[Sibo3];
    return Sibo1 + Sibo2 + Sibo3 + 3;
}
function resultHistory(array) {
    let historyHTML = array.map((myArr, index) =>{
        if(myArr){
            return '<div class="dot-black"></div>';
        }else{
            return  '<div class="dot-white"></div>';
        }
    })
    history.innerHTML = historyHTML.join('')
}
function animation() {
    if(gameDice() > 10){
        resultArr.push(1);
        winTai.classList.add('win-animation')
        setTimeout(() => {
            winTai.classList.remove('win-animation')
        }, 5000);
    }else{
        resultArr.push(0);
        winXiu.classList.add('win-animation')
        setTimeout(() => {
            winXiu.classList.remove('win-animation')
        }, 5000);
    }
    resultArr.shift();
}
function gameOnBaby() { setTimeout(() => {
    animation();
    setTimeout(() => {
        resultHistory(resultArr);
    }, 1000);
    gameOnBaby();
}, 10000);
}

gameOnBaby()


let countDown = document.querySelector('.cout-down');
let currentTime = 10;
function timeOut(time) {
    countDown.classList.remove('hide')
    result.classList.add('hide')
    if(time == 0){
        time = currentTime;
        countDown.classList.add('hide')
        result.classList.remove('hide')
    }
    countDown.innerHTML = time.toString();
    setTimeout(() => {
        time--;
        timeOut(time);
    }, 1000);
}
timeOut(currentTime)


