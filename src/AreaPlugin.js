import videojs from 'video.js';
import packageJson from '../package.json';

const { version: VERSION } = packageJson;

const Plugin = videojs.getPlugin('plugin');

class AreaPlugin extends Plugin {

	constructor(player, options = {}) {
		super(player, options);
	}

}

AreaPlugin.defaultState = {};
AreaPlugin.VERSION = VERSION;

videojs.registerPlugin('areaPlugin', AreaPlugin);
export default AreaPlugin;
