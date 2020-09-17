const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".video-container video");

  //  Sounds
  const sounds = document.querySelectorAll(".sound-picker button");
  // Time display
  const timeDisplay = document.querySelector(".time-display");
  // Get the length of outline
  const outlineLength = outline.getTotalLength();
  // Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //   play sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  //   lets create a function to play pause song and display buttons acc.
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };
};

app();
