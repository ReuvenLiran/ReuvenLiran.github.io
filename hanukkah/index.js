const BROWSER = {
  SAFARI: false,
  CHROME: false,
  FIREFOX: false,
};

function checkIsSafari() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") === -1) {
      BROWSER.SAFARI = true;
    } else {
      BROWSER.CHROME = true;
    }
  } else {
    BROWSER.SAFARI = true;
  }
}

checkIsSafari();

let GLOBAL_RATIO = 1;
const MENORAH_PADDING_LEFT = 100;
const MENORAH_PADDING_TOP = 10;

const canvasWidthRes = 1000;
const canvasHeightRes = 1000;
const W = window.innerWidth,
  H = window.innerHeight;

const can = document.getElementById("canvas");
can.width = canvasWidthRes;
can.height = canvasHeightRes;
can.style.backgroundPosition = `right bottom`;
let imageWidth = 750;
let imageHeight = 800;

const ctx = can.getContext("2d");
const candle = new Image();
candle.src = "./images/candle.png";

function setMenorahSize() {
  const menorahRatioResolution = 1442 / 1652;
  const heightRatio = 750 / 860;
  imageHeight = heightRatio * can.height;
  imageWidth = menorahRatioResolution * imageHeight;
  GLOBAL_RATIO = imageHeight / 750;

  can.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
  const leftPosition =
    can.width - imageWidth - GLOBAL_RATIO * MENORAH_PADDING_LEFT;
  const topPosition =
    can.height - imageHeight - GLOBAL_RATIO * MENORAH_PADDING_TOP;

  can.style.backgroundPosition = `${leftPosition}px ${topPosition}px`;
}

function setGeorgeSize() {
  const parrotHello = document.querySelector("#parrot-hello");
  const children = Array.from(parrotHello.children);
  children.forEach((node) => {
    node.style.height = `${300 * GLOBAL_RATIO}px`;
  });
  parrotHello.style.top = `${150 * GLOBAL_RATIO}px`;

  const speechBubble = document.querySelector(".speech-bubble");
  speechBubble.style.bottom = `calc(100vh - ${250 * GLOBAL_RATIO}px)`;
  speechBubble.style.left = `${200 * GLOBAL_RATIO}px`;
  speechBubble.style.width = `${360 * GLOBAL_RATIO}px`;
  speechBubble.style.padding = `${30 * GLOBAL_RATIO}px ${15 * GLOBAL_RATIO}px`;
  speechBubble.style.fontSize = `${150 * GLOBAL_RATIO}%`;

  const triangle = document.querySelector(".speech-bubble-triangle");
  triangle.style.borderWidth = `${42 * GLOBAL_RATIO}px`;
  triangle.style.marginLeft = `${-21 * GLOBAL_RATIO}px`;
  triangle.style.marginBottom = `${-42 * GLOBAL_RATIO}px`;
  triangle.style.left = `${50 * GLOBAL_RATIO}px`;
}

let mainCandleParticles = [];
const mouse = {};

let parrotHelloInterval;

const matchStrike = document.getElementById("matchStrike");
const fireSound = document.getElementById("fire");
fireSound.currentTime = 4;

let matchStrikeSoundTimeout;
let isMatchStriking = null;

const CANDLES = [
  {
    // First
    offsetX: 42,
    offsetY: 55,
    particles: [],
  },
  {
    // Second
    offsetX: 124,
    offsetY: 56,
    particles: [],
  },
  {
    // Third
    offsetX: 206,
    offsetY: 53,
    particles: [],
  },
  {
    // Fourth
    offsetX: 287,
    offsetY: 51,
    particles: [],
  },
  {
    // Fifth
    offsetX: 375,
    offsetY: 10,
    particles: [],
  },
  {
    // Sixth
    offsetX: 464,
    offsetY: 52,
    particles: [],
  },
  {
    // Seventh
    offsetX: 544,
    offsetY: 54,
    particles: [],
  },
  {
    // Eighth
    offsetX: 627,
    offsetY: 54,
    particles: [],
  },
  {
    // Ninth
    offsetX: 709,
    offsetY: 53,
    particles: [],
  },
];

let instructionIndex = -1;

const TYPES = {
  MESSAGE: "message",
  INSTRUCTION: "instruction",
};

window.addEventListener("resize", resizeCanvas);

resizeCanvas(); /// call the first time page is loaded

function resizeCanvas() {
  can.width = window.innerWidth;
  can.height = window.innerHeight;
  setMenorahSize();
  setGeorgeSize();
  mainCandleParticles = createParticles(mouse.x, mouse.m);
  CANDLES.forEach((candle) => {
    candle.offsetY = (candle.offsetY / 700) * imageHeight;
    candle.offsetX = (candle.offsetX / 750) * imageWidth;
    // candle.offsetX = candle.offsetX * GLOBAL_RATIO
    // const { x: rX, y: rY } = getResponsiveXY(candle.offsetX, candle.offsetY);
    // console.log("QQQQ", candle.particles.length)
    // if (candle.particles.length > 0) {
      // candle.particles = createParticles(rX, rY);
    // }
  });
}

function text(text) {
  const textNode = document.createElement("p");
  textNode.innerHTML = text;
  return textNode;
}

function playWrongSound() {
  let randomIndex = Math.round(Math.random()) * 1;
  if (randomIndex < 0) {
    randomIndex = 0;
  } else if (randomIndex > 1) {
    randomIndex = 1;
  }
  const sounds = document.querySelectorAll(".audio-wrong");
  const sound = sounds[randomIndex];
  sound.play();
}

const INSTRUCTIONS = [
  {
    type: TYPES.MESSAGE,
    duration: 5000,
    text: () =>
      ` Hey!
        <br>
        I am Geroge the parrot.
        <br>
        Happy Hannucka
      `,
    callbackBefore: animateHello,
    callbackAfter: () => {
      clearInterval(parrotHelloInterval);
    },
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the first candle",
    data: {
      candleIndex: 0,
    },
  },
  {
    type: TYPES.MESSAGE,
    text: () => "Amazing!",
    duration: 3000,
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the third candle",
    data: {
      candleIndex: 2,
    },
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the sixth candle",
    data: {
      candleIndex: 5,
    },
  },
  {
    type: TYPES.MESSAGE,
    text: () => "Excellent!",
    duration: 3000,
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the ninth candle",
    data: {
      candleIndex: 8,
    },
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the forth candle",
    data: {
      candleIndex: 3,
    },
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the second candle",
    data: {
      candleIndex: 1,
    },
  },
  {
    type: TYPES.MESSAGE,
    text: () => "You are on fire!",
    duration: 3000,
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the seventh candle",
    data: {
      candleIndex: 6,
    },
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the fith candle",
    data: {
      candleIndex: 4,
    },
  },
  {
    type: TYPES.INSTRUCTION,
    error: () => "Oops! Wrong Candle!",
    text: () => "Light the eighth candle",
    data: {
      candleIndex: 7,
    },
  },
  {
    type: TYPES.MESSAGE,
    text: () => "Good Job!",
    duration: 3000,
  },
  {
    type: TYPES.MESSAGE,
    text: () => `
          Hey, do you like sufganyot?
          <br />
          We are going to bake some now!
    `,
    duration: 7000,
  },
];

function showInstruction(showError) {
  if (!showError) {
    instructionIndex += 1;
  }
  const bubble = document.querySelector(".speech-bubble");
  const bubbleContent = document.querySelector(".speech-bubble__content");
  const instruction = INSTRUCTIONS[instructionIndex];

  if (instruction) {
    bubble.classList.remove("show");

    setTimeout(() => {
      bubbleContent.innerHTML = "";

      if (instruction.type === TYPES.MESSAGE) {
        bubbleContent.innerHTML = instruction.text();
        if (instruction.callbackBefore) {
          instruction.callbackBefore();
        }
        setTimeout(function () {
          if (instruction.callbackAfter) {
            instruction.callbackAfter();
          }
          showInstruction();
        }, instruction.duration);
      } else if (instruction.type === TYPES.INSTRUCTION) {
        if (showError) {
          bubbleContent.innerHTML = instruction.error();
          instructionIndex -= 1;
          setTimeout(() => {
            showInstruction();
          }, 2000);
        } else {
          bubbleContent.innerHTML = instruction.text();
        }
      }

      instruction && bubble.classList.add("show");
    }, 500);
  } else {
    bubble.classList.remove("show");
  }
}

function getResponsiveXY(offsetX, offsetY) {
  return {
    x: offsetX + (can.width - imageWidth) - MENORAH_PADDING_LEFT * GLOBAL_RATIO,
    y:
      offsetY + (can.height - imageHeight) - MENORAH_PADDING_TOP * GLOBAL_RATIO,
  };
}

//Lets create some particles now
function createParticles(x, y) {
  let particle_count = 50; //70 * GLOBAL_RATIO * 0.5;
  console.log(particle_count);
  particle_count = 30; // particle_count < 50 ? 50 : particle_count;
  const particles = [];
  for (var i = 0; i < particle_count; i++) {
    particles.push(new particle(x, y));
  }
  return particles;
}

function particle(x = 0, y = 0) {
  this.speed = {
    x:
      ((-2.5 + Math.random() * 5) / 4) *
      (GLOBAL_RATIO < 1 ? 1 : GLOBAL_RATIO) *
      1.1,
    y:
      ((-18 + Math.random() * 10) / 3) *
        (GLOBAL_RATIO < 1 ? 1 : GLOBAL_RATIO) *
        1.1 -
      3,
  };
  if (GLOBAL_RATIO < 0.6) {
    this.speed.x *= GLOBAL_RATIO; //0.8;
    this.speed.y *= GLOBAL_RATIO; //0.8;
    // alert(GLOBAL_RATIO)
  }

  //location = mouse coordinates
  //Now the flame follows the mouse coordinates
  this.location = { x, y };

  //radius range = 10-30
  this.radius = GLOBAL_RATIO * 0.85 * 10; // 10 + Math.random() * 20;
  //life range = 20-30
  this.life = 20 + Math.random() * 10 - 15;
  if (GLOBAL_RATIO < 1) {
    this.life -= 5;
  }
  this.remaining_life = this.life;
  //colors
  this.r = Math.round(Math.random() * 255);
  this.g = Math.round(Math.random() * 255);
  this.b = Math.round(Math.random() * 255);
}

var m = { x: 400, y: 300 };

function drawLight(x, y) {
  ctx.globalCompositeOperation = "source-over";

  var g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(1, "rgba(255,206,96,0)");
  g.addColorStop(0, "rgba(255,206,96,1)");
  ctx.fillStyle = g;
}

function drawFire(particles2, initialX, initialY) {
  ctx.globalCompositeOperation = "lighter";
  for (var i = 0; i < particles2.length; i++) {
    var p = particles2[i];
    ctx.beginPath();
    //changing opacity according to the life.
    //opacity goes to 0 at the end of life of a particle
    p.opacity = Math.round((p.remaining_life / p.life) * 100) / 100;
    //a gradient instead of white fill
    var gradient = ctx.createRadialGradient(
      p.location.x,
      p.location.y,
      0,
      p.location.x,
      p.location.y,
      p.radius
    );
    gradient.addColorStop(
      0,
      "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")"
    );
    gradient.addColorStop(
      0.5,
      "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")"
    );
    gradient.addColorStop(1, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 0)");
    ctx.fillStyle = gradient;
    ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
    ctx.fill();

    //lets move the particles
    p.remaining_life--;
    // p.radius -= 0.1;
    const radiusMultiplier = GLOBAL_RATIO * 0.85;
    p.radius -= radiusMultiplier === 1 ? 0.15 : 0.15 * radiusMultiplier;

    p.location.x += p.speed.x;
    p.location.y += p.speed.y;

    //regenerate particles
    if (p.remaining_life < 0 || p.radius < 0) {
      //a brand new particle replacing the dead one
      particles2[i] = new particle(initialX, initialY);
    }
  }
}

function playFireSound() {
  try {
    if (isMatchStriking === false && instructionIndex > 1) {
      fireSound.currentTime = 4;
      fireSound.play();
    }
  } catch (e) {
    console.log(e);
  }
}

function onClick(e) {
  const CLICK_AREA_SIZE = 30 * GLOBAL_RATIO;

  const bounds = e.target.getBoundingClientRect();
  const x = e.pageX - bounds.left - scrollX; // is window.scrollX same for Y
  const y = e.pageY - bounds.top - scrollY; //
  CANDLES.forEach(function (candle, index) {
    const { x: rX, y: rY } = getResponsiveXY(candle.offsetX, candle.offsetY);
    const instruction = INSTRUCTIONS[instructionIndex];

    const candleIndex =
      instruction && instruction.data ? instruction.data.candleIndex : -1;
    if (
      candleIndex >= 0 &&
      rX + CLICK_AREA_SIZE > x &&
      rX - CLICK_AREA_SIZE < x &&
      rY + CLICK_AREA_SIZE > y &&
      rY - CLICK_AREA_SIZE < y
    ) {
      if (index === candleIndex) {
        matchStrike.pause();
        matchStrike.play();
        isMatchStriking = true;
        // fireSound.pause();
        matchStrike.currentTime = 0;
        clearTimeout(matchStrikeSoundTimeout);

        function onEndMatchStrike() {
          matchStrike.pause();
          isMatchStriking = false;
        }

        matchStrikeSoundTimeout = setTimeout(onEndMatchStrike, 3500);
        const time = BROWSER.SAFARI ? 500 : 0;

        setTimeout(() => {
          candle.particles = createParticles(rX, rY);
          showInstruction();
        }, time);
      } else {
        if (BROWSER.SAFARI) {
          showInstruction(true);
          setTimeout(() => {
            playWrongSound();
          }, 0);
        } else {
          showInstruction(true);
          setTimeout(() => {
            playWrongSound();
          }, 100);
        }
      }
    }
  });
}

document.addEventListener("click", debounce(onClick, 300));

document.addEventListener("mousemove", function (e) {
  var rect = canvas.getBoundingClientRect();

  var bounds = e.target.getBoundingClientRect();
  mouse.x = e.pageX - bounds.left - scrollX; // is window.scrollX same for Y
  mouse.y = e.pageY - bounds.top - scrollY; //
  m.x = mouse.x;
  m.y = mouse.y;
});

var r = 100;

function flicker() {
  var a = Math.random() > 0.5 ? 0 : 1;
  var b = Math.random() > 0.5 ? 0 : 1;
  var c = Math.random() > 0.5 ? 0 : 1;
  if (a == b && b == c) {
    r = Math.random() > 0.5 ? 100 : 102;
  }
}

var candleImage;
var candlesImages = [];

function draw() {
  flicker();

  ctx.clearRect(0, 0, can.width, can.height);
  ctx.globalCompositeOperation = "source-over";

  var g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, r * GLOBAL_RATIO);
  g.addColorStop(1, "rgba(255,206,96,0)");
  g.addColorStop(0, "rgba(255,206,96,1)");
  ctx.fillStyle = g;

  ctx.save();

  CANDLES.forEach((candle) => {
    if (candle.particles.length > 0) {
      const { x: rX, y: rY } = getResponsiveXY(candle.offsetX, candle.offsetY);
      ctx.fillRect(0, 0, can.width, can.height);

      drawLight(rX, rY);
    }
  });

  ctx.fillRect(0, 0, can.width, can.height);
  const numOfLightedCandles = CANDLES.filter(
    (candle) => candle.particles.length > 0
  ).length;
  ctx.fillStyle = `rgba(0,0,0,${0.6 - numOfLightedCandles * 0.03})`;

  ctx.globalCompositeOperation = "xor";
  ctx.fillRect(0, 0, can.width, can.height);

  ctx.globalCompositeOperation = "source-over";

  ctx.save();

  const pos = { x: m.x, y: m.y };
  const FIX_POSITION_X = GLOBAL_RATIO * 16;
  const FIX_POSITION_Y = GLOBAL_RATIO * 125;
  ctx.translate(pos.x + FIX_POSITION_X, pos.y + FIX_POSITION_Y);
  ctx.rotate((-7 * Math.PI) / 180);
  const imgHeight = GLOBAL_RATIO * (550 / 2.1); // / 2.7; //80;
  const imgWidth = GLOBAL_RATIO * (55 / 2.1); // / 4; //15;
  ctx.drawImage(candle, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
  ctx.restore();

  drawFire(mainCandleParticles, mouse.x, mouse.y);

  CANDLES.forEach((candle) => {
    if (candle.particles.length > 0) {
      const { x: rX, y: rY } = getResponsiveXY(candle.offsetX, candle.offsetY);
      drawFire(candle.particles, rX, rY);
    }
  });
}

draw();
showInstruction();
setInterval(draw, 33);
setInterval(playFireSound, 8000);
playFireSound();

let parrotHelloFrameIndex = -1;
let reverse = false;

function animateHello() {
  parrotHelloInterval = setInterval(() => {
    const parrotHello = document.querySelector("#parrot-hello");
    const children = Array.from(parrotHello.children);
    if (!reverse && parrotHelloFrameIndex === children.length - 1) {
      reverse = true;
      parrotHelloFrameIndex = children.length;
    } else if (reverse && parrotHelloFrameIndex === 0) {
      reverse = false;
      parrotHelloFrameIndex = -1;
    }
    if (reverse) {
      parrotHelloFrameIndex -= 1;
    } else {
      parrotHelloFrameIndex += 1;
    }

    children.forEach((child, index) => {
      if (parrotHelloFrameIndex === index) {
        child.classList.remove("hide");
      } else {
        child.classList.add("hide");
      }
    });
  }, 40);
}

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, arguments), wait);
  };
}
