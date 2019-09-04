export default {
	get() {
		return (this.sizeX / 2) * (1 + this.ballOriginXRelative);
	},
	set(value) {
		this.ballOriginXRelative = value / (this.sizeX / 2) - 1;
	},
};
