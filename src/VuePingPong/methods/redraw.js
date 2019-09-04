export default function() {
	let {
		$refs,
		ballOriginX,
		ballOriginY,
		ballRadius,
		color,
		paddle1PositionX,
		paddle1PositionY,
		paddle2PositionX,
		paddle2PositionY,
		paddleSizeX,
		paddleSizeY,
	} = this;
	let {canvas} = $refs;
	if (canvas) {
		let context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = color;
		context.beginPath();
		context.arc(ballOriginX, ballOriginY, ballRadius, 0, 2 * Math.PI);
		context.fill();
		context.beginPath();
		context.rect(paddle1PositionX, paddle1PositionY, paddleSizeX, paddleSizeY);
		context.fill();
		context.beginPath();
		context.rect(paddle2PositionX, paddle2PositionY, paddleSizeX, paddleSizeY);
		context.fill();
	}
}
