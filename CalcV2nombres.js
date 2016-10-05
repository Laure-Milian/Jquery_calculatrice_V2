(function() { 


	function add(nb1, nb2) {
		return nb1 + nb2;
	}

	function substract(nb1, nb2) {
		return nb1 - nb2;
	}

	function multiply(nb1, nb2) {
		return nb1 * nb2;
	}

	function divide(nb1, nb2) {
		return nb1 / nb2;
	}


	$(".number").click(function() {
		var number = $(this).data("type");
		var operateur = $("#operation").text();

		if (!operateur) {
			$("#nb1").append(number);
		}
		else {
			$("#nb2").append(number);
		}
		
	});


	$(".operateur").click(function() {
		operateur = $(this).data("type");
		$("#operation").html(operateur);
	});


	$("#calculer").click(function calc() {

		var nb1 = parseInt(($("#nb1").text()), 10);
		var nb2 = parseInt(($("#nb2").text()), 10);
		var operateur = $("#operation").text();

		if (operateur === "+") {
			resultat = add(nb1, nb2);
		}

		else if (operateur === "-") {
			resultat = substract(nb1, nb2);
		}

		else if (operateur === "*") {
			resultat = multiply(nb1, nb2);
		}

		else if (operateur === "/") {
			resultat = divide(nb1, nb2);
		}

		$("#result").html(resultat);

	});

	

/*var KEY_1 = 49; ou objet keys.

	$("").on("keypress", function(e) {
		console.log(e.keyCode);
	})*/

})();