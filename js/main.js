function slide() {
    let pos = 0;
    function play() {
        pos = (pos + 1) % 3
        $('.slide ul')
            .animate({
                marginTop: -300 * pos + "px"
            }, 600)

    }
    setInterval(play, 3000)
}

$(document)
    .on('ready', slide)

window.onload = function () {
    const cancel = document.querySelector('.cancel');

    cancel.addEventListener('click', function (e) {
        document.querySelector('.email').value = '';
        document.querySelector('.pass').value = '';
    });
};
