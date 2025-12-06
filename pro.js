console.log("Профиль страница загружена");


const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


