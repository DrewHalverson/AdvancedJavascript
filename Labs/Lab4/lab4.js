const init = () => {
    let buttonDotNotationOne = document.querySelector("#dotNotation1");
    let buttonDotNotationTwo = document.querySelector("#dotNotation2");
    let buttonDotNotationThree = document.querySelector("#dotNotation3");
    
    buttonDotNotationOne.onclick = dotNotation;
    buttonDotNotationTwo.onclick = dotNotation;
    buttonDotNotationThree.onclick = dotNotation;

    let buttonEventListenerOne = document.querySelector("#eventListener1");
    let buttonEventListenerTwo = document.querySelector("#eventListener2");
    let buttonEventListenerThree = document.querySelector("#eventListener3");

    buttonEventListenerOne.addEventListener("click", w3c);
    buttonEventListenerTwo.addEventListener("click", w3c);
    buttonEventListenerThree.addEventListener("click", w3c);

}

const inline = control => {
    console.log(control.getAttribute("value"));
}

const dotNotation = event => {
    console.log(event.currentTarget.getAttribute("value"));
}

const w3c = event => {
    console.log(event.currentTarget.getAttribute("value"));
}
