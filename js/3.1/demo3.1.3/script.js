
$("#hoverDivs div").on('mouseenter', function() {
	$(this).addClass('hovered');
});
$("#hoverDivs div").on('mouseleave', function() {
	$(this).removeClass('hovered');
});
