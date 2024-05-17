let data = {
    title: [
        "Happy Nation",
        "BRAZILIAN FONK",
        "BIBI PHONK BR",
        "Kerosene",
        "Daylight",
        "murder in my mind",
        "Asphalt 8",
        "Neon Blade",
        "Life In Rio",
        "Suicide Year",
            ],
    song:   [
        "music/Ace Of Base - Happy Nation.mp3",
        "music/music2.mp3",
        "music/Bibi Babydoll  DJ FKU - BIBI PHONK BR.mp3",
        "music/Crystal Castles - Kerosene.mp3",
        "music/David Kushner - Daylight.mp3",
        "music/KORDHELL-Murder-In-My-Mind.mp3",
        "music/Macan - ASPHALT 8.mp3",
        "music/neon-blade-moondeity-[edit-audio]-made-with-Voicemod.mp3",
        "music/Slowboy, NUEKI, Crazy Mano feat. TOLCHONOV - Life in Rio.mp3",
        "music/WEEDMANE - SUICIDE YEAR.mp3",
            ],
    poster: [
        "https://upload.wikimedia.org/wikipedia/en/4/4b/Happy_nation.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/1*XrnXihETfw2zHC-T5U5L7Q.jpeg",
        "https://i.ytimg.com/vi/HttkgipRz9Q/maxresdefault.jpg",
        "https://i.ytimg.com/vi/_GSoMTdSeVo/sddefault.jpg",
        "https://i.cbc.ca/1.3474686.1457036658!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/sunset-silhouette-germany-weather-spring.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b3d6fd1-28cc-4b06-adaa-5052d94d3070/dg1g150-7a64b170-c658-4e06-b5cd-96d3f533351c.png/v1/fill/w_1280,h_727,q_80,strp/murder_in_my_mind_by_gwensenpaii_dg1g150-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvM2IzZDZmZDEtMjhjYy00YjA2LWFkYWEtNTA1MmQ5NGQzMDcwXC9kZzFnMTUwLTdhNjRiMTcwLWM2NTgtNGUwNi1iNWNkLTk2ZDNmNTMzMzUxYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZO99mtjEY3mzeA_DGp-3PV0RGYHs_yAA_9G5BdzvKjc",
        "https://i1.sndcdn.com/artworks-sBKtY1HEu8HzbFdm-PhcDgA-t500x500.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wEs9ojUiwOTYFhgokBqPCPhDF9LdeV_4fmXfDwZ4Vg&s",
        "https://i.ytimg.com/vi/7crimQ3nhGw/maxresdefault.jpg",
        "https://i.ytimg.com/vi/4dh06N68aOY/hqdefault.jpg",
    ],
}

let song = new Audio()

window.onload = function () {
    playSong()
}
let currentSong = 0

function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
}
function PlayOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    }
    else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.width = position * 100 + "%"
    convertTime(song.currentTime)
    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {
    currentTime = document.getElementsByClassName("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent = min + ":" + sec
    totalTime(song.duration)
}
function totalTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent += " / " + min + ":" + sec
}
function next() {
    currentSong++
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong()
}
function pre() {
    currentSong--
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong()
}

function mute(){
    let mute = document.getElementById("mute")
    if(song.muted){
        song.muted = false
        mute.src = "images/volume.png"
    }
    else {
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}
function decrease(){
    song.volume-= 0.2
    // if(song.volume <= 0.2){
    //     song.volume = 0
    //     mute.src = "images/volume.png"
    // }
}

function increase(){
    song.volume += 0.2
    // if(song.volume > 2){
    //     song.volume = 2
    //     mute.src = "images/volume.png"
    // }
}

