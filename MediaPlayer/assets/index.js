import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const buttonPlayPause = document.getElementById("PlayPause");
buttonPlayPause.onclick = () => player.togglePlay();

const buttonMuteUnmute = document.getElementById("MuteUnmute");
buttonMuteUnmute.onclick = () => player.toggleMute();
