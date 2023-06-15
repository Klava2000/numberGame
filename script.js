const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*100)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13)
        play();
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector("#input").value;

    if (userNumber < 1 || userNumber > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Ваше число вне диапазона.',
            text: 'Загаданное число больше 0 и меньше 100.',
        })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Упс...',
            text: 'Нужно ввести число!',
        })
    }

    else {
        if (userNumber < answer) {
            Swal.fire('Загаданное число больше')
        }

        else if (userNumber > answer) {
            Swal.fire('Загаданное число меньше')
        }

        else {
            Swal.fire('Ты отгадал число!',
            'Сыграть еще раз?')
        }
    }
}