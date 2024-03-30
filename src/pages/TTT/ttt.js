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

