window.addEventListener('load', () => {
  //store the sounds in an array
  const sounds = document.querySelectorAll('.sound');
  //store the pads in an array
  const pads = document.querySelectorAll(".pads div");
  //store the visual div
  const visual = document.querySelector(".visual");
  //store the pad colors
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#60d3c4",
    "#6071d3",
]


  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index)
    });
  });

  //Create a function that makes bubbles!
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function(){
      visual.removeChild(this);
    })
  }
});

