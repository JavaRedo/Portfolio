window.onload() = (event) => {
    
}
function navBarOffset(){
    let navBar = document.querySelector(".navBar");
    let ref = document.getElementById("#AboutMeLinkRef");
    let rect = ref.getBoundingClientRect();
    let posY = ref.top;
    let height = window.getComputedStyle(navBar).getPropertyValue("height");
    scrollTo({
        top : posY - height,
        left : 0,
        behavior : smooth
    })
}