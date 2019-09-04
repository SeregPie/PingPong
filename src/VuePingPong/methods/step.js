export default function() {
	this.ballOriginX += this.delta * this.ballMovementX;
	this.ballOriginY += this.delta * this.ballMovementY;
	for (;;) {
		let b = true;
		if (this.ballOriginX < this.ballOriginXMin) {
			this.ballOriginX = 2 * this.ballOriginXMin - this.ballOriginX;
			this.ballDirectionX *= -1;
			b = false;
		}
		if (this.ballOriginX > this.ballOriginXMax) {
			this.ballOriginX = 2 * this.ballOriginXMax - this.ballOriginX;
			this.ballDirectionX *= -1;
			b = false;
		}
		if (this.ballOriginY < this.ballOriginYMin) {
			this.ballOriginY = 2 * this.ballOriginYMin - this.ballOriginY;
			this.ballDirectionY *= -1;
			b = false;
		}
		if (this.ballOriginY > this.ballOriginYMax) {
			this.ballOriginY = 2 * this.ballOriginYMax - this.ballOriginY;
			this.ballDirectionY *= -1;
			b = false;
		}
		if (b) {
			break;
		}
	}
	if (this.ballMovementX < 0) {
		this.paddle1OriginY = this.ballOriginY;
	} else
	if (this.ballMovementX > 0) {
		this.paddle2OriginY = this.ballOriginY;
	}
}
