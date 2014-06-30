function tasKMakas(e) {

	var userChoice = null;

	if (this.name == "rock") {
		userChoice = "rock";
	} else if (this.name == "paper") {
		userChoice = "paper";
	} else if (this.name == "scissors") {
		userChoice = "scissors";
	}
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if (computerChoice <= 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
	var compare = function(choice1, choice2) {
		if (choice1 === choice2) {
			console.log("Your choice = " + choice1);
			console.log("Computer choice = " + choice2);
			return "The result is a tie!";
		} else if (choice1 === "rock") {
			if (choice2 === "scissors") {
				console.log("Your choice = " + choice1);
				console.log("Computer choice = " + choice2);
				return "rock wins";
			} else {
				console.log("Your choice = " + choice1);
				console.log("Computer choice = " + choice2);
				return "paper wins";
			}
		} else if (choice1 === "paper") {
			if (choice2 === "rock") {
				console.log("Your choice = " + choice1);
				console.log("Computer choice = " + choice2);
				return "paper wins";
			} else {
				console.log("Your choice = " + choice1);
				console.log("Computer choice = " + choice2);
				return "scissors wins";
			}
		} else {
			if (choice2 === "rock") {
				console.log("Your choice = " + choice1);
				console.log("Computer choice = " + choice2);
				return "rock wins";
			} else {
				console.log("Your choice = " + choice1);
				console.log("Computer choice = " + choice2);
				return "scissors wins";
			}
		}

	};

	alert("Your choice = " + userChoice + "\n" + "Computer choice = " + computerChoice + "\n" + compare(userChoice, computerChoice));
}

$.index.open();
