const playButton=document.getElementById("play");
const pauseButton=document.getElementById("pause");
const playAudio =document.getElementById("audio1");
const playGif = document.getElementById("gif1");
const progressbar = document.getElementById("range1");
const volumeControl = document.getElementById("range2");


playButton.classList.add("show");
playGif.classList.add("display");
progressbar.value =0;

playButton.addEventListener("click",()=>{
    playAudio.play();
    playButton.classList.remove("show");
    pauseButton.classList.add("show");
    playGif.src= "music.gif";
 
    playGif.classList.remove("display");
});

pauseButton.addEventListener("click",()=>{
    playAudio.pause();
    pauseButton.classList.remove("show");
    playButton.classList.add("show");
    playGif.src= "music.gif";
    playGif.classList.add("display");
});

playAudio.addEventListener("timeupdate" , ()=>{
    const progress = (playAudio.currentTime/playAudio.duration)*100;
    progressbar.value = progress;
})

progressbar.addEventListener("input",()=>{
    const seektime = (progressbar.value/100)*playAudio.duration;
    playAudio.currentTime = seektime;
})

volumeControl.addEventListener("input",()=>{
    playAudio.volume = volumeControl.value;
})