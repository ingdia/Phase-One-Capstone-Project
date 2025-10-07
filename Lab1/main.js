/* This the file for the animation and user experience */

const menubtn = document.getElementById("humberger");
const mobilenav = document.getElementById("mobile-nav");

menubtn.addEventListener('click',() =>{
    mobilenav.classList.toggle("hidden");
})