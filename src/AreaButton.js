import videojs from 'video.js';
import { Core as Manager } from 'garea.js';

const Button = videojs.getComponent('Button');

export class AreaButton extends Button {

	constructor(player, options) {
		super(player, options);
		player.on('playing', () => {

		});
	}

	buildCSSClass() {
		return `vjs-area-duck ${super.buildCSSClass()}`;
	}

	handleClick() {
		videojs.log('Zoom button handleClick');
		const canvas = document.getElementById('vjs-canvas');
		canvas.style.position = 'absolute';
		this.manager = new Manager('vjs-canvas');
		this.manager.addDraw('area', {

		});
		const draw = this.manager.getDraw('area');
		draw.setColor('area', 'transparent');
		this.manager.setEdit('area');
		this.manager.create();
	}

}
