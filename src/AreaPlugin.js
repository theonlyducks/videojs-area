import videojs from 'video.js';
import packageJson from '../package.json';

import { AreaButton } from './AreaButton';
import { AreaCanvas } from './AreaCanvas';

const { version: VERSION } = packageJson;

const Plugin = videojs.getPlugin('plugin');

class AreaPlugin extends Plugin {

	constructor(player, options = {}) {
		super(player, options);
		videojs.log('area plugin start ', options);
		player.getChild('ControlBar').addChild('AreaButton');
		player.addChild('AreaCanvas', { plugin: this });
	}

}

AreaPlugin.defaultState = {};
AreaPlugin.VERSION = VERSION;

videojs.registerComponent('AreaCanvas', AreaCanvas);
videojs.registerComponent('AreaButton', AreaButton);
videojs.registerPlugin('areaPlugin', AreaPlugin);
export default AreaPlugin;
