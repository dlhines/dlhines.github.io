let element = document.querySelectorAll('.internal');
element.forEach(ele => {
    ele.addEventListener('click', (e) => {
        e.preventDefault();
        let j = ele.getAttribute('href').replace('#','');
        document.getElementById(j).scrollIntoView({
            behavior: 'smooth'
        });
    })    
})