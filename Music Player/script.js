const image =document.querySelector("img");
const title =document.getElementById("title");
const artist =document.getElementById("artist");

const music =document.querySelector("audio");
const prevBtn=document.getElementById("prev");
const PlayBtn=document.getElementById("play");
const nextBtn=document.getElementById("next");

//Music
const songs=[
    {
        name:"jacinto-1",
        displayName:"Electric Chill Machine",
        artist :"Jacinto Design",
    },
    {
        name:"jacinto-2",
        displayName:"Seven Nation Army (Remix)",
        artist :"Jacinto Design",
    },
    {
        name:"jacinto-3",
        displayName:"Goodnight, Disco Queen",
        artist :"Jacinto Design",
    },
    {
        name:"Metric-1",
        displayName:"Front Row",
        artist :"Metric/Jacinto Design",
    }
];

//Check if playing
let isPlaying = false;

//Play
function playSong()
{
    isPlaying = true;
    PlayBtn.classList.replace("fa-play","fa-pause");
    PlayBtn.setAttribute("title","Pause");
    music.play();
}

//Pause
function pauseSong()
{
    isPlaying=false;
    PlayBtn.classList.replace("fa-pause","fa-play");
    PlayBtn.setAttribute("title","Play");
    music.pause();
}

//Play or Pause Event Listener
PlayBtn.addEventListener("click",()=>
{
(isPlaying ? pauseSong() : playSong())
});

//Update DOM
function loadSong(song)
{
    title.textContent=song.displayName;
    artist.textContent=song.artist;
    music.src= `music/${song.name}.mp3`;
    image.src= `img/${song.name}.jpg`;
}

//Current Song
let songIndex =0;

//PrevSong
function prevSong()
{
    songIndex--;
    if(songIndex<0)
    {
        songIndex=songs.length -1;
    }
    loadSong(songs[songIndex]);
    pauseSong();
}

//NextSong
function nextSong()
{
    songIndex++;
    if(songIndex >songs.length-1)
    {
        songIndex=0;
    }
    loadSong(songs[songIndex]);
    playSong();
}


//On Load - Select First Song
loadSong(songs[songIndex]);


//Event Listeners
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);


