import videojs from 'video.js';
import packageJson from '../package.json';

import { AreaButton } from './AreaButton';
import { AreaCanvas } from './AreaCanvas';
import { Core as Manager } from "garea.js";

const { version: VERSION } = packageJson;

const Plugin = videojs.getPlugin('plugin');

class AreaPlugin extends Plugin {

	constructor(player, options = {}) {
		super(player, options);
		this.player = player;
		videojs.log('area plugin start ', options);
		player.getChild('ControlBar').addChild('AreaButton', { plugin: this });
		player.addChild('AreaCanvas', { plugin: this });
		player.on('playing', () => {
			this.canvas = document.getElementById('vjs-canvas');
		});
	}

	addArea() {
		const controlBar = this.player.getChild('ControlBar');
		controlBar.hide();
		this.canvas.style.display = 'block';
		this.canvas.style.position = 'absolute';
		this.manager = new Manager('vjs-canvas');
		this.manager.addDraw('area', {

		});
		const draw = this.manager.getDraw('area');
		draw.setColor('area', 'transparent');
		this.manager.setEdit('area');
		this.manager.create();
	}

	removeArea() {
		const controlBar = this.player.getChild('ControlBar');
		controlBar.show();
		this.canvas.style.display = 'none';
		this.manager.removeDraw('area');
	}
}

AreaPlugin.defaultState = {};
AreaPlugin.VERSION = VERSION;

videojs.registerComponent('AreaCanvas', AreaCanvas);
videojs.registerComponent('AreaButton', AreaButton);
videojs.registerPlugin('areaPlugin', AreaPlugin);
export default AreaPlugin;
