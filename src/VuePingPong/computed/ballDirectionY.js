import Math_convertRadiansToTurns from '../../core/Math/convertRadiansToTurns';
import Math_convertTurnsToRadians from '../../core/Math/convertTurnsToRadians';

export default {
	get() {
		return Math.cos(Math_convertTurnsToRadians(this.ballDirection));
	},
	set(value) {
		this.ballDirection = Math_convertRadiansToTurns(Math.atan2(this.ballDirectionX, value));
	},
};
