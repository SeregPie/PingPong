export default {
	get() {
		return this.halfSizeY * (2 + this.paddle2OriginYRelative);
	},
	set(value) {
		this.paddle2OriginYRelative = value / this.halfSizeY - 2;
	},
};
