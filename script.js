const para = document.querySelector("p");
const h = document.querySelector("h1");
const btn = document.querySelector("button");
const icon = document.querySelector(".ri-contrast-2-fill");
const body = document.querySelector("body");
let originalLength=para.textContent;

btn.addEventListener("click",function() {
    if (btn.textContent=="Read less") {
        btn.textContent="Read more"
        para.textContent=para.textContent.substring(0,302);
        btn.style.color="green"
        btn.style.backgroundColor="lightgreen"
        btn.style.border="3px solid green"
        h.style.borderBottom="3px solid green"
        h.style.boxShadow="0px 15px 15px -15px rgb(45, 250, 45)"
        
    }else{
        btn.textContent="Read less"
        para.textContent=originalLength;
        btn.style.color="red"
        btn.style.backgroundColor="palevioletred"
        btn.style.border="3px solid red"
        h.style.borderBottom="3px solid red"
        h.style.boxShadow="0px 15px 15px -15px rgb(252, 96, 96)"
    }
})

icon.addEventListener("click",function() {
    if ( body.style.backgroundColor=="white" ) {
        body.style.backgroundColor="black"
        body.style.color="white" 
        icon.classList.remove('ri-contrast-2-fill');
        icon.classList.add('ri-sun-fill');
        icon.style.animation="rotation 3s infinite linear"
        
    }else{
        body.style.backgroundColor="white"
        body.style.color="black" 
        icon.classList.add('ri-contrast-2-fill');
        icon.classList.remove('ri-sun-fill');
        icon.style.animation="increment 1s alternate infinite linear"

    }
    
})