var elementsAmount = 3; //скільки виводим

var elements = {};

var elementsBlock = null;

function init() {	
	$(elementsBlock).empty();
	
	for (var i = 0; i < elementsAmount; i++) {
		
		$(elementsBlock).append('<div class="inline element">{name}<br/>{desc}</div>'.printf(elements[i]));
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