var elementsAmount = 3; //скільки виводим
var elements = ["Element 1", "Element 2", "Element 3", "Elemnt 4", "Element 5", "Element 6", "Element 7", "Element 8"];
//var elements = ["Element 1", "Element 2", "Element 3"];
var slicedElements = [];
var startPosition = 0;
var elementsBlock = null;

function init() {
	
	$(elementsBlock).empty();
	
	for (var index in slicedElements) {
		$(elementsBlock).append('<div class="inline element">'+slicedElements[index]+'</div>');
	}
}

function generateList(startPosition) {
	var endNum = elementsAmount + startPosition;
	console.log("endNum: "+endNum);
	console.log("startPosition: "+startPosition);
	slicedElements = elements.slice(startPosition ,endNum);
	
	if (endNum > elements.length) {
		//додаєм елементи з початку списку
		var num = endNum - elements.length;
		slicedElements = slicedElements.concat(elements.slice(0, num));
	}
	else if (endNum < elementsAmount) {
		//додаєм елементи з кінця списку
		
	}
}

$(document).ready(function() {
	
	elementsBlock = ".elements-content";
	generateList(startPosition);
	init();
	
	$(".button-control").click(function(){
		
		if ($(this).hasClass("prew")) {
			startPosition--;
		}
		else {
			startPosition++;
		}
		
		if (startPosition > elements.length) {
			startPosition = 1;
		}
		
		generateList(startPosition);
		init();
		console.log("---------------");
	});
});