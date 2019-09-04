export default {
	get() {
		return (this.sizeY / 2) * (1 + this.paddle1OriginYRelative);
	},
	set(value) {
		this.paddle1OriginYRelative = value / (this.sizeY / 2) - 1;
	},
};
