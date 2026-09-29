const refs = {
  input: document.querySelector(".js-section-input"),
  button: document.querySelector(".js-input-btn"),
  text: document.querySelector(".js-section-text"),
};

let randomNumber = Math.floor(Math.random() * 10) + 1

refs.button.addEventListener("click", onButtonClick);

function onButtonClick() {
    // console.log(refs.input.value);
    const number = parseInt(refs.input.value) 
    if (refs.input.value === "") {
        refs.text.textContent = "Будь ласка, введіть число!";
        refs.text.style.color = "red"
        return
    }console.log(number , typeof number);
    if (number > 10 || number < 1) {
        // console.log(number > 10 || number < 1);
        // refs.text.textContent = "Введіть число від 1 до 10!";
        // refs.text.style.color = "red";
        console.log(refs.text);
        
        alert("Введіть число від 1 до 10!");
    }
    if (number === randomNumber) {
        refs.text.textContent = `Вітаю, ви вгадали число! ${number}` ;
        refs.text.style.color = "green"
    }
    else {
        refs.text.textContent = `Ви програли, комп’ютер загадав - ${randomNumber}`;
        refs.text.style.color = "red";
    }
    randomNumber = Math.floor(Math.random() * 10) + 1;
}