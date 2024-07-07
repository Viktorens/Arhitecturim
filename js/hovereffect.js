const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const word = document.getElementsByClassName("random-letters-effect")

function randomizeNameLetters(word) {
    let iterations = 0
    
    const interval = setInterval(() => {
        word.target.innerText = word.target.innerText.split("")
        .map((letter,index) => {
            if(index < iterations) {
                return word.target.dataset.value[index]
            }
            return letters[Math.floor(Math.random()*26)]
        })
        .join("")
    
    if (iterations >= word.target.dataset.value.length) clearInterval(interval)
    
    iterations += 1 / 3
    }, 30)
}

for (var i = 0; i < word.length; i++) {
    word[i].addEventListener("click", randomizeNameLetters)
    word[i].addEventListener("mouseover", randomizeNameLetters)
}