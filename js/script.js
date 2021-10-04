function playGame(playerMove){

	const choice = ['kamień', 'papier', 'nożyce']
	let computerMove;

	clearMessages();

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function getMoveName(choiceIndex) {
		return choice[choiceIndex];
	}

	computerMove = getMoveName(getRandomInt(0,3));


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
}

  let rockButton = document.getElementById('kamień');
  let paperButton = document.getElementById('papier');
  let scissorsButton = document.getElementById('nożyce');
  
  rockButton.addEventListener('click', () => {playGame("kamień")});
  paperButton.addEventListener('click', () => {playGame("papier")});
  scissorsButton.addEventListener('click', () => {playGame("nożyce")});