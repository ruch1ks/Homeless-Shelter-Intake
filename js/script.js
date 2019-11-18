export const renderSignUpModal = function() {
    let modalContainer = document.createElement("div");
    modalContainer.setAttribute("class", "modal");

    let modalBackground = document.createElement("div");
    modalBackground.setAttribute("class", "modal-background");

    let modalCard = document.createElement("div");
    modalCard.setAttribute("class", "modal-card");
    
    let modalHeader = document.createElement("header");
    modalHeader.setAttribute("class", "modal-card-head");

    let modalTitle = document.createElement("p");
    modalTitle.setAttribute("class", "modal-card-title is-family-sans-serif");
    modalTitle.innerHTML = "Sign Up";

    let modalCloseButton = document.createElement("button");
    modalCloseButton.setAttribute("class", "delete");
    modalCloseButton.setAttribute("aria-label", "close");
    modalCloseButton.setAttribute("id", "close");
    modalCloseButton.addEventListener("click", handleCloseButton);

    let modalFormSection = document.createElement("section");
    modalFormSection.setAttribute("class", "modal-card-body");

    let modalFooter = document.createElement("footer");
    modalFooter.setAttribute("class", "modal-card-foot");

    let modalSaveButton = document.createElement("button");
    modalSaveButton.setAttribute("class", "button is-success");
    modalSaveButton.textContent = "Save";

    let modalCancelButton = document.createElement("button");
    modalCancelButton.setAttribute("class", "button");
    modalCancelButton.textContent = "Cancel";

    modalContainer.appendChild(modalBackground);
    modalContainer.appendChild(modalCard);

    modalCard.appendChild(modalHeader);
    modalCard.appendChild(modalFormSection);
    modalCard.appendChild(modalFooter);

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalCloseButton);
    
    modalFormSection.appendChild(buildSignUpForm());

    modalFooter.appendChild(modalSaveButton);
    modalFooter.appendChild(modalCancelButton);

    return modalContainer;
    
}

export const buildSignUpForm = function() {
    let formContainer = document.createElement("div");
    formContainer.setAttribute("class", "container");

    let nameField = document.createElement("div");
    nameField.setAttribute("class", "field");

    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("class", "label is-family-sans-serif");
    nameLabel.textContent = "Name";

    let nameControl = document.createElement("div");
    nameControl.setAttribute("class", "control");

    let nameInput = document.createElement("input");
    nameInput.setAttribute("class", "input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Your Name");

    nameField.appendChild(nameLabel);
    nameField.appendChild(nameControl);
    
    nameControl.appendChild(nameInput);

    let userField = document.createElement("div");
    userField.setAttribute("class", "field");

    let userLabel = document.createElement("label");
    userLabel.setAttribute("class", "label is-family-sans-serif");
    userLabel.innerHTML = "Username";

    let userControl = document.createElement("div");
    userControl.setAttribute("class", "control has-icons-left");

    let userInput = document.createElement("input");
    userInput.setAttribute("class", "input");
    userInput.setAttribute("type", "text");
    userInput.setAttribute("placeholder", "Username");

    let userIconSpan = document.createElement("span");
    userIconSpan.setAttribute("class", "icon is-small is-left");

    let userIconImage = document.createElement("i");
    userIconImage.setAttribute("class", "fab fa-user");

    userField.appendChild(userLabel);
    userField.appendChild(userControl);

    userControl.appendChild(userInput);
    userControl.appendChild(userIconSpan);

    userIconSpan.appendChild(userIconImage);

    formContainer.appendChild(nameField);
    formContainer.appendChild(userField);
    

    return formContainer;
}

export const handleCloseButton = function() {
    console.log("booty");
    let modal = document.getElementsByClassName("is-active")[0];
    modal.setAttribute("class", "modal");
}

$('#signUp').on("click", function() {
    console.log("hey");
    let modal = renderSignUpModal();
    modal.setAttribute("class", "modal is-active");
    $(":root").append(modal);
});
/*
$("#close").on("click", function() {
    console.log("hey again");
    let modal = document.getElementsByClassName("is-active")[0];
    modal.setAttribute("class", "modal");
});*/