window.addEventListener('click', musicPlay);

function musicPlay() {
    document.getElementById('music').play();

    window.removeEventListener('click', musicPlay);

}