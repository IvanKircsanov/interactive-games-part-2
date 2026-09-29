const refs = {
    firstInput: document.querySelector('.js-section-input-1'),
    secondInput: document.querySelector('.js-section-input-2'),
    result: document.querySelector('.math-results'),
    equals: document.querySelector('.results-button'),
    plus: document.querySelector('.math-opers-plus'),
    multiply: document.querySelector('.math-opers-multiply'),
    minus: document.querySelector('.math-opers-minus'),
    divide: document.querySelector('.math-opers-divide'),
}

let operation

const buttons = document.querySelectorAll('.opers-button')

buttons.forEach(button => button.addEventListener('click', () => {
    operation = button.dataset.operation
}))

refs.equals.addEventListener('click', () => {
    const a = +refs.firstInput.value
    const b = +refs.secondInput.value
    let result
    switch(operation) {
        case '+': 
            result = a + b ;
            break;

        case '-': 
            result = a - b ;
            break;

        case '*': 
            result = a * b ;
            break;

        case '/': 
            if (b === 0) {
                refs.result.textContent = 'Error 401'
                return
            }
            else {
                result = a / b ;
            }
            break;
        default: refs.result.textContent = 'Невідома операція!'
        return
        
    }
    refs.result.textContent = result
})