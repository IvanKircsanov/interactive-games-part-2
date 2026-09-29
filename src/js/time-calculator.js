const refs = {
  input : document.querySelector('.js-section-input'),
  submitButton : document.querySelector('.js-input-btn'),
  result : document.querySelector('.time-results')
};

refs.submitButton.addEventListener('click', () => {
    const value = refs.input.value
    if(value === '') {
        alert('Must containe a Number!')
        return
    }
    const seconds = parseFloat(value)
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    refs.result.textContent = `${days} дн. ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
})