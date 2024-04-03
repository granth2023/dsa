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



// save x and save circle 
const X_ClASS='x'
const CIRLCE_CLASS='o'
cell.elements[] = document.querySelectorAll('cell')
let turner;


// save all cells from html in an array using the dom 
// declare a turn keeper 

//on each of the cells find which cell needs to handle a click and listen for the click -- once its clicked we want to declare it on or true 
cells.forEach(cell => cell.addEventListener('click', handleClick, {once: true}))

//what happens when we click? what do we pass? is this an event? 
function handleClick(e){
    cell



}
//how do we save the cell we are targeting in this event? 
//how do we save which x or 0 we are using based on whose turn it is? 
//how do we take the current turn we are in and their marker and the cell they chose and place it on the mark? 

// what else do we want to happen in thed handle click? 
//how do we swap turns? 

//when we pass in the place it on the m ark what are we doing? how do we modify the css to add a current class from the class list to the cell? 

//how do we swap turns? how do we save circles turn? 
//do we want to set the board hover classes on the click? what does that do? do we need to declare we are saving in board whatever element we want to get by id? 

// in this setboard hover class function what are we doing? how do we remove the x class in our class clist and circle? what do we add if its circle turn or else? 

//when do we initiate the game? 
//how do we initiate the game? whose circle turn is it? what do we set that to? what data is it?  what are we doing to each cell element in here? are we doing other fucntions? what about our board hover? 

//how do we declare winning combos? is that a certian data structure? how does that look? 

//do we chekc if there was a winner by passing the current class what that is made up of? 

//how do we check winner? what do we return? do we want to see if a combination currently exists as some of the winning combo data and then we want to return to see if every index at that combiantion has the current class of the turn that just went based on the value at the index of each of the cell elements

//if there is a winner, we console log it

//if when we check the winner and its not end game false, we run the end game fucntion
//what do we pass in the end game
//what do we do if its a draw? 
//what about oterhwise? do we add the inner text to the winning message based on the circle turn and show the style for the class list at winning message element? 

//if we check win and end game is not flase or the current class is not hte winner but we are checking winning we are accounting for is there a drwaw which needs to function and what do we do with endgame for that? what does that now pass? if endgame does not need to run what needs to function next? 

//what is in the function is draw method? 
//how do we return how every cell contains either x or circle? how do we return that? 

//where do we declare the winning message element? how do we save the id of winning message in it? 

//how do we save the restart button id 

//where do we declare the restart button? what are we adding to it? what fucntion intiates out of it? 

//when we start game how do we clear the board? what do we we need to do for each cell elements? what are we removing and what else could we be removing? what about our click? are we putting the add event back in for once makes its true? 


//ceremonial commit 



//personal pseudo code 

//what do i need for ttt? 
//Start the game function 
//restart the game function 
//a board of nine cells
//a 