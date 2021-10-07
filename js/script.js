{
	// [DONE] cały kod znajdujący się w tym pliku zamknij w bloku za pomocą nawiasów klamrowych { }, aby unikać używania zmiennych/stałych globalnych,
	// [DONE] jeśli to możliwe, używaj stałych,
	// deklaracje stałych/zmiennych powinny być – w miarę możliwości – zagnieżdżone tak samo, jak miejsce ich wykorzystania, czyli staramy się używać możliwie małych zakresów,
	// [DONE] unikaj sytuacji, w których tuż pod deklaracją zmiennej nadajesz jej wartość – lepiej zrobić to od razu w deklaracji,
	// [DONE] zamień funkcje nazwane na funkcje anonimowe zapisane w stałych,
	const playGame = function (playerMove){

		const choice = ['kamień', 'papier', 'nożyce']
		let computerMove = choice[(Math.floor(Math.random() * (3 - 0)) + 0)];

		clearMessages();

		const displayResult = function (computerMove, playerMove){
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
	
	  const rockButton = document.getElementById('kamień');
	  const paperButton = document.getElementById('papier');
	  const scissorsButton = document.getElementById('nożyce');
	  
	  rockButton.addEventListener('click', () => {playGame("kamień")});
	  paperButton.addEventListener('click', () => {playGame("papier")});
	  scissorsButton.addEventListener('click', () => {playGame("nożyce")});
}

