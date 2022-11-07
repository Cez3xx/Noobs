const noButton = document.getElementById('no')
const yesButton = document.getElementById('yes')
const container = document.querySelector('.container')

noButton.addEventListener('mouseover', function(e){
    noButton.style.top = Math.random() * container.clientHeight + 'px'
    noButton.style.left = Math.random() * container.clientHeight + 'px'
})

yesButton.addEventListener('click', function(){
    document.querySelector('h1').innerHTML = 'Haha I knew it NOOB!'
})