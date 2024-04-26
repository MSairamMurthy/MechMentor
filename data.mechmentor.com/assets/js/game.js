var words = [
    {
        word: "Metal",
        hint: "Material used in foundry"
    },
    {
        word: "Casting",
        hint: "Liquid metal form"
    },
    {
        word: "Mold",
        hint: "Tool for shaping metal"
    },
    {
        word: "Melting",
        hint: "Process of heating metal"
    },
    {
        word: "Furnace",
        hint: "Heating unit in foundry"
    },
    {
        word: "Sand",
        hint: "Material for making molds"
    },
    {
        word: "Crucible",
        hint: "Container for molten metal"
    },
    {
        word: "Casting",
        hint: "Shaping process in foundry"
    },
    {
        word: "Refining",
        hint: "Metal purification process"
    },
    {
        word: "Finishing",
        hint: "Final touch on metal products"
    },
    {
        word: "Rammer",
        hint: "Foundry tool used to shape and mold sand"
    },
    {
        word: "Machining",
        hint: "Foundry process to create precise metal parts"
    },
    {
        word: "Ladle",
        hint: "Foundry equipment used to pour molten metal into molds"
    },
    {
        word: "Cooling bed",
        hint: "Foundry equipment used to cool and solidify molten metal"
    },
    {
        word: "Die casting",
        hint: "Foundry process to create metal objects by injecting molten metal into a mold under high pressure"
    },
    {
        word: "Investment casting",
        hint: "Foundry process to create intricate metal objects using a wax pattern"
    },
    {
        word: "Brazing",
        hint: "Foundry process to join metal parts using a filler material"
    },
    {
        word: "Coating",
        hint: "Foundry process to coat metal objects with a protective layer"
    },
    {
        word: "Grinding",
        hint: "Foundry tool used to remove excess material from metal objects"
    },
    {
        word: "Spinning",
        hint: "Foundry process to create metal objects by shaping metal using a spinning tool"
    },
    {
        word: "Press",
        hint: "Foundry equipment used to shape metal objects by applying pressure"
    },
    {
        word: "Turning",
        hint: "Foundry process to shape metal objects using a rotating cutting tool"
    },
    {
        word: "Rolling",
        hint: "Foundry process to create metal objects by shaping metal using rollers or presses"
    },
]


const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);