let input = document.querySelector("input");
let counter = document.querySelector(".counter");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("submit") === true) {
    let number = input.value;
    counter.textContent = number;
    let countF = setInterval(function(){
        counter.innerHTML-=1
        if(counter.innerHTML==="0"){
            clearInterval(countF);
        }
    },1000);
}
});

