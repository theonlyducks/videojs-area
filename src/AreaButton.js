import videojs from 'video.js';

const Button = videojs.getComponent('Button');

export class AreaButton extends Button {

	constructor(player, options) {
		super(player, options);
		this.plugin = options.plugin;
	}

	buildCSSClass() {
		return `vjs-area-duck ${super.buildCSSClass()}`;
	}

	handleClick() {
		videojs.log('Zoom button handleClick');
		this.plugin.addArea();
	}

}
