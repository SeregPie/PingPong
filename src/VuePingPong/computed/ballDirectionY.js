export default {
	get() {
		return Math.cos(this.ballDirection);
	},
	set(value) {
		this.ballDirection = Math.atan2(this.ballDirectionX, value);
	},
};
