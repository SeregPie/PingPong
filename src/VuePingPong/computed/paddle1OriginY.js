export default {
	get() {
		return this.halfSizeY * (1 + this.paddle1OriginYRelative);
	},
	set(value) {
		this.paddle1OriginYRelative = value / this.halfSizeY - 1;
	},
};
