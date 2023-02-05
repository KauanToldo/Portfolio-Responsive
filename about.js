const changeTHemeBtn = document.querySelector("#change-theme")
const open = document.querySelector(".open-sidebar")
const close = document.querySelector(".close-sidebar")
const sidebar = document.querySelector("#sidebar-menu").classList
const sidebarBack = document.querySelector("#sidebar-background").classList


changeTHemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("light");
    document.querySelector("#img-perfil").classList.toggle("light-border")
    document.querySelector("#biografia-text").classList.toggle("light-square")
    document.querySelector("#biografia-text").classList.toggle("dark-square")
    document.querySelector("#sidebar-menu").classList.toggle("light-background")
    document.querySelector("#sidebar-menu").classList.toggle("dark-background")
    document.querySelector(".home").classList.toggle("link-light")
    document.querySelector(".home").classList.toggle("link-dark")
    document.querySelector(".sobre").classList.toggle("link-light")
    document.querySelector(".sobre").classList.toggle("link-dark")
    document.querySelector(".sugestão").classList.toggle("link-light")
    document.querySelector(".sugestão").classList.toggle("link-dark")

})

open.addEventListener("click",function() {
    sidebar.toggle("opened");
    sidebar.toggle("closed")
    sidebarBack.toggle("opened-background");
})

close.addEventListener("click",function() {
    sidebar.toggle("opened");
    sidebar.toggle("closed");
    sidebarBack.toggle("opened-background");
})