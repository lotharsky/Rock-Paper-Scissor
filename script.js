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

//Play a round
const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        console.log("draw")
        }
    else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
       
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return "human"
    } 
    else {
        
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        return "computer"
    }
}

const playGame = () => {

    let humanScore = 0
    let computerScore = 0

    console.log("game started")

    const humanSelection = ""

    const buttons = document.querySelectorAll("button")
    

    console.log("human: ", humanSelection)

    // const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    console.log("human: ", humanSelection)
    console.log("computer: ", computerSelection)


    const result =  playRound(humanSelection, computerSelection)

    if(result === "human") {
        humanScore ++
    } else if (result ==="computer") {
        computerScore ++
    }

    console.log("HS: ", humanScore, "PCS: ", computerScore)


    console.log("game ended")
}

playGame()




