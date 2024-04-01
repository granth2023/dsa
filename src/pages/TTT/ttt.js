const colors = {
    empty:  'white',
    player1: 'red',
    player2: 'blue'
}
//what does the board look like index wise? 
const winningCombos = [ [], [], [], [], [], [], [], [] ]
const board =[]
let turn;
const endgame = ['player1 Wins', 'player2 Wins', 'Tie!']
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9]



//when starting the game we need to fill the board array with nine nulls 

// Upon loading the app should:
//   4.1) Initialize the state variables:
//     4.1.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
//     4.1.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
//     4.1.3) Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 