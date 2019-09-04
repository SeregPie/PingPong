export default function() {
	this.ballOriginX += this.delta * this.ballMovementX;
	this.ballOriginY += this.delta * this.ballMovementY;
	for (;;) {
		let stop = true;
		if (this.ballOriginX < this.ballOriginXMin) {
			this.ballOriginX = 2 * this.ballOriginXMin - this.ballOriginX;
			this.ballMovementX *= -1;
			stop = false;
		}
		if (this.ballOriginX > this.ballOriginXMax) {
			this.ballOriginX = 2 * this.ballOriginXMax - this.ballOriginX;
			this.ballMovementX *= -1;
			stop = false;
		}
		if (this.ballOriginY < this.ballOriginYMin) {
			this.ballOriginY = 2 * this.ballOriginYMin - this.ballOriginY;
			this.ballMovementY *= -1;
			stop = false;
		}
		if (this.ballOriginY > this.ballOriginYMax) {
			this.ballOriginY = 2 * this.ballOriginYMax - this.ballOriginY;
			this.ballMovementY *= -1;
			stop = false;
		}
		if (stop) {
			break;
		}
		//this.ballDirection += (1/2 - Math.random()) / 32;
	}
	if (this.ballMovementX < 0) {
		this.paddle1OriginY = this.ballOriginY;
	} else
	if (this.ballMovementX > 0) {
		this.paddle2OriginY = this.ballOriginY;
	}
}
