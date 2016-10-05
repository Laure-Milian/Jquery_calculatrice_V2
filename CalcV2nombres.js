(function() { 

	var Calculer = {
		add : function(nb1, nb2) {
			return nb1 + nb2;
		},
		substract : function(nb1, nb2) {
			return nb1 - nb2;
		},
		multiply : function(nb1, nb2) {
			return nb1 * nb2;
		},
		divide : function(nb1, nb2) {
			return nb1 / nb2;
		}
	};


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
		var operateur = $(this).data("type");
		$("#operation").html(operateur);
	});


	$("#calculer").click(function calc() {

		var nb1 = parseInt(($("#nb1").text()), 10);
		var nb2 = parseInt(($("#nb2").text()), 10);
		var operateur = $("#operation").text();

		if (operateur === "+") {
			var resultat = Calculer["add"](nb1, nb2);
		}

		else if (operateur === "-") {
			var resultat = Calculer["substract"](nb1, nb2);
		}

		else if (operateur === "*") {
			var resultat = Calculer["multiply"](nb1, nb2);
		}

		else if (operateur === "/") {
			var resultat = Calculer["divide"](nb1, nb2);
		}

		$("#result").html(resultat);

	});

	$("#reinitialiser").on("click", function() { 
		$("#nb1").text("");
		$("#nb2").text("");
		$("#operation").text("");
		$("#result").text("");
	});
	

/*var KEY_1 = 49; ou objet keys.

	$("").on("keypress", function(e) {
		console.log(e.keyCode);
	})*/

})();