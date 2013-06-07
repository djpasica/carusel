var elementsAmount = 5;
var elements = ["Element 1", "Element 2", "Element 3", "Elemnt 4", "Element 5", "Element 6", "Element 7", "Element 8"];
var currentElements = [];
var firstElemet = 0;

function init() {	
	$(".elements-content").empty();
	
	for (var i = 0; i < elementsAmount; i++) {
		$(".elements-content").append('<div class="inline element">'+currentElements[i]+'</div>');
	}
}

function generateList(newCurrent) {
	console.log("newCurrent: "+newCurrent);
	currentElements = elements.slice(newCurrent,elementsAmount+newCurrent);
	
	console.log("newCurrent: "+currentElements);
}

$(document).ready(function(){
	
	firstElemet = 0;
	generateList(firstElemet);
	init();
	
	$(".button-control").click(function(){
		console.log("cliked");
		
		var position = 1;
		var delElement = null;
		
		if ($(this).hasClass("prew")) {
			position = -1;
		}
		
		firstElemet += position; 
		
		generateList(firstElemet);
		init();
		
//		if (position < 1) {
//			delElement = $(".elements-content .element:first");
//		}
//		else {
//			delElement = $(".elements-content .element:last");
//		}
//		
//		delElement.remove();
		
		
		
		console.log("end");
	});
	
});