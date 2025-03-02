const taskRemain = parseInt(document.getElementById('task-remain'))
document.getElementById('blog').addEventListener("click", function () {
    window.location.href = "main.html"
})

const date = document.getElementById('date')
date.innerText = `${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace(',', '')}`;
let options = { weekday: 'short' }
document.getElementById('day').innerText = `${new Date().toLocaleDateString('en-US', options)}`


document.getElementById('history-btn').addEventListener("click", function () {
    document.getElementById('History').innerText = "";
})

document.getElementById('t1-btn').addEventListener("click", function () {

    taskCompleted("t1-btn", "t1-tag")
})

document.getElementById('t2-btn').addEventListener("click", function () {
    taskCompleted("t2-btn", "t2-tag")
})

document.getElementById('t3-btn').addEventListener("click", function () {
    taskCompleted("t3-btn", "t3-tag")
})
document.getElementById('t4-btn').addEventListener("click", function () {
    taskCompleted("t4-btn", "t4-tag")
})
document.getElementById('t5-btn').addEventListener("click", function () {
    taskCompleted("t5-btn", "t5-tag")
})
document.getElementById('t6-btn').addEventListener("click", function () {
    taskCompleted("t6-btn", "t6-tag")
})


document.getElementById('bg').addEventListener("click", function () {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);

    let randomBg = `rgb(${R}, ${G}, ${B})`;
    document.getElementById('body').style.backgroundColor = randomBg
    document.getElementById("main").style.backgroundColor = randomBg

})

