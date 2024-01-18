
const wrapper = document.querySelector(".slider-wraper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;   
    });
});



//rapper.style.transform = 'translateX (-300 vw)' ;

//menuItems.forEach((item, index) => {
 //   item.addEventListener("click", ()=> {
//});
//});