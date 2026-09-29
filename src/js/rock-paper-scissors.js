const refs = {
  titleElement: document.querySelector(".section-title"),
  listElement: document.querySelector(".section-list"),
  allButtonsElement: document.querySelectorAll(".section-list-button"),
  submitButtonElment: document.querySelector(".submit-button"),
  containerElement: document.querySelector(".container"),
  resultsTitleElement: document.querySelector(".results-title"),
  resultsTextElement: document.querySelector(".results-text"),
  countYourElement: document.createElement("p"),
  countCompElement: document.createElement("p"),
};

let userChoice = 0
let compChoice = 0
let yourScore = 0
let compScore = 0



refs.countCompElement.textContent = ` Комп’ютер - ${compScore}`;
refs.countYourElement.textContent = ` Ви - ${yourScore}`;

refs.resultsTitleElement.append(refs.countCompElement , refs.countYourElement);

function determineWinner(user, comp) {
  if(user === comp) {
    return "draw"
  }
  if((user === 1 && comp === 3) || (user === 2 && comp === 1) || (user === 3 && comp === 2)) {
    return 'comp' 
  }
  return 'user'

}

function handleChoice(choice) {
  userChoice = choice
  compChoice = Math.floor(Math.random() * 3) + 1
  const winner = determineWinner(userChoice, compChoice) 

  if(winner === 'user') {
    yourScore += 1
    refs.resultsTextElement.textContent = 'Ви виграли раунд!'
    refs.resultsTextElement.classList.add('green')
    refs.resultsTextElement.style.color = "green"
  }
  else if (winner === 'comp') {
    compScore += 1
    refs.resultsTextElement.textContent = 'Комп’ютер виграли раунд!'
    refs.resultsTextElement.classList.add('red')
    refs.resultsTextElement.style.color = "red"
  }
  else {
    refs.resultsTextElement.textContent = 'Нічия'
    refs.resultsTextElement.classList.add('draw')
    refs.resultsTextElement.style.color = "orange"
  }
  refs.countYourElement.textContent = `Ви - ${yourScore}`
  refs.countCompElement.textContent = `Комп’ютер - ${compScore}`
}

refs.allButtonsElement.forEach((button, index) => {
  button.addEventListener("click", () => handleChoice(index + 1))

})

refs.submitButtonElment.addEventListener("click", () => {
  if (userChoice === 0) {
    return
  }
  refs.allButtonsElement.forEach((button, index) => {
    if(index === compChoice - 1) {
      button.style.border = "2px solid red"
    }
    else {
      button.style.display = "none"
    }
  })
  setTimeout(() => {refs.allButtonsElement.forEach(button => {
    button.style.display = "inline-block"
    button.style.border = ""
    
  })}, 1700)
})

