// =================== hide scorll top button
const scrollTop = document.querySelector(".scroll-top");
//==================== fixed nav
const header= document.querySelector("#header");

function hideElement(){
    if(window.pageYOffset <= 0) scrollTop.classList.add("hidden");
    else scrollTop.classList.remove("hidden")

    if(window.pageYOffset >= 175) header.classList.add("hidden-header");
    else header.classList.remove("hidden-header")
    
    
    
};
hideElement();
window.addEventListener("scroll",hideElement)

// increment and decrement quantily option
const increQuantilyBtnOp= document.querySelector(".quantily-wrapper .btn-option:last-child");
const decreQuantilyBtnOp= document.querySelector(".quantily-wrapper .btn-option:first-child");
const quantilyInputOp=document.querySelector(".quantily-options__number")


increQuantilyBtnOp.onclick = () =>{
    let numberOption=Number( quantilyInputOp.value)
    if(numberOption < 999){
        
        numberOption+=1;
        quantilyInputOp.value=numberOption;
    }
}
decreQuantilyBtnOp.onclick = () =>{
    let numberOption=Number( quantilyInputOp.value)
    if(numberOption>0&&numberOption<=999){
        numberOption-=1;
        quantilyInputOp.value=numberOption;

    }
}
quantilyInputOp.oninput = (e) =>{
    
    if(Number.isInteger(Number(e.target.value)))
    {
        console.log(Number(e.target.value));
        if(Number(e.target.value) < 999&&Number(e.target.value) >=0)
        {
            quantilyInputOp.value=Number(e.target.value);
        }else quantilyInputOp.value=999;
            
    }
    else quantilyInputOp.value=0;
    // if(e.target.value>=999 || e.target.value<0){
    //     quantilyInputOp.value=0;
    // }else quantilyInputOp.value=e.target.value;
}


// change like color
const likeBtns = document.querySelectorAll(".btn-like");
const likeCount= document.querySelectorAll(".comment__actions__like-count")
console.log(likeCount);
likeBtns.forEach((likeBtn,index)=>{
    likeBtn.onclick=(e)=>{
        e.target.closest(".btn-like").classList.toggle("active");
        if(e.target.closest(".btn-like").classList.includes("active"))
            likeCount[index].value-=1;
        else likeCount[index].value+=1;
    }
})

// pagination active button
const cmtPaginationBtn= document.querySelectorAll(".pagination li");
for (let i=0;i<cmtPaginationBtn.length;i++){
    cmtPaginationBtn[i].onclick = (e)=>{
        e.preventDefault();
        for(let j=0;j<cmtPaginationBtn.length;j++){
            if(cmtPaginationBtn[j])
                cmtPaginationBtn[j].classList.remove("active");
        }
        e.target.closest("li").classList.add("active");
        console.log(cmtPaginationBtn);
    }
}
