let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup_form');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('active');
        popupForm.classList.add('active');
    })

});

closePopupButton.addEventListener('click',() =>{
    popup.classList.remove('active');
    popupForm.classList.remove('active');
})