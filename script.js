const canvas = document.getElementById('canvas');
const score = document.getElementById('score');
const days = document.getElementById('days');
const endScreen = document.getElementById('endScreen');

daysLeft = 60;
gameOverNumber = 50;

function start() {
    count = 0;
    getFaster = 6000;
    daysRemaining = daysLeft;
    
    canvas.innerHTML = '';
    score.innerHTML = count;
    days.innerHTML = daysRemaining;

    game();

    function game() {

        let randomTime = Math.round(Math.random() * getFaster);
        getFaster > 700 ? getFaster = (getFaster * 0.90) : '';

        setTimeout(() => {
            virusPop();
            game();
        }, randomTime);
    };


}

function virusPop() {
    let virus = new Image();

    virus.src = "./assets/img/virus.png";

    virus.classList.add('virus');
    virus.style.top = Math.random() * 500 + 'px';
    virus.style.left = Math.random() * 500 + 'px';

    let x, y;
    x = y = (Math.random() * 45) + 30;
    virus.style.setProperty('--x', `${ x }px`);
    virus.style.setProperty('--y', `${ y }px`);

    let plusMinus = Math.random() < 0.5 ? -1 : 1;
    let trX = Math.random() * 500 * plusMinus;
    let trY = Math.random() * 500 * plusMinus;

    virus.style.setProperty('--trX', `${ trX}%`)
    virus.style.setProperty('--trY', `${ trY}%`)

    canvas.appendChild(virus);
}

document.addEventListener('click', function(e) {
    let targetElement = e.target || e.srcElement;

    if (targetElement.classList.contains('virus')) {
        targetElement.remove();
        count++;
        score.innerHTML = count;
    }
});