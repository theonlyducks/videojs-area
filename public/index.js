import 'video.js/dist/video-js.css';

import videojs from "video.js";

import '../src/plugin.css';
import '../src/plugin';

window.onload = () => {
	const video = videojs('my-video');
	video.areaPlugin();
};
