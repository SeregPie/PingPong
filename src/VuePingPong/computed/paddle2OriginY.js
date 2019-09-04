export default {
	get() {
		return (this.sizeY / 2) * (2 + this.paddle2OriginYRelative);
	},
	set(value) {
		this.paddle2OriginYRelative = value / (this.sizeY / 2) - 2;
	},
};
