let data = {
    title : ["Happy Nation", 
             "BRAZILIAN FONK", 
             "BIBI PHONK BR",
            ],
    song :  ["music/Ace Of Base - Happy Nation.mp3",
             "music/bate-forte-e-dança-(#brazilian-phonk)-made-with-Voicemod.mp3", 
             "Bibi Babydoll  DJ FKU - BIBI PHONK BR.mp3",
            ],
    poster: [
        "https://upload.wikimedia.org/wikipedia/en/4/4b/Happy_nation.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/1*XrnXihETfw2zHC-T5U5L7Q.jpeg",
        "https://i.ytimg.com/vi/HttkgipRz9Q/maxresdefault.jpg",
            ],
}

let song = new Audio()

window.onload = function(){
    playSong()
}
let currentSong = 0

function playSong (){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
}
function PlayOrPauseSong(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src = "images/pause.png"
    }
    else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}