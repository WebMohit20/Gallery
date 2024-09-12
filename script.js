let form = document.querySelector("#img1");

let details = document.querySelector("#img2");

let dice = document.querySelector("#img3");

let coupon = document.querySelector("#img4");

let btns= document.querySelectorAll(".img");


let clickCount=0;
form.addEventListener("click",(e)=>{
    if(clickCount == 0){
        document.querySelector(".form-popup").style.display = "block" 
        clickCount++;
        // for(let t of btns){
        //     t.disabled=true;
        // }
    }
    else if(clickCount == 1){
        document.querySelector(".form-popup").style.display = "none" 
        clickCount=0
        // for(let t of btns){
        //     t.disabled=false;
        // }
    }
    
})

details.addEventListener("click",()=>{
    let name_box=document.querySelector("#name").value;
    let mail_box=document.querySelector("#email").value;
    let uname_box=document.querySelector("#username").value;
    alert(`${name_box}\n${mail_box}\n${uname_box}`);
})






