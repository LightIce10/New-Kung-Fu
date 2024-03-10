// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQouteEl = document.getElementById("char-qoute");
let charImgEl = document.getElementById("char-img");
let heading = document.getElementById("text");
let newP = document.getElementById("pTheme");
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", themeChange);

// Functions
function themeChange() {
  let themeInput = document.getElementById("theme-in").value.toLowerCase();

  if (themeInput === "dark" || themeInput === "black") {
    document.getElementById("bodyTheme").style.background =
      "rgba(0, 0, 0, 0.7)";
    charNameEl.style.color = "white";
    heading.style.color = "white";
    newP.style.color = "white";
  } else if (themeInput === "light" || themeInput === "white") {
    document.getElementById("bodyTheme").style.background =
      "rgba(255, 255, 255, 0.7)";
    charNameEl.style.color = "black";
    heading.style.color = "black";
    newP.style.color = "black";
  } else if (
    themeInput === "random" ||
    themeInput === "colour" ||
    themeInput === "random colour"
  ) {
    // charNameEl
    let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let a = (Math.random() * 1).toFixed(1);

    // bodyTheme
    let bodyR = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let bodyG = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let bodyB = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let bodyA = (Math.random() * 1).toFixed(1);

    // heading
    let headingR = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let headingG = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let headingB = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let headingA = (Math.random() * 1).toFixed(1);

    // newP
    let newPR = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let newPG = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let newPB = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let newPA = (Math.random() * 1).toFixed(1);

    document.getElementById(
      "bodyTheme"
    ).style.background = `rgba(${bodyR}, ${bodyG}, ${bodyB}, ${bodyA})`;
    charNameEl.style.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    heading.style.color = `rgba(${headingR}, ${headingG}, ${headingB}, ${headingA})`;
    newP.style.color = `rgba(${newPR}, ${newPG}, ${newPB}, ${newPA})`;
  }
}

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQouteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQouteEl.innerHTML = "That was hardcore!";
    charImgEl.src = "img/tigress.png";
  } else if (name === "mantis" || name === "master mantis") {
    charNameEl.innerHTML = "Mantis";
    charQouteEl.innerHTML = "Fear the Bug!";
    charImgEl.src = "img/mantis.png";
  } else if (name === "monkey" || name === "master monkey") {
    charNameEl.innerHTML = "Monkey";
    charQouteEl.innerHTML =
      "At the first sign of trouble, I'll give you a signal. Ka-ka! Kee-kee!";
    charImgEl.src = "img/monkey.png";
  } else if (name === "viper" || name === "master viper") {
    charNameEl.innerHTML = "Viper";
    charQouteEl.innerHTML = "I don't need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else if (name === "shifu" || name === "master shifu") {
    charNameEl.innerHTML = "Master Shifu";
    charQouteEl.innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    charImgEl.src = "img/shifu.png";
  } else if (name === "oogway" || name === "master oogway") {
    charNameEl.innerHTML = "Master Oogway";
    charQouteEl.innerHTML =
      "You are too concerned with what was and what will be. There's a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    charImgEl.src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQouteEl.innerHTML =
      "You think knowing will heal you, huh? Fill some... crater in your soul. Well, here's your answer. Your parents didn't love you. But here... let me heal you.";
    charImgEl.src = "img/shen.png";
  } else if (name === "boss wolf" || name === "wolf" || name === "wolf boss") {
    charNameEl.innerHTML = "Boss Wolf";
    charQouteEl.innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    charImgEl.src = "img/boss-wolf.png";
  } else if (name === "crane" || name === "master crane") {
    charNameEl.innerHTML = "Crane";
    charQouteEl.innerHTML =
      "You can chain my body, but you will never chain my warrior spirit!.";
    charImgEl.src = "img/crane.png";
  } else if (name === "croc" || name === "master croc") {
    charNameEl.innerHTML = "Croc";
    charQouteEl.innerHTML = "Vengeance is served!";
    charImgEl.src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQouteEl.innerHTML =
      "I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!";
    charImgEl.src = "img/kai.png";
  } else if (name === "mr. ping") {
    charNameEl.innerHTML = "Mr. Ping";
    charQouteEl.innerHTML = "We are noodle folk. Broth runs through our veins!";
    charImgEl.src = "img/mr-ping.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQouteEl.innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be";
    charImgEl.src = "img/soothsayer.png";
  } else if (
    name === "storming ox" ||
    name === "master storming ox" ||
    name === "master ox"
  ) {
    charNameEl.innerHTML = "Storming Ox";
    charQouteEl.innerHTML = "You insolent fool!";
    charImgEl.src = "img/storming-ox.png";
  } else if (name === "tai lung" || name === "shifu son") {
    charNameEl.innerHTML = "Tai Lung";
    charQouteEl.innerHTML =
      "So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!";
    charImgEl.src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQouteEl.innerHTML = "---------";
    charImgEl.src = "img/question-mark.png";
  }
}
