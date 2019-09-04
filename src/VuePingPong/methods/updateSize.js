export default function() {
	let {
		$el,
		$refs,
	} = this;
	let {canvas} = $refs;
	if ($el && canvas) {
		this.sizeX = (canvas.width = $el.offsetWidth);
		this.sizeY = (canvas.height = $el.offsetHeight);
	}
}
