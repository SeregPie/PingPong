import Math_clamp from '../../core/Math/clamp';

export default function() {
	this.ballOriginX += this.delta * this.ballMovementX;
	this.ballOriginY += this.delta * this.ballMovementY;
	for (;;) {
		let b = true;
		if (this.ballOriginX < this.ballOriginXMin) {
			this.ballOriginX = 2 * this.ballOriginXMin - this.ballOriginX;
			this.ballDirectionX *= -1;
			this.ballDirection += (1/2 - Math.random()) / 128;
			b = false;
		}
		if (this.ballOriginX > this.ballOriginXMax) {
			this.ballOriginX = 2 * this.ballOriginXMax - this.ballOriginX;
			this.ballDirectionX *= -1;
			this.ballDirection += (1/2 - Math.random()) / 128;
			b = false;
		}
		if (this.ballOriginY < this.ballOriginYMin) {
			this.ballOriginY = 2 * this.ballOriginYMin - this.ballOriginY;
			this.ballDirectionY *= -1;
			this.ballDirection += (1/2 - Math.random()) / 128;
			b = false;
		}
		if (this.ballOriginY > this.ballOriginYMax) {
			this.ballOriginY = 2 * this.ballOriginYMax - this.ballOriginY;
			this.ballDirectionY *= -1;
			this.ballDirection += (1/2 - Math.random()) / 128;
			b = false;
		}
		if (b) {
			break;
		}
	}
	if (this.ballMovementX < 0) {
		let distanceX = this.ballOriginX - this.paddle1OriginX;
		let distanceY = this.ballOriginY - this.paddle1OriginY;
		this.paddle1OriginY = Math_clamp(
			this.paddle1OriginY + distanceY / ((Math.abs(distanceX) / (Math.abs(distanceY) + 1)) + 1),
			this.paddleOriginYMin,
			this.paddleOriginYMax,
		);
	} else
	if (this.ballMovementX > 0) {
		let distanceX = this.ballOriginX - this.paddle2OriginX;
		let distanceY = this.ballOriginY - this.paddle2OriginY;
		this.paddle2OriginY = Math_clamp(
			this.paddle2OriginY + distanceY / ((Math.abs(distanceX) / (Math.abs(distanceY) + 2)) + 2),
			this.paddleOriginYMin,
			this.paddleOriginYMax,
		);
	}
}
