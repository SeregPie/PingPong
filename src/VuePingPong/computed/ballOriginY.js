export default {
	get() {
		return this.halfSizeY * (1 + this.ballOriginYRelative);
	},
	set(value) {
		this.ballOriginYRelative = value / this.halfSizeY - 1;
	},
};
