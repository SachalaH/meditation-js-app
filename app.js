const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".video-container video");
  const timeSelect = document.querySelectorAll(".time-select button");

  //  Sounds
  const sounds = document.querySelectorAll(".sound-picker button");
  // Time display
  const timeDisplay = document.querySelector(".time-display");
  // Get the length of outline
  const outlineLength = outline.getTotalLength();
  // Duration
  let fakeDuration = 180;
  timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
    fakeDuration % 60
  )}`;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // select different song
  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      play.src = "./svg/play.svg";
    });
  });

  //   play sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  // select time
  timeSelect.forEach((option) => {
    option.addEventListener("click", function () {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
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
  // Animate the circle
  song.ontimeupdate = () => {
    let current_time = song.currentTime;
    let elapsed = fakeDuration - current_time;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    // Animate the circle
    let progress =
      outlineLength - (current_time / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    // Animate display
    timeDisplay.textContent = `${minutes}:${seconds}`;
    // Pause video and audio on completion
    if (current_time >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  };
};

app();
