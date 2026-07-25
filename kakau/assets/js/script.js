
document.addEventListener("DOMContentLoaded", () => {
	const audio = document.getElementById("musica");

	document.getElementById("tocar").onclick = () => {
		audio.play();
	};

	document.getElementById("pausar").onclick = () => {
		audio.pause();
	};

	document.getElementById("parar").onclick = () => {
		audio.pause();
		audio.currentTime = 0;
	};
});
