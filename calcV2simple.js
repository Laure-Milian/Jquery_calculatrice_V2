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
		
		if (Number1 === undefined) {
			Number1 = number;
			$("#Number1").html(Number1);
		}

		else {
			Number2 = number;
			$("#Number2").html(Number2);
		}
	});


	$(".operateur").click(function() {
		operateur = $(this).data("type");
		$("#operation").html(" " + operateur + " ");
	});


	$("#calculer").click(function calc() {

		if (operateur === "+") {
			resultat = add(Number1, Number2);
			$("#result").html(resultat);
		}

		else if (operateur === "-") {
			resultat = substract(Number1, Number2);
			$("#result").html(resultat);
		}

		else if (operateur === "*") {
			resultat = multiply(Number1, Number2);
			$("#result").html(resultat);
		}

		else if (operateur === "/") {
			resultat = divide(Number1, Number2);
			$("#result").html(resultat);
		}


	});




})();