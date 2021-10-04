function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = 'kamień';

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
	playerMove = 'papier';
}

else if (playerInput == '3'){
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  }
else if (computerMove == 'kamień' && playerMove == 'nożyce' ) {
	printMessage('Ty przegrywasz!')
}
else if (computerMove == 'kamień' && playerMove == 'kamień') {
	printMessage('Remis!')
}
else {
	printMessage ('Nieznany wynik!')
}