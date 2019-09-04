export default {
	get() {
		return (this.sizeY / 2) * (1 + this.ballOriginYRelative);
	},
	set(value) {
		this.ballOriginYRelative = value / (this.sizeY / 2) - 1;
	},
};
