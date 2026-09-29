const refs = {
  inputYear: document.querySelector(".js-year-of-birth-input"),
  buttonYear: document.querySelector(".js-year-of-birth-btn"),
  textYear: document.querySelector(".js-year-of-birth-text"),
};

refs.buttonYear.addEventListener("click", onButtonYearClick)

function onButtonYearClick() {
    // console.log(refs.inputYear.value);
    const year = parseInt(refs.inputYear.value) 
    if (refs.inputYear.value === "") {
        refs.textYear.textContent = "Будь ласка, введіть рік!";
        refs.textYear.style.color = "red"
        return
    }
    const isLeapYear = (
        year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 
    )
    if (isLeapYear) {
        refs.textYear.textContent = "Ви народилися у високосний рік!";
        refs.textYear.style.color = "green"
    }
    else {
        refs.textYear.textContent = "Ви народилися не у високосний рік!";
        refs.textYear.style.color = "red";
    }
}