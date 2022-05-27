export function parallaxMouse(e: any) {
	document.querySelectorAll('.img-parallax').forEach(function (move: any) {
		var moving_value: any = move.getAttribute('data-value');
		var x = (e.clientX * moving_value) / 250;
		var y = (e.clientY * moving_value) / 250;

		move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
	});
}
