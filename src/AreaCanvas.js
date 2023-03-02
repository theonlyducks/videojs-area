import videojs from 'video.js';

const Component = videojs.getComponent('Component');

export class AreaCanvas extends Component {

	constructor(player, options) {
		super(player, options);
		this.plugin = options.plugin;
		player.on('playing', () => {
			const canvas = document.querySelector('#vjs-canvas');
			canvas.ondblclick = () => {
				this.plugin.removeArea();
			}
		});
	}

	createEl() {
		const player = this.player().el();
		const canvas = videojs.dom.createEl('div', {
			className: 'vjs-area-duck--canvas',
		});
		canvas.innerHTML = `
			<canvas id="vjs-canvas" width="${player.offsetWidth}" height="${player.offsetHeight}"></canvas>
		`;
		return canvas;
	}

}
