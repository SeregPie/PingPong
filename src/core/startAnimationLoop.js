import Function_prototype_bindRecursive from './Function/prototype/bindRecursive';

export default function(callback, ms) {
	Function_prototype_bindRecursive(run => {
		requestAnimationFrame(() => {
			if (callback() !== false) {
				setTimeout(run, ms);
			}
		});
	})();
}
