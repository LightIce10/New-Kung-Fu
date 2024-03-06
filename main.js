// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-qoute").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-qoute").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis" || name === "master mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-qoute").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey" || name === "master monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-qoute").innerHTML =
      "At the first sign of trouble, I'll give you a signal. Ka-ka! Kee-kee!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper" || name === "master viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-qoute").innerHTML =
      "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "shifu" || name === "master shifu") {
    document.getElementById("char-name").innerHTML = "Master Shifu";
    document.getElementById("char-qoute").innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "oogway" || name === "master oogway") {
    document.getElementById("char-name").innerHTML = "Master Oogway";
    document.getElementById("char-qoute").innerHTML =
      "You are too concerned with what was and what will be. There's a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-qoute").innerHTML =
      "You think knowing will heal you, huh? Fill some... crater in your soul. Well, here's your answer. Your parents didn't love you. But here... let me heal you.";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "boss wolf") {
    document.getElementById("char-name").innerHTML = "Boss Wolf";
    document.getElementById("char-qoute").innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "crane" || name === "master crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-qoute").innerHTML =
      "You can chain my body, but you will never chain my warrior spirit!.";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "croc" || name === "master croc") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-qoute").innerHTML = "Vengeance is served!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-qoute").innerHTML =
      "I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr. ping") {
    document.getElementById("char-name").innerHTML = "Mr. Ping";
    document.getElementById("char-qoute").innerHTML =
      "We are noodle folk. Broth runs through our veins!";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-qoute").innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (
    name === "storming ox" ||
    name === "master storming ox" ||
    name === "master ox"
  ) {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-qoute").innerHTML = "You insolent fool!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-qoute").innerHTML = "---------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
