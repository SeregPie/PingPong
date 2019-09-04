export default {
	get() {
		return this.ballDirectionDirty % 1;
	},
	set(value) {
		this.ballDirectionDirty = value % 1;
	},
};
