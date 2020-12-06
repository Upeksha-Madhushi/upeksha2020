window.onload=()=>{
    setTimeout(()=>{
        document.querySelector("body").classList.add("display")
    },4000);
};

document.querySelector(".hamburger-menu").addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("change");
});


document.querySelector(".scroll-btn").addEventListener("click",()=>{
    document.querySelector("html").style.scrollBehavior ="smooth";
setTimeout(()=>{
    document.querySelector("html").style.scrollBehavior ="unset";
},10000);
});



const menu=document.querySelector(".menu"),
      menuList=menu.querySelector(li),
      totalMenuList=menuList.length;
      allSection = document.querySelectorAll(".section"),
      totalSection=allSection.length;


for(let i=0; i<totalMenuList;i++){
    const a=menuList[i].querySelector("a");
    a.addEventListener("click",function(){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j=0;j<totalMenuList; j++){
            if(menuList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            menuList[j].querySelector("a").classList.remove(active);
        }
        this.classList.add("active");
        showSection(this);

    })

    

}

function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
        
}
/*
function asideSectionTogglerBtn(){
    document.querySelector(".sidebar").classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}*/
/*
function updateNav(element){
    for(let i=0;i<totalMenuList; i++){
        menuList[i].querySelector("a").classList.remove(active);
        const target=element.getAttribute("href").split("#")[1];
        if(target===menuList[i].querySelector("a").getAttribute("href").split("#")[1]){
            menuList[i].querySelector("a").classList.add("active");
        }
    }
    //console.log(element.getAttribute("href").split("#")[1])
}
document.querySelector(".banner button").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
})*/