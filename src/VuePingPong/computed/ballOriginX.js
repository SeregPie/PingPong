export default {
	get() {
		return this.halfSizeX * (1 + this.ballOriginXRelative);
	},
	set(value) {
		this.ballOriginXRelative = value / this.halfSizeX - 1;
	},
};
