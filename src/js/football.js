const refs = {
    containerEL: document.querySelector(".js-football-container"),
    titleEL: document.createElement("h2"),
    footballFieldEL: document.createElement("div"),
    ballEL: document.createElement("div")
}

refs.titleEL.textContent = "Футбол"
refs.titleEL.classList.add("section-title")
refs.containerEL.append(refs.titleEL)

refs.footballFieldEL.classList.add("football-field")
refs.containerEL.append(refs.footballFieldEL)

refs.ballEL.classList.add("ball")
refs.containerEL.append(refs.ballEL)

refs.footballFieldEL.addEventListener("click", onFootballFieldClick )
function onFootballFieldClick(event) {
    const fieldRect = refs.footballFieldEL.getBoundingClientRect()
    const ballReact = refs.ballEL.getBoundingClientRect()
    console.log(event.clientX);

    let x = event.clientX - fieldRect.left 
    console.log(x);
    let y = event.clientY - fieldRect.top
    
    
    x = x - ballReact.width / 2
   console.log(y);
    
    y = y - ballReact.height / 2
    

    const maxX = refs.footballFieldEL.clientWidth - ballReact.width
    const maxY = refs.footballFieldEL.clientHeight - ballReact.height

    x = Math.max(0, Math.min(x, maxX))
    y = Math.max(0, Math.min(y, maxY))

    refs.ballEL.style.left = x + "px"
    refs.ballEL.style.top = y + "px"
}
