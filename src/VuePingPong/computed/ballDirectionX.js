export default {
	get() {
		return Math.sin(this.ballDirection);
	},
	set(value) {
		this.ballDirection = Math.atan2(value, this.ballDirectionY);
	},
};
