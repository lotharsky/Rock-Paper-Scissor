// Choice functions
const getComputerChoice =  () => {
    const choice = Math.random()

    console.log(choice)

    if (choice <= .33) {
        return "rock"
    }
    else if (choice >= .66) {
        return "paper"
    }
    else {
        return "scissor"
    }
}

const getHumanChoice = () => {
    const choice = window.prompt("what is you choice?")
    return choice.toLowerCase()
}


// score variables
let humanScore = 0
let computerScore = 0


// Game round
const playRound = (humanChoice, computerChoice) => {
    
}

const humanSelection = getComputerChoice()
const computerSelection = getComputerChoice()


playRound(humanSelection, computerSelection)
