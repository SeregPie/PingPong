import VuePingPong from './VuePingPong';

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VuePingPong.name, VuePingPong);
}

export default VuePingPong;
