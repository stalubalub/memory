// !zrobić losowanie kard



// var cards = ["1.jpg", "2.jpg", "3.jpg", "3.jpg", "4.jpg", "5.jpg", "2.jpg", "6.jpg", "1.jpg", "5.jpg", "6.jpg", "4.jpg"];



var boardSize = 70;
// zrobić automatyczne dostosowanie się planszy do kwadratu, lub warianty wielkości planszy. 
var cards = [];
for (i = 0; i < boardSize / 2; i++) {
	cards.push(+i + ".jpg");
	cards.push(+i + ".jpg");
}

// roandomajzing tablicy cards ---- START ----
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
shuffle(cards);

// roandomajzing tablicy cards ---- STOP ----



// druga funkcja shuffle tablicy ------ START ------

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

// druga funkcja shuffle tablicy ------ STOP ------


// budujemy plaszę
var div_block = "";

for (i = 0; i < boardSize; i++) {
	div_block = div_block + '<div id="c' + i + '" class="card"></div>';
}

document.getElementById("grid").innerHTML = div_block;



// !zoptymalizować kod


// for (i = 0; i < boardSize; i++) {
// 	'var c' + i + ' = document.getElementById(c' + i + ');'
// 	// $('#c'+i).on('click', function() {revealCard(i); });
// }

// for (i=0; i<70; i++)
// {
// 	'c'+i+'.addEventListener("click", function() { revealCard('+i+'); });'
// }



// !zoptymalizować kod
// ta funkcjamatoda pozwala przypisać wiele funkcji do jednego zdarzenia c0.addEventListner

c0.addEventListener("click", function () {
	revealCard(0);
});
c1.addEventListener("click", function () {
	revealCard(1);
});
c2.addEventListener("click", function () {
	revealCard(2);
});
c3.addEventListener("click", function () {
	revealCard(3);
});
c4.addEventListener("click", function () {
	revealCard(4);
});
c5.addEventListener("click", function () {
	revealCard(5);
});
c6.addEventListener("click", function () {
	revealCard(6);
});
c7.addEventListener("click", function () {
	revealCard(7);
});
c8.addEventListener("click", function () {
	revealCard(8);
});
c9.addEventListener("click", function () {
	revealCard(9);
});
c10.addEventListener("click", function () {
	revealCard(10);
});
c11.addEventListener("click", function () {
	revealCard(11);
});
c12.addEventListener("click", function () {
	revealCard(12);
});
c13.addEventListener("click", function () {
	revealCard(13);
});
c14.addEventListener("click", function () {
	revealCard(14);
});
c15.addEventListener("click", function () {
	revealCard(15);
});
c16.addEventListener("click", function () {
	revealCard(16);
});
c17.addEventListener("click", function () {
	revealCard(17);
});
c18.addEventListener("click", function () {
	revealCard(18);
});
c19.addEventListener("click", function () {
	revealCard(19);
});
c20.addEventListener("click", function () {
	revealCard(20);
});
c21.addEventListener("click", function () {
	revealCard(21);
});
c22.addEventListener("click", function () {
	revealCard(22);
});
c23.addEventListener("click", function () {
	revealCard(23);
});
c24.addEventListener("click", function () {
	revealCard(24);
});
c25.addEventListener("click", function () {
	revealCard(25);
});
c26.addEventListener("click", function () {
	revealCard(26);
});
c27.addEventListener("click", function () {
	revealCard(27);
});
c28.addEventListener("click", function () {
	revealCard(28);
});
c29.addEventListener("click", function () {
	revealCard(29);
});
c30.addEventListener("click", function () {
	revealCard(30);
});
c31.addEventListener("click", function () {
	revealCard(31);
});
c32.addEventListener("click", function () {
	revealCard(32);
});
c33.addEventListener("click", function () {
	revealCard(33);
});
c34.addEventListener("click", function () {
	revealCard(34);
});
c35.addEventListener("click", function () {
	revealCard(35);
});
c36.addEventListener("click", function () {
	revealCard(36);
});
c37.addEventListener("click", function () {
	revealCard(37);
});
c38.addEventListener("click", function () {
	revealCard(38);
});
c39.addEventListener("click", function () {
	revealCard(39);
});
c40.addEventListener("click", function () {
	revealCard(40);
});
c41.addEventListener("click", function () {
	revealCard(41);
});
c42.addEventListener("click", function () {
	revealCard(42);
});
c43.addEventListener("click", function () {
	revealCard(43);
});
c44.addEventListener("click", function () {
	revealCard(44);
});
c45.addEventListener("click", function () {
	revealCard(45);
});
c46.addEventListener("click", function () {
	revealCard(46);
});
c47.addEventListener("click", function () {
	revealCard(47);
});
c48.addEventListener("click", function () {
	revealCard(48);
});
c49.addEventListener("click", function () {
	revealCard(49);
});
c50.addEventListener("click", function () {
	revealCard(50);
});
c51.addEventListener("click", function () {
	revealCard(51);
});
c52.addEventListener("click", function () {
	revealCard(52);
});
c53.addEventListener("click", function () {
	revealCard(53);
});
c54.addEventListener("click", function () {
	revealCard(54);
});
c55.addEventListener("click", function () {
	revealCard(55);
});
c56.addEventListener("click", function () {
	revealCard(56);
});
c57.addEventListener("click", function () {
	revealCard(57);
});
c58.addEventListener("click", function () {
	revealCard(58);
});
c59.addEventListener("click", function () {
	revealCard(59);
});
c60.addEventListener("click", function () {
	revealCard(60);
});
c61.addEventListener("click", function () {
	revealCard(61);
});
c62.addEventListener("click", function () {
	revealCard(62);
});
c63.addEventListener("click", function () {
	revealCard(63);
});
c64.addEventListener("click", function () {
	revealCard(64);
});
c65.addEventListener("click", function () {
	revealCard(65);
});
c66.addEventListener("click", function () {
	revealCard(66);
});
c67.addEventListener("click", function () {
	revealCard(67);
});
c68.addEventListener("click", function () {
	revealCard(68);
});
c69.addEventListener("click", function () {
	revealCard(69);
});

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false; //blokowanie skryptu na odkrywanie większej iości kart 
var yes = new Audio("Pop.wav");

// zmieniona do testów
var pairsLeft = boardSize/2;


//główna funkcja obsługująca zdarzenie odsłaniania
function revealCard(nr) {
	var opacityValue = $('#c' + nr).css('opacity');
	// alert('opacity: '+opacityValue);
    // alert("nr: "+nr);
    // alert('visible_nr: '+visible_nr);
    // alert('lock: '+lock);
	// 	alert('opacity: ' +opacityValue);

	if (opacityValue != 0 && lock == false && nr != visible_nr) {

		lock = true;

		// 		alert(nr);

		var obraz = "url(img/" + cards[nr] + ")";


		$("#c" + nr).css("background-image", obraz);
		$("#c" + nr).addClass('cardA');
		$("#c" + nr).removeClass('card');

		if (oneVisible == false) {
			// 		first card
			// 		UWAGA !!! - wstawić blokadę odsłaniania tej samej karty
			oneVisible = true;
			visible_nr = nr;
			lock = false;
		} else {
			// 		seccond card

			// 		warunek znalzeienia pary
			// if (visible_nr !== nr) {	// warunek nieklikania tej samej karty
				if (cards[visible_nr] == cards[nr]) {
					// 				trafiona
					// 				alert('para')

					setTimeout(function () {
						hide2cards(nr, visible_nr)
					}, 750)

				} else {
					// 				pudło
					// 				alert('pudło')

					setTimeout(function () {
						restore2cards(nr, visible_nr)
					}, 1000)
				}
				turnCounter++;
				$('.score').html('Turn Counter: ' + turnCounter);
				oneVisible = false;
			// } else
				// alert("tej samej karty nie wolno");
		}
	}
}

function hide2cards(nr1, nr2) {
	yes.play();
	$('#c' + nr1).css('opacity', '0');
	$('#c' + nr2).css('opacity', '0');

	pairsLeft--;

	if (pairsLeft == 0) {
		$('.board').html('<h1>You win!<br>Done in ' + turnCounter + ' turns </br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</h1></span>');
	}
	lock = false;
}

function restore2cards(nr1, nr2) {
	yes.play();
	$("#c" + nr1).css("background-image", 'url(img/back.jpg');
	$("#c" + nr1).addClass('card');
	$("#c" + nr1).removeClass('cardA');

	$("#c" + nr2).css("background-image", 'url(img/back.jpg');
	$("#c" + nr2).addClass('card');
	$("#c" + nr2).removeClass('cardA');

	lock = false;
}