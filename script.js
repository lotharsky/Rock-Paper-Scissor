let humanScore = 0
let computerScore = 0
let gameOver = false

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


function textToEmoji (text) {
    if (text === "rock") {
        return "👊"
    }
    else if (text === "paper") {
        return "🤚"
    }
    else if (text === "scissor") {
        return "✌️"
    }
    else {
        return "error"
    }
};


//Play a round
const playRound = (humanChoice, computerChoice) => {

    const resultUI = document.querySelector("#gameResult")

    if(humanChoice === computerChoice) {
        console.log("draw")
        resultUI.textContent = "Draw"


        }
    else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
       
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        resultUI.textContent = `You win! ${humanChoice} beats ${computerChoice}.`

        return "human"
    } 
    else {
        
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        resultUI.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`

        return "computer"
    }
}



function handleClick (event) {

    if (gameOver) return;

    console.log(event.currentTarget.id)

    const humanSelection = event.currentTarget.id

    const computerSelection = getComputerChoice()

    console.log("human: ", humanSelection)
    console.log("computer: ", computerSelection)
    const choiceUI = document.querySelector("#choice")
    choiceUI.textContent = `Player: ${textToEmoji(humanSelection)} VS PC: ${textToEmoji(computerSelection)}`


    const result =  playRound(humanSelection, computerSelection)
    console.log("result: ", result)

    if(result === "human") {
        humanScore ++
    } else if (result ==="computer") {
        computerScore ++
    }

    console.log("HS: ", humanScore, "PCS: ", computerScore)
    
    const gameScoreUI = document.querySelector("#gameScore")
    gameScoreUI.textContent = `HS: ${humanScore} - PCS: ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        gameScoreUI.textContent = humanScore === 5? "You Win" : "Computer Wins"

    }


}


const playGame = () => {

    console.log("game started")

    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener("click", handleClick)
    })

}

playGame()




