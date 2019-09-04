import startAnimationLoop from '../core/startAnimationLoop';

export default function() {
	this.updateSize();
	this.redraw();
	startAnimationLoop(() => {
		if (this._isDestroyed) {
			return false;
		}
		this.updateSize();
		this.step();
		this.redraw();
	}, this.interval);
}
