let ball = document.querySelector(".ball img")

console.log(ball)
ball.onclick = anim 
function anim (event){
    event.preventDefault ()
    ball.classList.toggle("ball-animation")
}
