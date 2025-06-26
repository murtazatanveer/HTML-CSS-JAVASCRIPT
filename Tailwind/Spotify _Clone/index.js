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
const next = document.getElementById("next");
const prev = document.getElementById("prev");

songsList.addEventListener("click", stopAndStart);
pausePlay.addEventListener("click", stopAndStart_2);
next.addEventListener("click", nextMusic);
prev.addEventListener("click", prevMusic);

let currentAudio = null;
let currentPlayingIndex = null;

musicLogo.style.display = "none";

function nextMusic() {
  if (!currentAudio || !currentPlayingIndex || currentPlayingIndex == 4) return;

  currentAudio.pause();
  console.log(currentPlayingIndex);

  currentPlayingIndex++;
  console.log(currentPlayingIndex);

  currentAudio = new Audio(songsPath[currentPlayingIndex]);
  currentAudio.play();
}

function prevMusic() {}

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
}
