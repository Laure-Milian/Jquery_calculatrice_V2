(function() { 

	var TabNumber1 = [];
	var Number1;
	var TabNumber2 = [];
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

		if (operateur === undefined) {
			var number = $(this).data("type");
			TabNumber1.push(number);
			len = TabNumber1.length;
			Number1 = TabNumber1[0];
			for (i = 1; i < len; i++) {
				Number1 = parseInt(Number1 + "" + TabNumber1[i], 10);
			}
		$("#Number1").html(Number1);

		}
		else {
			var number = $(this).data("type");
			TabNumber2.push(number);
			len = TabNumber2.length;
			Number2 = TabNumber2[0];
			for (i = 1; i < len; i++) {
				Number2 = parseInt(Number2 + "" + TabNumber2[i], 10);
			}
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