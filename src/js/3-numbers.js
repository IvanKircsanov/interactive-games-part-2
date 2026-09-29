const refs = {
  input : document.querySelectorAll('.js-section-input'),
  biggestNumber : document.querySelector('.biggest-number')
};

refs.input.forEach((input) => {
    input.addEventListener('input', findMaxNumber)
})

function findMaxNumber() {
    let numbers = []
    refs.input.forEach((input) => {
        const value = input.value
        if (value === '') {
            return
        }
        const number = Number(value)
        numbers.push(number)
    })
    const maxNumber = Math.max(...numbers)
    refs.biggestNumber.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`
}