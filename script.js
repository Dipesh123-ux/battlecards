
let music = document.getElementById("music");
let musdiv =document.getElementById("mus");

var isPlay = true;


musdiv.addEventListener("click", musicpause);

function musicpause() {
	if(isPlay == false) 
	{
		music.pause();
		isPlay = true;
	}
	else if (isPlay == true)
	{
		music.play();
		isPlay = false;
	}
}






