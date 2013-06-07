var elementsAmount = 6; //скільки виводим
var elements = ["Element 1", "Element 2", "Element 3", "Elemnt 4", "Element 5", "Element 6", "Element 7", "Element 8"];
var elementsBlock = null;

function init() {	
	$(elementsBlock).empty();
	
	for (var i = 0; i < elementsAmount; i++) {
		$(elementsBlock).append('<div class="inline element">'+elements[i]+'</div>');
	}
}

function generateList(pos) {
	
	var removedElement;
	
	if (pos < 0) {
		removedElement = elements[elements.length-1];
		elements = elements.slice(0,elements.length-1);
		elements = [removedElement].concat(elements);
	}
	else {
		removedElement = elements[0];
		elements = elements.concat(removedElement);
		elements = elements.slice(1,elements.length);
	}
}

$(document).ready(function() {
	
	elementsBlock = ".elements-content";
	init();
	
	$(".button-control").click(function(){
		generateList($(this).hasClass("prew") ? -1 : 1);
		init();
	});
});