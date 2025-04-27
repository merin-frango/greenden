var sideNav=document.getElementById("sideNav")
var menuIcon=document.getElementById("menuIcon")
var closeNav=document.getElementById("closeNav")

menuIcon.addEventListener("click",function(){
    sideNav.style.right=0
})

closeNav.addEventListener("click",function(){
    sideNav.style.right="-50%"
})