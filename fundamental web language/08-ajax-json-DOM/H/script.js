let icons = document.querySelectorAll("main img");

let learnMore = document.querySelector(".shop button");

for(let icon of icons){
    icon.addEventListener('mouseenter',function(){
        icon.style.height = "112%";
    })

    icon.addEventListener('mouseleave',function(){
        icon.style.height = "80%";
    })
    
}

learnMore.addEventListener('click',function(){
    document.querySelector(".shop #layer").remove();
    let title = document.querySelector(".shop h1");
    title.innerHTML = "welcome to my flower shop";
    title.style.background = "#787878";
    title.style.color = "blue";
    learnMore.innerHTML = 'buy flowers';
    learnMore.style.background = 'red';
    
})