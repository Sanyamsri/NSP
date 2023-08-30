let prevButton=document.getElementById('prev')
console.log(prevButton)
let nextButton=document.getElementById('next')
prevButton.addEventListener("click", ()=>{
    console.log("pop")
    let container=document.getElementById('container')
    container.scrollLeft+=100;
});