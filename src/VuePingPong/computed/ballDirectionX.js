import Math_convertRadiansToTurns from '../../core/Math/convertRadiansToTurns';
import Math_convertTurnsToRadians from '../../core/Math/convertTurnsToRadians';

export default {
	get() {
		return Math.sin(Math_convertTurnsToRadians(this.ballDirection));
	},
	set(value) {
		this.ballDirection = Math_convertRadiansToTurns(Math.atan2(value, this.ballDirectionY));
	},
};
