const links = document.querySelectorAll (".link")
const sections = document.querySelectorAll ("section")

let activeLink = 0;

// links.forEach((link, i) => {
//     link.addEventListener("click", () => {
//         if(activeLink != i) {
//             links[activeLink].classList.remove("active");
//             link.classList.add("active");
//             sections[activeLink].classList.remove("active");

//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add("active");
//             }, 1000);
//         }
//     })
// })

function deactivate(){
    document.querySelector('.home-section').classList.remove('active');
    document.querySelector('.about-section').classList.remove('active');
    document.querySelector('.project-section').classList.remove('active');
    document.querySelector('.contact-section').classList.remove('active');
    btnAbout.classList.remove('active');
    btnProject.classList.remove('active');
    btnContact.classList.remove('active');
    btnHome.classList.remove('active');
}

btnAbout.addEventListener('click', function(){
    deactivate();
    document.querySelector('.about-section').classList.add('active');
    this.classList.add('active');
})

btnProject.addEventListener('click', function(){
    deactivate();
    document.querySelector('.project-section').classList.add('active');
    this.classList.add('active');
})

btnContact.addEventListener('click', function(){
    deactivate();
    document.querySelector('.contact-section').classList.add('active');
    this.classList.add('active');
})

btnHome.addEventListener('click', function(){
    deactivate();
    document.querySelector('.home-section').classList.add('active');
    this.classList.add('active');
})