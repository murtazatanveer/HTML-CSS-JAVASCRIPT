const songsPath = [
  `Songs/Aam_Jahe_Munde___Parmish_Verma_feat_Pardhaan___Desi_Crew___Laddi_Chahal(128k).mp3`,
  `Songs/Abhi_Mujh_Mein_Kahin_[Slowed_Reverb]_Sonu_Nigam___Agneepath___SV_Lofi(256k).mp3`,
  `Songs/Anuv_Jain_-_JO_TUM_MERE_HO__Lyrics_(256k).mp3`,
  `Songs/Arijit_Singh_Mashup_2023__Full_Version____SICKVED(128k).mp3`,
  `Songs/Ishq_-__lyrics__Artist_-_Faheem_Abdullah___rauhan_malik(128k).mp3`,
];

const songsList = document.getElementById("songsList");
const musicLogo = document.getElementById("currSongLogo");
const musicName = document.getElementById("currSong");
const pausePlay = document.getElementById("pausePlay");
const allSongsName = document.getElementsByClassName("songName");
const allSongsButtons = document.getElementsByClassName("song");
const playBox = document.getElementById("playBox");
const prevPauseNext = document.getElementById("prevPauseNext");

const hamBurger = document.getElementById("hamBurger");
const aside = document.getElementById("aside");

songsList.addEventListener("click", stopAndStart);
pausePlay.addEventListener("click", stopAndStart_2);
document.addEventListener("keydown", stopAndStart_2);

let currentAudio = null;
let currentPlayingIndex = null;
let currentPlayingSong = null;

musicLogo.style.display = "none";

playBox.addEventListener("click", nextAndPrevMusic);
hamBurger.addEventListener("click", displayAside);

window.addEventListener("resize", () => {
  const screenSize = window.innerWidth;
  console.log(screenSize);

  if (screenSize >= 1024 && !aside.classList.contains("hidden")) {
    aside.classList.add("hidden", "dimensions");
    aside.classList.remove("aside");
  }

  if (screenSize < 640) {
    prevPauseNext.style.removeProperty("marginLeft");
  }
});

function displayAside() {
  if (aside.classList.contains("hidden")) {
    aside.classList.remove("hidden", "dimensions");
    aside.classList.add("aside");
  } else {
    aside.classList.add("hidden", "dimensions");
    aside.classList.remove("aside");
  }
}

function nextAndPrevMusic(event) {
  const element = event.target;
  const nextPrevDataset = element.dataset.index;

  if (
    (nextPrevDataset === "next" || nextPrevDataset === "prev") &&
    (currentAudio || currentPlayingIndex || currentPlayingSong)
  ) {
    currentAudio.pause();
    pausePlay.src = "pause.png";

    currentPlayingSong.style.border = "";
    let secondDiv = currentPlayingSong.children[1];
    let img = secondDiv.children[1];
    img.src = "play.png";

    if (nextPrevDataset === "next") {
      currentPlayingIndex =
        currentPlayingIndex === 4 ? 0 : ++currentPlayingIndex;
    } else {
      currentPlayingIndex =
        currentPlayingIndex === 0 ? 4 : --currentPlayingIndex;
      console.log(currentPlayingIndex);
    }

    currentPlayingSong = songsList.children[currentPlayingIndex];
    secondDiv = currentPlayingSong.children[1];
    img = secondDiv.children[1];
    img.src = "pause.png";

    let firstDiv = currentPlayingSong.children[0];
    let imgSource = firstDiv.children[0];
    musicLogo.src = imgSource.src;

    currentPlayingSong.style.border = "4px solid #807e7e";

    currentAudio = new Audio(songsPath[currentPlayingIndex]);
    currentAudio.play();
    musicName.innerText = allSongsName[currentPlayingIndex].innerText;
  }
}

function stopAndStart_2() {
  if (!currentAudio) return;

  if (currentAudio.paused) {
    currentAudio.play();
    allSongsButtons[currentPlayingIndex].src = "pause.png";
    pausePlay.src = "pause.png";
  } else {
    currentAudio.pause();
    allSongsButtons[currentPlayingIndex].src = "play.png";
    pausePlay.src = "play.png";
  }
}

function stopAndStart(e) {
  const img = e.target;
  if (!img.dataset.index) return;

  let prevSongPlay = currentPlayingIndex;
  musicLogo.style.display = "";
  const index = Number(img.dataset.index);

  const parent = img.parentElement;
  const cousinBeforeParent = parent.previousElementSibling;
  const firstChild = cousinBeforeParent.firstElementChild;
  musicLogo.src = firstChild.src;

  if (currentPlayingIndex === index) {
    if (currentAudio.paused) {
      currentAudio.play();
      img.src = "pause.png";
      pausePlay.src = "pause.png";
    } else {
      currentAudio.pause();
      img.src = "play.png";
      pausePlay.src = "play.png";
    }
  } else {
    if (currentAudio) {
      currentAudio.pause();

      const prevImg = document.querySelector(
        `[data-index="${currentPlayingIndex}"]`
      );
      if (prevImg) prevImg.src = "play.png";
    }

    currentAudio = new Audio(songsPath[index]);
    currentAudio.play();
    currentPlayingIndex = index;
    img.src = "pause.png";
    pausePlay.src = "pause.png";

    musicName.innerText = allSongsName[index].innerText;

    currentAudio.onended = () => {
      img.src = "play.png";
      pausePlay.src = "play.png";
      currentPlayingIndex = null;
    };
  }
  if (prevSongPlay != null && prevSongPlay != currentPlayingIndex) {
    songsList.children[prevSongPlay].style.border = "";
  }
  currentPlayingSong = songsList.children[currentPlayingIndex];

  currentPlayingSong.style.border = "4px solid #807e7e";

  prevPauseNext.style.marginLeft = "15%";
}
