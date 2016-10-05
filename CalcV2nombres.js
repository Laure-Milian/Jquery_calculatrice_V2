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

	var objKeysNumbers = {
		key48 : 0,
		key49 : 1,
		key50 : 2,
		key51 : 3,
		key52 : 4,
		key53 : 5,
		key54 : 6,
		key55 : 7,
		key56 : 8,
		key57 : 9
	};

	var objKeysOperateurs = {
		key42 : "*",
		key43 : "+",
		key45 : "-",
		key47 : "/"
	};

	$("html").on("keypress", function(e) {
		var operateur = objKeysOperateurs["key" + e.keyCode];
		$("#operation").html(operateur);
	});


	$("html").on("keypress", function(e) {
		var number = objKeysNumbers["key" + e.keyCode];
		var operateur = $("#operation").text();

		if (!operateur) {
			$("#nb1").append(number);
		}
		else {
			$("#nb2").append(number);
		}
	});

	$("html").on("keypress", function(e) {
		if (e.keyCode === 13) {
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

		}
	});


//au clic 
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

//fin au clic




})();