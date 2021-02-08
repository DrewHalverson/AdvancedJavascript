// This function creates a web form with a text field and a submit button
const init = () => {

    let formElement = document.createElement("form");

    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "form-group");

    let userField = document.createElement("input");
    userField.setAttribute("class", "form-control");
    userField.setAttribute("type", "text");
    userField.setAttribute("id", "username");

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "click me";

    formElement.appendChild(userField);
    formElement.appendChild(button);
    document.body.appendChild(formElement);

}
