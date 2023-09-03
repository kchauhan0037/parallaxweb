let text=document.getElementById('text')
let topl=document.getElementById('topl')
let bottml=document.getElementById('bottml')
let leftl=document.getElementById('leftl')
let rightl=document.getElementById('rightl')

window.addEventListener('scroll',()=>{
    let value=window.scrollY
    text.style.marginTop=value*2.5+'px'
    topl.style.top=value*-2.5+'px'
    topl.style.left=value* 1.5+'px'
    rightl.style.left=value*1.5+'px'
    leftl.style.left=value*-1.8+'px'
})