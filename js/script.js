
const choice = ['kamień', 'papier', 'nożyce']
let playerMove;
let computerMove;


function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getMoveName(choiceIndex) {
	return choice[choiceIndex];
}


computerMove = getMoveName(getRandomInt(0,3));


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if (playerInput == 1 || playerInput == 2 || playerInput == 3) {
	playerMove = getMoveName(playerInput-1);
}
else {
	alert('Wprowadziłeś niepoprawną wartość');
	location.reload();
}


function displayResult(computerMove, playerMove){
	printMessage(`Ruch komputera: ${computerMove}`);
	printMessage(`Ruch gracza: ${playerMove}`);
	
	if ( playerMove === 'kamień' && computerMove === 'nożyce' || playerMove === 'papier' && computerMove === 'kamień' || playerMove === 'nożyce' && computerMove === 'papier')
	{
		printMessage('Wygrałeś!');
	}
	else if ( computerMove === 'kamień' && playerMove === 'nożyce' || computerMove === 'papier' && playerMove === 'kamień' || computerMove ==='nożyce' && playerMove === 'papier')
	{
		printMessage('Przegrałeś!');
	}
	else {
		printMessage('Remis!');
	}
}

displayResult(computerMove, playerMove);