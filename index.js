const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

const container = document.querySelector('.container')

const onSelection = document.querySelector('.onSelection')

const youPicked = document.querySelector('.youPicked')
const youPimg = document.querySelector('.youPimg')

const pcRImg = document.querySelector('.pcRImg')
const pcR = document.querySelector('.pcR')

const result = document.querySelector('.result')
const reset = document.querySelector('#reset')

const score = document.querySelector('.liveScore')

const rulesBtn = document.querySelector('.rulesbtn')
const closeRules = document.querySelector('.closeRules')
const rules = document.querySelector('.rules')

const rand = () => {
    return Math.ceil(Math.random() * 3);
}

let currentCh = ''
let currScore = 0;

const updateScore = () => {
    if (currScore <= 0) {
        currScore = 0;
    }
    score.innerText = currScore;
}

const jod = (choice) => {
    currentCh = choice;
    container.classList.add('hide')
    onSelection.classList.remove('hide')
    youPicked.classList.add(`${choice}O`)
    youPimg.src = `./images/icon-${choice}.svg`;

    let pcV = rand();

    if (pcV === 1) {
        setTimeout(() => {
            pcR.classList.remove('hide')
            pcR.classList.add('rockO')
            pcRImg.src = './images/icon-rock.svg'
            if (choice === 'paper') {
                youPicked.classList.add('winner')
                result.children[0].innerText = 'YOU WIN'
                currScore = currScore + 2;
            } else if (choice === 'rock') {
                result.children[0].innerText = 'DRAW'
            } else {
                result.children[0].innerText = 'YOU LOOSE'
                pcR.classList.add('winner')
                currScore--
            }
            result.classList.remove('hide')
            updateScore();
        }, 1000)
    }
    else if (pcV === 2) {
        setTimeout(() => {
            pcR.classList.remove('hide')
            pcR.classList.add('paperO')
            pcRImg.src = './images/icon-paper.svg'
            if (choice === 'paper') {
                result.children[0].innerText = 'DRAW'
            } else if (choice === 'rock') {
                result.children[0].innerText = 'YOU LOOSE'
                pcR.classList.add('winner')
                currScore--
            } else {
                result.children[0].innerText = 'YOU WIN'
                youPicked.classList.add('winner')
                currScore = currScore + 2;
            }
            result.classList.remove('hide')
            updateScore();
        }, 1000)
    }
    else {
        setTimeout(() => {
            pcR.classList.remove('hide')
            pcR.classList.add('scissorsO')
            pcRImg.src = './images/icon-scissors.svg'
            if (choice === 'paper') {
                result.children[0].innerText = 'YOU LOOSE'
                pcR.classList.add('winner')
                currScore--
            } else if (choice === 'rock') {
                result.children[0].innerText = 'YOU WIN'
                youPicked.classList.add('winner')
                currScore = currScore + 2;
            } else {
                result.children[0].innerText = 'DRAW'
            }
            result.classList.remove('hide')
            updateScore();
        }, 1000)
    }

}

reset.addEventListener('click', () => {
    container.classList.remove('hide')
    onSelection.classList.add('hide')
    youPicked.classList.remove(`${currentCh}O`)
    youPicked.classList.remove('winner')

    pcR.classList.remove('winner')
    pcR.classList.add('hide')
    pcR.classList.remove('rockO')
    pcR.classList.remove('paperO')
    pcR.classList.remove('scissorsO')

    result.classList.add('hide')

    updateScore();

    currentCh = '';
})

rock.addEventListener('click', () => {
    jod('rock');
})
paper.addEventListener('click', () => {
    jod('paper');
})
scissors.addEventListener('click', () => {
    jod('scissors');
})

rulesBtn.addEventListener('click', () => {
    rules.classList.remove('hide')
})

closeRules.addEventListener('click', () => {
    rules.classList.add('hide')
})