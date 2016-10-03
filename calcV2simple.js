(function() { 

	var Number1;
	var Number2;
	var operateur;
	var resultat = 0;

	function add(Number1, Number2) {
		return Number1 + Number2;
	}

	function substract(Number1, Number2) {
		return Number1 - Number2;
	}

	function multiply(Number1, Number2) {
		return Number1 * Number2;
	}

	function divide(Number1, Number2) {
		return Number1 / Number2;
	}


	$(".number").click(function() {
		var number = $(this).data("type");
		console.log(number);
		
		if (Number1 === undefined) {
			Number1 = number;
			console.log(Number1);
		}

		else {
			Number2 = number;
			console.log(Number2);
		}
	});


	$(".operateur").click(function() {
		operateur = $(this).data("type");
	});


	$("#calculer").click(function calc() {

		if (operateur === "add") {
			resultat = add(Number1, Number2);
			$("#result").html(resultat);
		}

		else if (operateur === "substract") {
			resultat = substract(Number1, Number2);
			$("#result").html(resultat);
		}

		else if (operateur === "multiply") {
			resultat = multiply(Number1, Number2);
			$("#result").html(resultat);
		}

		else if (operateur === "divide") {
			resultat = divide(Number1, Number2);
		}


	});

	$("#result").html(resultat);



})();