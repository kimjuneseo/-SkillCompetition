window.onload = function () {
    let count = 1
    const cancelBtn = document.querySelector('.cancel');
    const slideUl = document.querySelector('.slide li')
    const slideCansl = document.querySelector('.slideCansle')
    const slideGo = document.querySelector('.slideGo')
    const nextBtn = document.querySelector('.next')
    const backBtn = document.querySelector('.backWards')

    function remove() {
        document.querySelector('.email').value = '';
        document.querySelector('.pass').value = '';
    }
    cancelBtn.addEventListener('click', remove)


    function slide() {
        for (let i = 0; i < count, count < 3; i++) {
            slideUl.style.marginTop = -300 * count + "px"
            slideUl.style.transition = 0.7 + "s"
            count++
            return
        }
        count = 0
    }
    let set = setInterval(slide, 1500)

    function stop() {
        clearInterval(set)
    }

    function go() {
        setInterval(slide, 1500)
    }
    function next() {
        count++
    }
    function backWards() {
        count--
    }
    slideCansl.addEventListener('click', stop)
    slideGo.addEventListener('click', go)
    nextBtn.addEventListener('click', next)
    backBtn.addEventListener('click', backWards)

};