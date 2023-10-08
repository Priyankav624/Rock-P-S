const game = () => {
    
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

   const playGame= () => {

        const rockBtn = document.querySelector('.rock');
        const scissorBtn = document.querySelector('.scissor');
        const paperBtn = document.querySelector('.paper');
        const playerOptions = [rockBtn,scissorBtn,paperBtn];
        const computerOptions = ['rock','paper','scissor'];

        playerOptions.forEach(option => {
            option.addEventListener('click',() => {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left : ${10-moves}`;

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                winner(option.innerText, computerChoice)

                if(moves == 10)
                {
                    gameOver(playerOptions, movesLeft)
                }
            })
        })

    }

    const winner = (player,computer) => {

        const result = document.querySelector('.result')
        const playerScoreBoard =document.querySelector('.countp')
        const computerScoreBoard = document.querySelector('.countc')
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if( player === computer){
            result.textContent = "Tie"
        }
        
        else if (player == 'scissor'){
            if(computer == 'rock'){
                result.textContent = " Computer won"
                computerScore++;
                computerScoreBoard.textContent = computerScore; 
            }else{
                result.textContent = "Player won"
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

        else if (player == 'rock'){
            if(computer == 'paper'){
                result.textContent = "Computer won"
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Player won"
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

        else if (computer == 'scissor'){
            if(computer == 'paper'){
                result.textContent = "Computer won"
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Player won"
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

    }

    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move')
        const result = document.querySelector('.result')
        const reloadBtn = document.querySelector('.reload')

        playerOptions.forEach(option => {
            option.style.display = "none";
        })

        chooseMove.innerText = 'Game Over'
        movesLeft.style.display = "none" ;
       

        if(playerScore > computerScore){
            result.innerText = "You won the game"
        }
        else if (playerScore < computerScore){
            result.innerText = "You lost the game"
        }
        else{
            result.innerText = "Tie"
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => { 
            window.location.reload(); 
        }) 
    }

    playGame();

}

game();
