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
