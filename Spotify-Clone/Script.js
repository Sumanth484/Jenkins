console.log("Welcome to Spotify app");

let songIndex = 1;
let audioElement = new Audio("songs/1.mp3");
let progressBar = document.getElementById("progressbar");
let masterPlay = document.getElementById("masterplay");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("song-item"));
let songicons = Array.from(document.getElementsByClassName("song-icon"));

let songs = [
    { songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", duration: "4:03", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", duration: "5:08", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", duration: "3:03", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven EH!DE ", filePath: "songs/4.mp3", duration: "4:35", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat", filePath: "songs/5.mp3", duration: "3:83", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", duration: "2:54", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam", filePath: "songs/7.mp3", duration: "3:43", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena - Salam", filePath: "songs/8.mp3", duration: "4:23", coverPath: "covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam", filePath: "songs/9.mp3", duration: "3:58", coverPath: "covers/9.jpg" },
    { songName: "Na Jaana - Salam", filePath: "songs/10.mp3", duration: "4:29", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songName;
    element.getElementsByClassName("time-stamp")[0].innerText = songs[i].duration;
})

const makeAllPlay = () => {
    songicons.forEach((element) => {
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");
    })
}

songicons.forEach((element, i) => {
    element.addEventListener("click", (e) => {

        makeAllPlay();

        audioElement.currentTime = 0;
        if (audioElement.paused) {
            songIndex = element.id;
            audioElement.src = songs[songIndex - 1].filePath;
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            gif.style.opacity = 1;
            document.getElementsByClassName("song-info-text")[0].innerText = songs[songIndex - 1].songName;
            element.classList.remove("fa-circle-play");
            element.classList.add("fa-circle-pause");
        }
        else if (songIndex === e.target.id) {
            audioElement.pause();
            masterPlay.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-circle-pause");
            gif.style.opacity = 0;
            element.classList.add("fa-circle-play");
            element.classList.remove("fa-circle-pause");
        }
        else {
            songIndex = e.target.id;
            audioElement.src = songs[songIndex - 1].filePath;
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            gif.style.opacity = 1;
            document.getElementsByClassName("song-info-text")[0].innerText = songs[songIndex - 1].songName;
            element.classList.remove("fa-circle-play");
            element.classList.add("fa-circle-pause");
        }

    })
})

masterPlay.addEventListener("click", () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        document.getElementById(songIndex).classList.remove("fa-circle-play");
        document.getElementById(songIndex).classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        document.getElementById(songIndex).classList.add("fa-circle-play");
        document.getElementById(songIndex).classList.remove("fa-circle-pause");
        gif.style.opacity = 0;
    }

})

previous.addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = 1;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex - 1].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    document.getElementsByClassName("song-info-text")[0].innerText = songs[songIndex - 1].songName;

})

next.addEventListener("click", () => {
    if (songIndex >= 10) {
        songIndex = 10;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex - 1].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    document.getElementsByClassName("song-info-text")[0].innerText = songs[songIndex - 1].songName;

})

audioElement.addEventListener("timeupdate", () => {

    let time = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = time;
})

progressBar.addEventListener("change", () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;

})