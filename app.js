let myList = [
  {
    Q: "What is the largest living species of reptile?",
    A: [
      { item: "Anaconda", State: false },
      { item: "Komodo Dragon", State: true },
      { item: "Crocodile", State: false },
      { item: "Iguana", State: false },
    ],
  },
  {
    Q: "What is the largest species of big cat?",
    A: [
      { item: "Leopard", State: false },
      { item: "Lion", State: false },
      { item: "Tiger", State: true },
      { item: "Jaguar", State: false },
    ],
  },
  {
    Q: "What is the smallest bird in the world?",
    A: [
      { item: "Hummingbird", State: true },
      { item: "Sparrow", State: false },
      { item: "Robin", State: false },
      { item: "Blue Jay", State: false },
    ],
  },
  {
    Q: 'Which animal is known as the "Gentle Giant"?',
    A: [
      { item: "Elephant", State: false },
      { item: "Giraffe", State: false },
      { item: "Whale", State: true },
      { item: "Hippopotamus", State: false },
    ],
  },
  {
    Q: "What is the largest species of shark?",
    A: [
      { item: "Great White Shark", State: true },
      { item: "Hammerhead Shark", State: false },
      { item: "Tiger Shark", State: false },
      { item: "Whale Shark", State: false },
    ],
  },
  {
    Q: "Which animal can change its color to match its surroundings?",
    A: [
      { item: "Lizard", State: false },
      { item: "Frog", State: false },

      { item: "Chameleon", State: true },
      { item: "Octopus", State: false },
    ],
  },
  {
    Q: "What is the only bird that can fly backward?",
    A: [
      { item: "Eagle", State: false },
      { item: "Hummingbird", State: true },
      { item: "Pigeon", State: false },
      { item: "Sparrow", State: false },
    ],
  },
  {
    Q: "Which animal sleeps the most, averaging 22 hours a day?",
    A: [
      { item: "Koala", State: true },
      { item: "Sloth", State: false },
      { item: "Cat", State: false },
      { item: "Panda", State: false },
    ],
  },
  {
    Q: "What is the largest species of bear?",
    A: [
      { item: "Grizzly Bear", State: false },
      { item: "Black Bear", State: false },
      { item: "Brown Bear", State: false },
      { item: "Polar Bear", State: true },
    ],
  },
  {
    Q: "Which bird is known for its ability to mimic a wide range of sounds, including human speech?",
    A: [
      { item: "Owl", State: false },
      { item: "Eagle", State: false },
      { item: "Parrot", State: true },
      { item: "Crow", State: false },
    ],
  },
  {
    Q: "What is the fastest land animal?",
    A: [
      { item: "Lion", State: false },
      { item: "Gazelle", State: false },
      { item: "Leopard", State: false },
      { item: "Cheetah", State: true },
    ],
  },
  {
    Q: "Which animal has the longest migration route?",
    A: [
      { item: "Monarch Butterfly", State: true },
      { item: "Arctic Tern", State: false },
      { item: "Blue Whale", State: false },
      { item: "Elephant Seal", State: false },
    ],
  },
  {
    Q: "What is the only animal that can see behind itself without turning its head?",
    A: [
      { item: "Eagle", State: false },
      { item: "Hawk", State: false },
      { item: "Falcon", State: false },
      { item: "Owl", State: true },
    ],
  },
  {
    Q: "Which animal has the longest neck relative to its body size?",
    A: [
      { item: "Swan", State: false },

      { item: "Giraffe", State: true },
      { item: "Ostrich", State: false },
      { item: "Flamingo", State: false },
    ],
  },
  {
    Q: "What is the only animal that cannot jump?",
    A: [
      { item: "Elephant", State: true },
      { item: "Hippopotamus", State: false },
      { item: "Giraffe", State: false },
      { item: "Rhino", State: false },
    ],
  },
  {
    Q: "Which bird is known for its courtship dance that involves elaborate displays of plumage?",
    A: [
      { item: "Peacock", State: true },
      { item: "Swan", State: false },
      { item: "Flamingo", State: false },
      { item: "Penguin", State: false },
    ],
  },
  {
    Q: "What is the largest species of snake?",
    A: [
      { item: "Boa Constrictor", State: false },
      { item: "Python", State: false },
      { item: "Anaconda", State: true },
      { item: "Cobra", State: false },
    ],
  },
  {
    Q: "Which animal has the most powerful bite?",
    A: [
      { item: "Lion", State: false },
      { item: "Shark", State: false },
      { item: "Hippo", State: false },
      { item: "Crocodile", State: true },
    ],
  },
  {
    Q: "What is the only mammal capable of true sustained flight?",
    A: [
      { item: "Bird", State: false },
      { item: "Flying Squirrel", State: false },
      { item: "Bat", State: true },
      { item: "Pterosaur", State: false },
    ],
  },
  {
    Q: "Which bird is known for its ability to imitate a wide range of sounds, including human speech?",
    A: [
      { item: "Owl", State: false },
      { item: "Parrot", State: true },
      { item: "Eagle", State: false },
      { item: "Crow", State: false },
    ],
  }
];
console.log(myList.length);
let currentQuestionIndex = 0;
let clickCount = 0;
let score = 0;
let ansBtns = document.getElementById("ans-list");
let question = document.getElementById("question");
let ntxBtn = document.getElementById("ntxBtn");
function run() {
  let render = ``;
  myList[currentQuestionIndex].A.forEach((e) => {
    render += `<button class='bbb ${e.State}'>${e.item}</button>`;
  });
  ansBtns.innerHTML = render;
  question.innerHTML = `${currentQuestionIndex + 1}) ${
    myList[currentQuestionIndex].Q
  }`;
  let btns = document.querySelectorAll(".bbb");
  btns.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("true")) {
        score = score + 1;
        e.target.classList.add("green");
        document.querySelector(".green").style.backgroundColor = "green";
        clickCount += clickCount;
        btns.forEach((lolo) => {
          lolo.style.pointerEvents = "none";
        });
      } else {
        e.target.classList.add("red");
        document.querySelector(".red").style.backgroundColor = "red";
        document.querySelector(".true").style.backgroundColor = "green";
        btns.forEach((lolo) => {
          lolo.style.pointerEvents = "none";
        });
      }
      ntxBtn.style.display = "block";
    });
  });
}
run();
ntxBtn.addEventListener("click", nxtRunner);
function nxtRunner() {
  {
    currentQuestionIndex = currentQuestionIndex + 1;
    if (currentQuestionIndex < myList.length) {
      run();
    } else {
      if (score > myList.length / 2 + myList.length / 4) {
        document.getElementById("hero").innerHTML = `<h1>You Win</h1>
                <h1>Your Score : ${score}</h1>`;
      } else {
        document.getElementById("hero").innerHTML = `<h1>You Lose</h1>
                <h1>Your Score : ${score}</h1>`;
      }
      document.getElementById("hero").classList.add("centerer");
    }
    ntxBtn.style.display = "none";
  }
}
