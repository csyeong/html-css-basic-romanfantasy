const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in");
        }else{
            entry.target.classList.remove("fade-in");
        }
    });
    },{threshold: 0.1}
);

const targetElements = document.querySelectorAll(".fade-wrap");
targetElements.forEach((element) => {
    observer.observe(element);
});

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in");
        }else{
            entry.target.classList.remove("fade-in");
        }
    });
    },{threshold: 0.1}
);

const targetElements2 = document.querySelectorAll(".fade-wrap-right");
targetElements2.forEach((element) => {
    observer2.observe(element);
});