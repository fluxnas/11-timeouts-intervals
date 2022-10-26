const circles = document.querySelectorAll('.cercle')
// console.log(circles)
const score = document.getElementById('score')
let scoreTotal = 0
const btnStart = document.getElementById('btnStart')

// get a random circle

console.log(circles)

const randomCircle = () => {
    circles.forEach(circle => {
        // console.log(circle)
        circle.classList.remove('redCircle')

    });
    const pickRandomCircle = circles[Math.floor(Math.random() * circles.length)]
    // console.log(pickRandomCircle)
    pickRandomCircle.classList.add('redCircle')
}

const intervalCircle = () => {
    setInterval(randomCircle, 2000)
}

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        if (circle.classList.contains('redCircle')) {
            scoreTotal++
            // console.log(scoreTotal)
            score.innerHTML = `${scoreTotal}`
            circle.classList.remove('redCircle')
        }
        else {
            scoreTotal--
            score.innerHTML = `${scoreTotal}`
        }
    })
});



btnStart.addEventListener('click', () => {
    intervalCircle()
}, { once: true })