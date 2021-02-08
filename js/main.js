function slide() {
    var pos = 0;
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
